import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        'process.env': {}
    },
    plugins: [react()],
    base: '/keichan/',
    build: {
        rollupOptions: {
          input: {
            // need a better way to template
            main: resolve(__dirname, 'index.html'),
            test: resolve(__dirname, 'test.html'),
          },
          // ファイル名にハッシュを付けない
          output: {
            // entryFileNames: `assets/[name].js`,
            // chunkFileNames: `assets/[name].js`,
            // assetFileNames: `assets/[name].[ext]`
          }
        },
    },
})