import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {flowPlugin, esbuildFlowPlugin} from '@bunchtogether/vite-plugin-flow'
import legacy from '@vitejs/plugin-legacy'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        'process.env': {}
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [esbuildFlowPlugin()]
        }
    },
    plugins: [react(), flowPlugin(), legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })],
    base: '/keichan/',
    build: {
        // vite 8 のデフォルトCSS minifier (lightningcss) は @blueprintjs/core@3 の
        // 不正なセレクタ (`::after.bp3-active` 等) を拒否してビルドが失敗するため、
        // 従来どおり esbuild を CSS minifier として使う。
        cssMinify: 'esbuild',
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