import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/static/', // Matches Django's STATIC_URL
    build: {
        manifest: true, // Crucial: django-vite needs this!
        outDir: 'dist',
        rollupOptions: {
            input: 'src/main.jsx', // Entry point
        },
    },
    server: {
        origin: 'http://localhost:5173', // Essential for HMR
    },
})