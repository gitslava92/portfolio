/* eslint-disable */
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import eslint from 'vite-plugin-eslint';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { ghPages } from 'vite-plugin-gh-pages';


const plugins = [
  react(),
  ghPages(),
  viteTsconfigPaths(),
  svgrPlugin(),
  eslint({
    exclude: ['/virtual:/**', 'node_modules/**'],
  }),
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: plugins,
  base: "/portfolio/",
  test: {
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',

    testMatch: ['./tests/**/*.test.tsx'],
    globals: true,
  },
});
