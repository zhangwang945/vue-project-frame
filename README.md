# vue project
基于vue-cli的改造框架
> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at ip:8080(命令窗口会输出访问地址)
npm run dev  
> 默认local环境，不会开启代理，请求本地静态json文件，需开启本地mockserver  
> 命令行参数  -@[ prod | test1 | uat | dfdf ] 会自动开启代理访问对应环境的接口

#本地mock 
npm run mock

# build for production with minification
npm run build
> 默认prod域名  
> 命令行参数  -@[ local | prod | test1 | uat | dfdf ] 切到对应域名(非release环境代码不压缩并生成sourcemap，方便调试)

# build for production and view the bundle analyzer report
npm run build --report

# 环境域名配置
/config/domain.config.js

# api接口配置
>src/api/cross-domain-config.js  跨域请求时需要在此进行配置(需要与接口地址的属性保持一致)  
>src/api/your-api-config.js      配置接口地址

# 多页面配置(解决history刷新问题)
>src/api/page-router-config.js      多页面构建html文件路径配置

# 项目结构(项目采用history模式)
>src/view-----------------------------页面  
>src/mock---------------------------本地mock数据，json文件路径与接口保持一致  
>src/components------------------vue组件  
>src/util------------------------------组件  
>src/router--------------------------路由  
>src/store---------------------------状态管理  
>src/scss----------------------------sass  
>src/assets--------------------------静态资源  
>src/page-router-config.js-------页面级路由，解决history刷新问题






For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
