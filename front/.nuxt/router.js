import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8bbc6a88 = () => interopDefault(import('../pages/nuxt.config.js' /* webpackChunkName: "pages/nuxt.config" */))
const _ad5936e2 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _3931e122 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _9ccdba90 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/nuxt.config",
    component: _8bbc6a88,
    name: "nuxt.config"
  }, {
    path: "/profile",
    component: _ad5936e2,
    name: "profile"
  }, {
    path: "/signup",
    component: _3931e122,
    name: "signup"
  }, {
    path: "/",
    component: _9ccdba90,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
