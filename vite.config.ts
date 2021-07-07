import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import {flowPlugin, esbuildFlowPlugin} from '@bunchtogether/vite-plugin-flow'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        esbuildOptions: {
            plugins: [esbuildFlowPlugin()]
        }
    },
    plugins: [reactRefresh(), flowPlugin(), legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })],
    base: '/keichan/'
})