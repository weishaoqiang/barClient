
const Home = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['./pages/home.vue'], () => {
    resolve(require('./pages/home.vue'))
  })
}

export default {
  routes:[{
     path: '/home',
     component: Home
   },{
     /**
      * 路由重定向
      * @type {String}
      */
     path: '/a',
     redirect: '/home'
   }]
}
