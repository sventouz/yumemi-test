/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    open: true,
  },

  build: {
    outDir: './dist',
    emptyOutDir: true,
  },

  test: {
    globals: true,
    environment: 'jsdom',
  },

  plugins: [react()],
})
