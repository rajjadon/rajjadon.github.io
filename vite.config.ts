import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/rajjadon-portfolio/',  // Update this line
  plugins: [react()]
});