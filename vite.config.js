import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { terser } from 'rollup-plugin-terser';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js',
      name: 'SimpleWavesVue',
      fileName: (format) => `simple-waves-vue.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'simple-waves'],
      output: {
        globals: {
          vue: 'Vue',
          'simple-waves': 'simpleWaves'
        }
      },
      plugins: [
        terser({
          compress: {
            drop_console: true
          }
        })
      ]
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
