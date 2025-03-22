import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const host = env.VITE_ALLOWED_HOST || "localhost";

    return {
        plugins: [react()],
        preview: {
            port: 4173,
            strictPort: true,
            host: 'localhost',
            allowedHosts: [host, `www.${host}`]
        },
        server: {
            port: 5173,
            strictPort: true,
            host: 'localhost',
        }
    }
});
