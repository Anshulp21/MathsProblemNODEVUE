import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://api.wolframalpha.com', // Replace this with the base URL of the Wolfram|Alpha API
//         changeOrigin: true,
//         rewrite: path => path.replace(/^\/api/, '/v2/query'),
//       },
//     },
//   },
// });

