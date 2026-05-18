import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: '/static/',
    build: {
        manifest: 'manifest.json',
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'src/main.jsx',
            },
        },
    },
    server: {
        origin: 'http://localhost:5173',
    },
})