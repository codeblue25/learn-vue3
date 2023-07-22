import { fileURLToPath, URL } from 'node:url';
import Components from 'unplugin-vue-components/vite';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: './src/comonents/app', // 특정 컴포넌트만 import하고 싶을 때
      dts: true, // 모든 컴포넌트를 전역 컴포넌트로 자동 import해주는 속성
    }),
  ],
  // mode: 'production', // 기본값은 'development'이다.
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
