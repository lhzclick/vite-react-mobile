import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// import eslint from 'vite-plugin-eslint'
import postCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    open:'/#/',
    hmr: true
  },
  resolve: {
    //路径别名
    alias: {
      '@': path.resolve(__dirname, 'src') // src 路径
    },
  },
  base:'./',
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 75, // 1rem的大小 75表示设计图尺寸宽度为750px
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    },
  }
})
