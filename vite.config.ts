import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 3000,
    cors: {
      origin: ['self', 'https://randomuser.me/', 'https://icanhazdadjoke.com/'],
      methods: ['GET', 'POST', 'PUT'],
      preflightContinue: true
    }
  }
})
