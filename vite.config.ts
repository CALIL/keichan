import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
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
    plugins: [reactRefresh(), flowPlugin(), legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })],
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