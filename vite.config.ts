import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.ts', '.tsx', '.scss'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
  // resolve: ['.ts', 'tsx']
})
