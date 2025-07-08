import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'aboutUs.html',
        programs: 'programs.html',
        contact: 'contactUs.html',
        getStarted: 'getStarted.html'
      }
    }
  },
  server: {
    open: '/index.html'
  }
})