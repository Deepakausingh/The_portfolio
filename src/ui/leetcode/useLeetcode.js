import { useEffect, useState } from "react";
import { fetchLeetcodeData } from "./api";

export default function useLeetcode(open) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    async function loadData() {
        try {
            setLoading(true);
            setError(null);

            const result = await fetchLeetcodeData();

            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (open) {
            loadData();
        }
    }, [open]);

    return {
        loading,
        error,
        data,
        refresh: loadData,
    };
}