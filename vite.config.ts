import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'idbOpen',
      // fileName: 'index',
      formats: ['umd'],
    },
    sourcemap: true,
  }
})
