import axios from "axios";

const host = import.meta.env.VITE_API_HOST || "127.0.0.1";
const port = import.meta.env.VITE_API_PORT || "8000";

export const instance = axios.create({
    baseURL: `http://${host}:${port}/api`
});
