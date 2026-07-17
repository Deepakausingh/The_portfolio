import axios from "axios";

const USERNAME = "deepaksingh804142";

// Working public API
const API = `https://leetcode-api-faisalshohag.vercel.app/${USERNAME}`;

export async function fetchLeetcodeData() {
    try {
        const { data } = await axios.get(API);

        return data;
    } catch (error) {
        console.error("LeetCode API Error:", error);
        throw error;
    }
}