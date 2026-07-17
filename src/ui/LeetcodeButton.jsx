import { motion } from "framer-motion";
import { useState } from "react";
// import leetcodeLogo from "../assets/leetcode.png";
import LeetcodePopup from "./leetcode/LeetcodePopup";

export default function LeetcodeButton() {

    const [open,setOpen]=useState(false);

    return(
        <>

            <motion.button

                className="fixed bottom-10 left-10 z-40 h-10 w-10 border border-[#fb9700]/40 bg-[#2b241b] p-2"

                animate={{
                    y:[0,-8,0]
                }}

                transition={{
                    duration:3,
                    repeat:Infinity
                }}

                whileHover={{
                    scale:1.1
                }}

                whileTap={{
                    scale:0.95
                }}

                onClick={()=>setOpen(true)}

            >

                <img
                    src="https://i.pinimg.com/1200x/d6/26/b9/d626b960ce408d98b967970582460092.jpg"
                    className="h-full w-full object-contain"
                />

            </motion.button>

            <LeetcodePopup
                open={open}
                onClose={()=>setOpen(false)}
            />

        </>
    )

}