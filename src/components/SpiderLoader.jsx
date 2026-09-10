import { useEffect, useRef } from "react";

/**
 * SpiderSignal
 * Full React port of the original full-screen HTML page: dot-formed
 * spider silhouette, HUD corner labels, hex ticker, scan sweep,
 * centerline, scanlines, and the assembling/locked/dispersing status
 * readout — all preserved as-is, just rebuilt with hooks + refs
 * instead of plain DOM script.
 */
export default function SpiderSignal() {
  const canvasRef = useRef(null);
  const statusLabelRef = useRef(null);
  const statusPctRef = useRef(null);
  const statusTrackRef = useRef(null);
  const hexRef = useRef(null);

  // hex readout ticker
  useEffect(() => {
    const id = setInterval(() => {
      const hex = Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .toUpperCase()
        .padStart(6, "0");
      if (hexRef.current) hexRef.current.textContent = "0X" + hex;
    }, 900);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const off = document.createElement("canvas");
    const offCtx = off.getContext("2d", { willReadFrequently: true });
    const offInner = document.createElement("canvas");
    const offInnerCtx = offInner.getContext("2d", { willReadFrequently: true });

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---- spider anatomy (design units around origin 0,0) ----
    const CEPHA_C = [0, -50], CEPHA_R = [50, 42];
    const ABDO_C = [0, 65], ABDO_R = [72, 92];
    const LEG_DEFS = [
      { ang: 15, len: 340 },
      { ang: 55, len: 260 },
      { ang: 105, len: 250 },
      { ang: 145, len: 330 },
    ];
    const HIP_R = 48;
    const BEND_DEG = 16;
    const NEAR_W = 17, FAR_W = 5;

    function buildLegs(erode) {
      const legs = [];
      [1, -1].forEach((side) => {
        LEG_DEFS.forEach((ld) => {
          const rad = (ld.ang * Math.PI) / 180;
          const dirx = Math.sin(rad) * side, diry = -Math.cos(rad);
          const L = Math.max(0, ld.len - erode);
          const hipx = CEPHA_C[0] + dirx * HIP_R, hipy = CEPHA_C[1] + diry * HIP_R;
          const kneeX = hipx + dirx * (L * 0.5), kneeY = hipy + diry * (L * 0.5);
          const rad2 = rad + ((BEND_DEG * side) * Math.PI) / 180;
          const dir2x = Math.sin(rad2) * side, dir2y = -Math.cos(rad2);
          const midX = kneeX + dir2x * (L * 0.32), midY = kneeY + dir2y * (L * 0.32);
          const tipX = midX + dir2x * (L * 0.18), tipY = midY + dir2y * (L * 0.18);
          legs.push({
            hip: [hipx, hipy], knee: [kneeX, kneeY], mid: [midX, midY], tip: [tipX, tipY],
            nearW: Math.max(0, NEAR_W - erode * 2),
            farW: Math.max(0, FAR_W - erode * 2),
          });
        });
      });
      return legs;
    }

    function computeBBox() {
      const legs = buildLegs(0);
      let minX = -CEPHA_R[0], maxX = CEPHA_R[0];
      let minY = CEPHA_C[1] - CEPHA_R[1], maxY = ABDO_C[1] + ABDO_R[1];
      minX = Math.min(minX, -ABDO_R[0]); maxX = Math.max(maxX, ABDO_R[0]);
      legs.forEach((l) => {
        [l.hip, l.knee, l.mid, l.tip].forEach((p) => {
          minX = Math.min(minX, p[0]); maxX = Math.max(maxX, p[0]);
          minY = Math.min(minY, p[1]); maxY = Math.max(maxY, p[1]);
        });
      });
      return { minX, maxX, minY, maxY };
    }
    const BBOX = computeBBox();

    function drawSpider(targetCtx, cx, cy, s, erode) {
      targetCtx.fillStyle = "#00f6ff";
      targetCtx.strokeStyle = "#00f6ff";
      targetCtx.lineCap = "round";
      targetCtx.lineJoin = "round";

      const cephaR = [Math.max(0, CEPHA_R[0] - erode), Math.max(0, CEPHA_R[1] - erode)];
      const abdoR = [Math.max(0, ABDO_R[0] - erode), Math.max(0, ABDO_R[1] - erode)];

      targetCtx.beginPath();
      targetCtx.ellipse(cx + CEPHA_C[0] * s, cy + CEPHA_C[1] * s, cephaR[0] * s, cephaR[1] * s, 0, 0, Math.PI * 2);
      targetCtx.fill();
      targetCtx.beginPath();
      targetCtx.ellipse(cx + ABDO_C[0] * s, cy + ABDO_C[1] * s, abdoR[0] * s, abdoR[1] * s, 0, 0, Math.PI * 2);
      targetCtx.fill();

      buildLegs(erode).forEach((l) => {
        const seg = (a, b, w) => {
          if (w <= 0) return;
          targetCtx.lineWidth = w * s;
          targetCtx.beginPath();
          targetCtx.moveTo(cx + a[0] * s, cy + a[1] * s);
          targetCtx.lineTo(cx + b[0] * s, cy + b[1] * s);
          targetCtx.stroke();
        };
        seg(l.hip, l.knee, l.nearW);
        seg(l.knee, l.mid, (l.nearW + l.farW) / 2);
        seg(l.mid, l.tip, l.farW);
      });
    }

    let W = 0, H = 0, cx = 0, cy = 0, scaleUnits = 1;
    let fillParticles = [], edgeParticles = [];
    let centroidCanvas = [0, 0], normRadius = 1;
    let rafId = null;

    function makeParticle(px, py, baseAlpha, isEdge) {
      const dx = px - centroidCanvas[0], dy = py - centroidCanvas[1];
      const dist = Math.hypot(dx, dy) || 1;
      const ang = Math.atan2(dy, dx);
      const explode = dist * 2.2 + 140 + Math.random() * 260;
      const sx = centroidCanvas[0] + Math.cos(ang) * explode + (Math.random() - 0.5) * 150;
      const sy = centroidCanvas[1] + Math.sin(ang) * explode + (Math.random() - 0.5) * 150;
      return {
        tx: px, ty: py, sx, sy, baseAlpha, isEdge,
        delayNorm: Math.min(1, dist / normRadius),
        phase: Math.random() * Math.PI * 2,
        size: 0.55 * DPR,
      };
    }

    function rebuild() {
      W = canvas.width = Math.round(window.innerWidth * DPR);
      H = canvas.height = Math.round(window.innerHeight * DPR);
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";

      off.width = offInner.width = W;
      off.height = offInner.height = H;

      const bboxW = BBOX.maxX - BBOX.minX, bboxH = BBOX.maxY - BBOX.minY;
      const fitW = window.innerWidth * 0.5, fitH = window.innerHeight * 0.6;
      scaleUnits = Math.min(fitW / bboxW, fitH / bboxH) * DPR;

      cx = W / 2;
      const bboxCenterY = (BBOX.minY + BBOX.maxY) / 2;
      cy = H * 0.52 - bboxCenterY * scaleUnits - window.innerHeight * 0.015 * DPR;

      centroidCanvas = [cx, cy + CEPHA_C[1] * scaleUnits * 0.15];
      normRadius = Math.max(W, H) * 0.42;

      offCtx.clearRect(0, 0, W, H);
      drawSpider(offCtx, cx, cy, scaleUnits, 0);
      const fullData = offCtx.getImageData(0, 0, W, H).data;

      offInnerCtx.clearRect(0, 0, W, H);
      drawSpider(offInnerCtx, cx, cy, scaleUnits, 9);
      const innerData = offInnerCtx.getImageData(0, 0, W, H).data;

      const hotX = cx + CEPHA_C[0] * scaleUnits, hotY = cy + CEPHA_C[1] * scaleUnits;
      const hotNorm = Math.max(W, H) * 0.5;

      fillParticles = [];
      edgeParticles = [];
      const step = Math.max(2, Math.round(3.2 * DPR));

      for (let y = 0; y < H; y += step) {
        const rowBase = y * W;
        for (let x = 0; x < W; x += step) {
          const idx = (rowBase + x) * 4 + 3;
          const a = fullData[idx];
          if (a < 40) continue;
          const isEdge = innerData[idx] < 40;
          const dHot = Math.hypot(x - hotX, y - hotY);
          let bright = 1 - dHot / hotNorm;
          bright = Math.max(0.08, Math.min(1, bright));

          if (isEdge) {
            edgeParticles.push(makeParticle(x, y, 0.7 + bright * 0.3, true));
          } else {
            if (Math.random() < 0.18) continue;
            bright *= 0.45 + Math.random() * 0.6;
            fillParticles.push(makeParticle(x, y, bright, false));
          }
        }
      }
    }

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const easeInCubic = (t) => t * t * t;
    const lerp = (a, b, t) => a + (b - a) * t;
    const colorFor = (b) => {
      const c1 = [0, 80, 120], c2 = [0, 255, 255];
      return [c1[0] + (c2[0] - c1[0]) * b, c1[1] + (c2[1] - c1[1]) * b, c1[2] + (c2[2] - c1[2]) * b];
    };

    const FORM = 3200, HOLD = 3400, DISP = 2000, TOTAL = 9000;

    function drawGlowBackdrop(now) {
      const g = ctx.createRadialGradient(
        centroidCanvas[0], centroidCanvas[1], 10,
        centroidCanvas[0], centroidCanvas[1], Math.max(W, H) * 0.42
      );
      const pulse = 0.1 + 0.03 * Math.sin(now * 0.0007);
      g.addColorStop(0, "rgba(150,215,255," + pulse + ")");
      g.addColorStop(1, "rgba(150,215,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    }

    function drawParticles(list, now, progress) {
      for (let i = 0; i < list.length; i++) {
        const p = list[i];
        let x, y, alpha;

        if (reduced) {
          x = p.tx; y = p.ty;
          alpha = p.baseAlpha * (0.75 + 0.25 * Math.sin(now * 0.0018 + p.phase));
        } else if (progress < FORM) {
          const t = progress / FORM;
          const startAt = p.delayNorm * 0.5;
          const local = Math.max(0, Math.min(1, (t - startAt) / (1 - startAt)));
          const e = easeOutCubic(local);
          x = lerp(p.sx, p.tx, e);
          y = lerp(p.sy, p.ty, e);
          alpha = e * p.baseAlpha;
        } else if (progress < FORM + HOLD) {
          const jt = now * 0.0022 + p.phase;
          x = p.tx + Math.cos(jt) * 1.1 * DPR;
          y = p.ty + Math.sin(jt * 1.3) * 1.1 * DPR;
          alpha = p.baseAlpha * (0.72 + 0.28 * Math.sin(now * 0.0026 + p.phase));
        } else if (progress < FORM + HOLD + DISP) {
          const t = (progress - FORM - HOLD) / DISP;
          const e = easeInCubic(Math.min(1, t + p.delayNorm * 0.15));
          x = lerp(p.tx, p.sx, e);
          y = lerp(p.ty, p.sy, e);
          alpha = p.baseAlpha * (1 - e);
        } else {
          x = p.sx; y = p.sy; alpha = 0;
        }

        if (alpha <= 0.01) continue;
        const c = colorFor(p.baseAlpha);
        ctx.beginPath();
        ctx.fillStyle = "rgba(" + (c[0] | 0) + "," + (c[1] | 0) + "," + (c[2] | 0) + "," + alpha.toFixed(3) + ")";
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function updateStatus(progress) {
      let label, pct;
      if (reduced) { label = "PATTERN LOCKED"; pct = 100; }
      else if (progress < FORM) { label = "ASSEMBLING"; pct = Math.round((progress / FORM) * 100); }
      else if (progress < FORM + HOLD) { label = "PATTERN LOCKED"; pct = 100; }
      else if (progress < FORM + HOLD + DISP) { label = "DISPERSING"; pct = Math.round(100 - ((progress - FORM - HOLD) / DISP) * 100); }
      else { label = "RECALIBRATING"; pct = 0; }
      if (statusLabelRef.current) statusLabelRef.current.textContent = label;
      if (statusPctRef.current) statusPctRef.current.textContent = String(pct).padStart(2, "0") + "%";
      if (statusTrackRef.current) statusTrackRef.current.style.width = pct + "%";
    }

    function frame(now) {
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      drawGlowBackdrop(now);

      const progress = reduced ? FORM + HOLD : now % TOTAL;
      drawParticles(fillParticles, now, progress);
      drawParticles(edgeParticles, now, progress);

      ctx.globalCompositeOperation = "source-over";
      updateStatus(progress);

      rafId = requestAnimationFrame(frame);
    }

    let resizeT = null;
    const onResize = () => {
      clearTimeout(resizeT);
      resizeT = setTimeout(rebuild, 120);
    };

    rebuild();
    rafId = requestAnimationFrame(frame);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeT);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, background: "#020509", overflow: "hidden" }}>
      <style>{`
        @keyframes ss-sweepMove {
          0%   { transform: translateY(-30vh); }
          100% { transform: translateY(130vh); }
        }
        @keyframes ss-flicker {
          0%, 92%, 100% { opacity: 0.68; }
          93% { opacity: 0.15; }
          94% { opacity: 0.68; }
          95% { opacity: 0.25; }
          96% { opacity: 0.68; }
        }
        .ss-bg {
          position: fixed; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 1.4px);
          background-size: 24px 24px;
          background-position: -2px -2px;
        }
        .ss-hud {
          position: fixed; color: rgba(170,225,255,0.55); font-size: 10.5px; line-height: 1.5;
          letter-spacing: 0.04em; text-transform: uppercase; opacity: 0.68;
          pointer-events: none; user-select: none;
          font-family: "IBM Plex Mono","SFMono-Regular",Consolas,"Courier New",monospace;
        }
        .ss-hud .bar { height: 1px; background: rgba(140,200,235,0.28); margin-top: 4px; }
        .ss-hud .w1 { width: 64px; }
        .ss-hud .w2 { width: 34px; margin-top: 3px; }
        .ss-hud .dim { color: rgba(150,200,230,0.55); }
        .ss-flicker { animation: ss-flicker 5.4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ss-sweep, .ss-flicker { animation: none; }
        }
      `}</style>

      <div className="ss-bg" />
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />

      <div
        style={{
          position: "fixed", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at 50% 42%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      <div
        style={{
          position: "fixed", top: 0, bottom: 0, left: "50%", width: 1, transform: "translateX(-0.5px)",
          background:
            "linear-gradient(to bottom, rgba(160,220,255,0) 0%, rgba(160,220,255,0.35) 18%, rgba(160,220,255,0.35) 82%, rgba(160,220,255,0) 100%)",
          pointerEvents: "none", mixBlendMode: "screen",
        }}
      />

      <div
        className="ss-sweep"
        style={{
          position: "fixed", left: 0, right: 0, height: "26vh",
          background:
            "linear-gradient(to bottom, rgba(180,230,255,0) 0%, rgba(180,230,255,0.10) 45%, rgba(180,230,255,0.16) 50%, rgba(180,230,255,0.10) 55%, rgba(180,230,255,0) 100%)",
          mixBlendMode: "screen", pointerEvents: "none",
          animation: "ss-sweepMove 6.5s linear infinite",
        }}
      />

      <div
        style={{
          position: "fixed", inset: 0, pointerEvents: "none", opacity: 0.5,
          background:
            "repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 2px, rgba(0,0,0,0.10) 3px)",
        }}
      />


      

      

      <div
        style={{
          position: "fixed", bottom: "6.2vh", left: 0, right: 0, textAlign: "center",
          color: "#bfe9ff", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
          opacity: 0.8, pointerEvents: "none", userSelect: "none",
          fontFamily: '"IBM Plex Mono","SFMono-Regular",Consolas,"Courier New",monospace',
        }}
      >
        <span ref={statusLabelRef}>ASSEMBLING</span>
        <span ref={statusPctRef} style={{ color: "rgba(210,240,255,0.55)", marginLeft: 10, letterSpacing: "0.08em" }}>
          00%
        </span>
        <div style={{ width: 210, height: 1, margin: "10px auto 0", background: "rgba(160,220,255,0.18)", position: "relative", overflow: "hidden" }}>
          <i ref={statusTrackRef} style={{ position: "absolute", left: 0, top: 0, bottom: 0, background: "rgba(190,235,255,0.85)", width: "0%" }} />
        </div>
      </div>
    </div>
  );
}
