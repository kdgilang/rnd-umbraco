import { defineConfig } from 'vite';
import { resolve } from 'path';
// import htmlPurge from 'vite-plugin-purgecss'
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  base: '',
  build: {
    outDir: '../wwwroot/dist',
    emptyOutDir: true,
    manifest: true,
    assetsDir: '',
    rollupOptions: {
      input: {
        priority: 'priority.js',
        main: 'main.js',
        home: 'index.html',
        app: 'app.css',
      }
    },
    cssMinify: 'lightningcss',
    sourcemap: true,
  },
  css: {
    preprocessorOptions: {
      scss: {}
    },
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    // htmlPurge([htmlPurge()]),
  ]
});
