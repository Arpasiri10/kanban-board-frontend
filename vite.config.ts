import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const base = mode === 'production' 
    ? '/kanban-board-frontend/'  // GitHub Pages
    : './'                        // local dev server

  return {
    plugins: [react()],
    base,
    build: {
      outDir: 'docs',
    },
  }
})