import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
 plugins: [
  react({
   // Use esbuild for JSX transformation
   babel: {
    babelrc: false,
    configFile: false,
   },
  }),
 ],
 server: {
  port: 8000,
  host: '0.0.0.0',
  proxy: {
   '/api': {
    target: 'http://localhost:4000/api/v1',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, ''),
   },
  },
 },
});
