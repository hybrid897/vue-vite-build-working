import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import { viteAwesomeSvgLoader } from "vite-awesome-svg-loader";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue(), VueDevTools(), viteAwesomeSvgLoader()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  build: {
    manifest: 'assets.manifest.json',
    emptyOutDir: true,
    minify: mode === 'production',
    outDir: '../../vue-vite-build-working/WebApplication1/wwwroot/',
    rollupOptions: {
      input: '../ui/src/main.ts',
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  define: {
    // Enable / disable devtools support in production builds.
    __VUE_PROD_DEVTOOLS__: mode !== 'production'
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
}))
