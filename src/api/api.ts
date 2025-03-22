import axios from "axios";

const protocol= import.meta.env.VITE_API_PROTOCOL || "http";
const host = import.meta.env.VITE_API_HOST || "127.0.0.1";
const port = import.meta.env.VITE_API_PORT || "8000";

export const instance = axios.create({
    baseURL: `${protocol}://${host}:${port}/api`
});
