"use strict";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      "@": resolve("src")
    }
  },
})