export function configRouter (router) {
  router.map({
    '/hello': {
      component (resolve) {
        require(['./components/hello.vue'], resolve)
      }
    },

    '/home': {
      component (resolve) {
        require(['./components/home.vue'], resolve)
      }
    },

    '/news': {
      component (resolve) {
        require(['./components/news.vue'], resolve)
      }
    },

    '/about': {
      component (resolve) {
        require(['./components/about.vue'], resolve)
      }
    },

    '/login': {
      component (resolve) {
        require(['./components/login.vue'], resolve)
      }
    },

    // not found handler
    '*': {
      component: require('./components/not-found.vue')
    }

  })

  router.redirect({
    '/': '/hello',
    '/index.html': '/hello'
  })

  /* router.beforeEach((transition) => {
    if (transition.to.path === '/login' || router.app.authenticating) {
      transition.next()
    } else {
      console.log('back to login')
      transition.abort()
      router.go('/login')
    }
  })*/

  /* router.afterEach((transition) => {
  })*/
}
