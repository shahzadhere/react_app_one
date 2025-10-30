import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: 'https://shahzadhere.github.io/react_app_one/',
})

// https://<USERNAME or GROUP>.gitlab.io/<REPO>/
export const baseUrl = 'https://shahzadhere.github.io/react_app_one/'