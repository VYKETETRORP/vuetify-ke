import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/layout/App.vue'),
    children: [
      {
        path: '/',
        redirect: {
          name: 'home'
        }
      },

      {
        path: '/dashboard',
        name: 'home',
        component: () => import('../views/Dashboard.vue')
      }, 
      
      {
        path: '/about',
        name: 'about',
        component:()=> import('../views/AboutView.vue')
        
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/user/Index.vue'),
      },
          
      {
        path: '/user/:id/show',
        name: 'userShow',
        component: () => import('../views/user/Show.vue'),
        props: true
      },
          
      {
        path: '/user/:id/edit',
        name: 'userEdit',
        component: () => import('../views/user/Edit.vue'),
        props: true
      },
          
      {
        path: '/user/create',
        name: 'userCreate',
        component: () => import('../views/user/Create.vue'),
      },

      {
        path: '/setting',
        name: 'setting',
        component: () => import('../views/Setting.vue'),
      }
    ]
  },

  {
    path: '/guest',
    component: () => import('../views/layout/Guest.vue'),
    children: [
      {
        path: '/guest',
        redirect: {
          name: 'login',
        }
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/auth/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../views/auth/Register.vue')
      },
      {
        path: '/reset',
        name: 'reset',
        component: () => import('../views/auth/Reset.vue')
      },
      {
        path: '/forget',
        name: 'forget',
        component: () => import('../views/auth/Forget.vue')
      },
      {
        path: '/crop',
        name: 'crop',
        component: () => import('../views/crop/Show.vue')
      },
    ]

    }  
      
]  

  
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})





router.beforeEach((to, from, next) => {
  const guestRoute = ['login', 'register', 'forget', 'reset'];
  let authenticated = window.localStorage.getItem("authenticated");
  if(authenticated == 1) {
    if (guestRoute.includes(to.name)) {
      next({
        name: 'home'
      })
    } else {
      next()
    } 
  } else if(authenticated == 0){
    if (guestRoute.includes(to.name)) {
      next()
    } else {
      next({name: 'login'})
    }
  } else {
    if (guestRoute.includes(to.name)) {
      next()
    } else {
      next({name: 'login'})
    }
  }
})
export default router 
  




