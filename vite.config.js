import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    port: process.env.PORT || 3000,
    allowedHosts: ['dharmagyan.onrender.com'],  // Add your allowed host here
  },
})
