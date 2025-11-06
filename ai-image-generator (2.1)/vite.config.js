import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    root: process.cwd(),         // Ensures Vite serves from this folder
    base: './',                  // Makes all paths relative for Codespaces preview
    appType: 'spa',              // Enables SPA fallback routing
    server: {
      host: '0.0.0.0',
      port: 5182,
      strictPort: true           // Forces Vite to use this exact port
    },
    preview: {
      port: 5182                 // Ensures `vite preview` uses the same port
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
