import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {fileURLToPath} from 'node:url'

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
            main: fileURLToPath(new URL('index.html', import.meta.url)),
            test: fileURLToPath(new URL('test.html', import.meta.url)),
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
