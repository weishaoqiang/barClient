
const Home = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['./pages/home.vue'], () => {
    resolve(require('./pages/home.vue'))
  })
}

const News = resolve => {
  require.ensure(['./pages/news.vue'],() => {
    resolve(require('./pages/news.vue'))
  })
}

const ES = resolve => {
  require.ensure(['./pages/es6.vue'],() => {
    resolve(require('./pages/es6.vue'))
  })
}

export default {
  routes:[{
     path: '/home',
     component: Home
   },{
     path: '/news',
     component: News
   },{
     path: '/es',
     component: ES
   },{
     /**
      * 路由重定向
      * @type {String}
      */
     path: '/',
     redirect: '/home'
   }]
}
