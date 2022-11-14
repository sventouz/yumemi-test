import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',

  root: './src',

  publicDir: '../public',

  server: {
    open: true,
  },

  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },

  plugins: [react()],
})
