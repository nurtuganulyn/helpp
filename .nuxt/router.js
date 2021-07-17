import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _02edac73 = () => interopDefault(import('..\\pages\\addHelp.vue' /* webpackChunkName: "pages/addHelp" */))
const _5adf8b4f = () => interopDefault(import('..\\pages\\addHelp2.vue' /* webpackChunkName: "pages/addHelp2" */))
const _fdc85ab2 = () => interopDefault(import('..\\pages\\final.vue' /* webpackChunkName: "pages/final" */))
const _57504ec0 = () => interopDefault(import('..\\pages\\help.vue' /* webpackChunkName: "pages/help" */))
const _928a367c = () => interopDefault(import('..\\pages\\help2.vue' /* webpackChunkName: "pages/help2" */))
const _2295ac06 = () => interopDefault(import('..\\pages\\helpFInal.vue' /* webpackChunkName: "pages/helpFInal" */))
const _6d843f03 = () => interopDefault(import('..\\pages\\helpNoReg.vue' /* webpackChunkName: "pages/helpNoReg" */))
const _02ea1318 = () => interopDefault(import('..\\pages\\main.vue' /* webpackChunkName: "pages/main" */))
const _19bd3f18 = () => interopDefault(import('..\\pages\\registration.vue' /* webpackChunkName: "pages/registration" */))
const _3bcd2c03 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/addHelp",
    component: _02edac73,
    name: "addHelp"
  }, {
    path: "/addHelp2",
    component: _5adf8b4f,
    name: "addHelp2"
  }, {
    path: "/final",
    component: _fdc85ab2,
    name: "final"
  }, {
    path: "/help",
    component: _57504ec0,
    name: "help"
  }, {
    path: "/help2",
    component: _928a367c,
    name: "help2"
  }, {
    path: "/helpFInal",
    component: _2295ac06,
    name: "helpFInal"
  }, {
    path: "/helpNoReg",
    component: _6d843f03,
    name: "helpNoReg"
  }, {
    path: "/main",
    component: _02ea1318,
    name: "main"
  }, {
    path: "/registration",
    component: _19bd3f18,
    name: "registration"
  }, {
    path: "/",
    component: _3bcd2c03,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
