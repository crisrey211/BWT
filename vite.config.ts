import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      // Puedes agregar más alias si es necesario
      // Por ejemplo:
      // '~components': '/src/components',
      // '~utils': '/src/utils'
    },
  },
});
