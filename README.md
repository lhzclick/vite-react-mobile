### 搭建步骤 
 
 
#### vite构建
    ```
      npm create vite@latest
      npm create vite@latest my-vue-app -- --template react-ts
    ```

#### "react-router-dom": "^6.10.0"  
  - 从版本6开始，react routes不再获取组件，而是获取元素，所以你需要像这样传递<Component/>，而不是传递组件：
  - createHashRouter hash路由
  - 用法：src/route
 
#### 配置别名  
  - 解决__dirname TS报错: ``` npm install @types/node --save-dev  ```
  - tsconfig 配置
    ```
        "baseUrl": "./",
        "paths": {
        "@/*": ["src/*"],
        }
    ```
   - vite.config.ts配置
   ```
    resolve: {
        alias: {
        '@': path.resolve(__dirname, 'src') // src 路径
        }
    },
   ```
#### 配置base 
 - 开发或生产环境服务的公共基础路径  用于ng部署  base:'./'

#### react路由懒加载  
  - src/router/user
    ```
      import { lazy } from "react";
      const Login = lazy(()=>import('@/pages/user/login'))
    ```
  - app.tsx
    ```
      import { Suspense } from "react";
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    ```
#### 移动端适配
  - main.tsx
    ```
      import 'amfe-flexible'
    ```
  - vite.config.ts配置
    ```
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
    ```
#### scss安装 
  - npm install sass --save-dev

#### css Module
  - 文件命名 index.module.scss 
  - 页面tsx中引用
    ```
      import styles from './index.module.scss'
      <div className={styles.home}>
    ```
  - 全局样式 // :global(.类名) {}

#### 移动端禁止缩放
    ```
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ```

#### 设置热更新和默认打开浏览器路径
  - vite.config.ts
    ```
      server:{
        open:'/#/',
        hmr: true
      }
    ```
#### 状态管理 react-redux && toolkit 
  - 定义：src/store
  - 使用
    ```
      import {
        decrement,
        increment,
        incrementDelay,
      } from "@/store/slices/counterSlice";
      import { useAppDispatch, useAppSelector } from "@/store/hooks";

        const count = useAppSelector((state) => state.counter.value);
        const dispatch = useAppDispatch()
        dispatch(increment())
        dispatch(incrementDelay(2))
    ```

    


