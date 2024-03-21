import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  appType: 'mpa',
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  build: {
    manifest: 'assets.manifest.json',
    emptyOutDir: true,
    outDir: '../../test-site/WebApplication1/wwwroot/',
    rollupOptions: {
      input: '../ui/src/main.ts',
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
  // appType: 'mpa',
  // root: 'assets',
  // publicDir: 'public',
  // build: {
  //   manifest: 'assets.manifest.json',
  //   emptyOutDir: true,
  //   outDir: '../wwwroot',
  //   assetsDir: '',
  //   rollupOptions: {
  //     input: '../ui/src/main.ts',
  //     output: {
  //       entryFileNames: `assets/[name].js`,
  //       chunkFileNames: `assets/[name].js`,
  //       assetFileNames: `assets/[name].[ext]`
  //     }
  //   }
  // }
})
