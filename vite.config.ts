import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import {flowPlugin, esbuildFlowPlugin} from '@bunchtogether/vite-plugin-flow'
import legacy from '@vitejs/plugin-legacy'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        esbuildOptions: {
            plugins: [esbuildFlowPlugin()]
        }
    },
    plugins: [reactRefresh(), flowPlugin()],
    base: '/keichan/',
    mode: "development",
    build: {
        minify: false,
        rollupOptions: {
          input: {
            // need a better way to template
            main: resolve(__dirname, 'index.html'),
            page: resolve(__dirname, 'chat.html'),
          },
        //   // ファイル名にハッシュを付けない
        //   output: {
        //     entryFileNames: `assets/[name].js`,
        //     chunkFileNames: `assets/[name].js`,
        //     assetFileNames: `assets/[name].[ext]`
        //   }
        },
    },
})