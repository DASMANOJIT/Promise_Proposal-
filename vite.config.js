import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Promise_Proposal-/', // 👈 must match EXACT repo name (case-sensitive!)
  plugins: [react()],
})
