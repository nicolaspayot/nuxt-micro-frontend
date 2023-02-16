import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      exposes: {
        './Navbar': './src/components/Navbar.vue',
      },
      shared: ['vue']
    })
  ],
  build: {
    target: 'esnext' 
  } 
})
