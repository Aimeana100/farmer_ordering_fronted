/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
  },
  plugins: [react()],
  build: {
    target: 'es2017',
  },
  resolve: {
    alias: {},
  },
});
