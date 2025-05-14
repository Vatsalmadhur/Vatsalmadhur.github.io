import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/',

  plugins: [react(), sentryVitePlugin({
    org: "devvatsal",
    project: "myportfolio"
  }), sentryVitePlugin({
    org: "devvatsal",
    project: "myportfolio"
  })],

  server: {
    historyApiFallback: true, // mostly for local dev
  },

  build: {
    sourcemap: true
  }
})