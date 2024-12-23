import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    base: '/', // Match the `homepage` in `package.json`
    plugins: [react()],
});
