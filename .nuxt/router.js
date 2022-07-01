import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2440b519 = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages_categories_index" */))
const _347ae540 = () => interopDefault(import('..\\pages\\comment\\index.vue' /* webpackChunkName: "pages_comment_index" */))
const _3a5b0868 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _1dae8e30 = () => interopDefault(import('..\\pages\\orders\\index.vue' /* webpackChunkName: "pages_orders_index" */))
const _501e78de = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages_products_index" */))
const _4a857990 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _cad0a024 = () => interopDefault(import('..\\pages\\slide\\index.vue' /* webpackChunkName: "pages_slide_index" */))
const _39d1327f = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages_test" */))
const _006cc6c3 = () => interopDefault(import('..\\pages\\test2.vue' /* webpackChunkName: "pages_test2" */))
const _6848f04a = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages_user_index" */))
const _e8eb8e76 = () => interopDefault(import('..\\pages\\categories\\create.vue' /* webpackChunkName: "pages_categories_create" */))
const _4ddbf94d = () => interopDefault(import('..\\pages\\products\\create.vue' /* webpackChunkName: "pages_products_create" */))
const _47a52676 = () => interopDefault(import('..\\pages\\shop\\blog.vue' /* webpackChunkName: "pages_shop_blog" */))
const _03ffc943 = () => interopDefault(import('..\\pages\\shop\\cart.vue' /* webpackChunkName: "pages_shop_cart" */))
const _6da69179 = () => interopDefault(import('..\\pages\\shop\\checkout\\index.vue' /* webpackChunkName: "pages_shop_checkout_index" */))
const _51462966 = () => interopDefault(import('..\\pages\\shop\\contact.vue' /* webpackChunkName: "pages_shop_contact" */))
const _0839a007 = () => interopDefault(import('..\\pages\\shop\\products.vue' /* webpackChunkName: "pages_shop_products" */))
const _3fdacee0 = () => interopDefault(import('..\\pages\\slide\\create.vue' /* webpackChunkName: "pages_slide_create" */))
const _7251d3d2 = () => interopDefault(import('..\\pages\\user\\home.vue' /* webpackChunkName: "pages_user_home" */))
const _31f09361 = () => interopDefault(import('..\\pages\\user\\login.vue' /* webpackChunkName: "pages_user_login" */))
const _6b786201 = () => interopDefault(import('..\\pages\\user\\login\\index.vue' /* webpackChunkName: "pages_user_login_index" */))
const _0930cd9c = () => interopDefault(import('..\\pages\\shop\\user\\cart\\_id.vue' /* webpackChunkName: "pages_shop_user_cart__id" */))
const _7c93ee51 = () => interopDefault(import('..\\pages\\shop\\user\\changepassword\\_id.vue' /* webpackChunkName: "pages_shop_user_changepassword__id" */))
const _4f3435ea = () => interopDefault(import('..\\pages\\shop\\user\\detail\\_id.vue' /* webpackChunkName: "pages_shop_user_detail__id" */))
const _7d7cfc1c = () => interopDefault(import('..\\pages\\shop\\user\\edit\\_id.vue' /* webpackChunkName: "pages_shop_user_edit__id" */))
const _8f1de37e = () => interopDefault(import('..\\pages\\categories\\details\\_id.vue' /* webpackChunkName: "pages_categories_details__id" */))
const _683fc792 = () => interopDefault(import('..\\pages\\categories\\edit\\_id.vue' /* webpackChunkName: "pages_categories_edit__id" */))
const _125d6de7 = () => interopDefault(import('..\\pages\\orders\\detail\\_id.vue' /* webpackChunkName: "pages_orders_detail__id" */))
const _39fd91ce = () => interopDefault(import('..\\pages\\orders\\edit\\_id.vue' /* webpackChunkName: "pages_orders_edit__id" */))
const _fe7b6e6e = () => interopDefault(import('..\\pages\\products\\details\\_id.vue' /* webpackChunkName: "pages_products_details__id" */))
const _1917a2a2 = () => interopDefault(import('..\\pages\\products\\edit\\_id.vue' /* webpackChunkName: "pages_products_edit__id" */))
const _67bec066 = () => interopDefault(import('..\\pages\\shop\\product_detail\\_id.vue' /* webpackChunkName: "pages_shop_product_detail__id" */))
const _d4090764 = () => interopDefault(import('..\\pages\\shop\\product\\_id.vue' /* webpackChunkName: "pages_shop_product__id" */))
const _6d09c925 = () => interopDefault(import('..\\pages\\slide\\detail\\_id.vue' /* webpackChunkName: "pages_slide_detail__id" */))
const _1438b6e8 = () => interopDefault(import('..\\pages\\slide\\edit\\_id.vue' /* webpackChunkName: "pages_slide_edit__id" */))
const _03885481 = () => interopDefault(import('..\\pages\\user\\detail\\_id.vue' /* webpackChunkName: "pages_user_detail__id" */))
const _0e0556e8 = () => interopDefault(import('..\\pages\\user\\edit\\_id.vue' /* webpackChunkName: "pages_user_edit__id" */))
const _192ad8b5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/categories",
    component: _2440b519,
    name: "categories"
  }, {
    path: "/comment",
    component: _347ae540,
    name: "comment"
  }, {
    path: "/login",
    component: _3a5b0868,
    name: "login"
  }, {
    path: "/orders",
    component: _1dae8e30,
    name: "orders"
  }, {
    path: "/products",
    component: _501e78de,
    name: "products"
  }, {
    path: "/register",
    component: _4a857990,
    name: "register"
  }, {
    path: "/slide",
    component: _cad0a024,
    name: "slide"
  }, {
    path: "/test",
    component: _39d1327f,
    name: "test"
  }, {
    path: "/test2",
    component: _006cc6c3,
    name: "test2"
  }, {
    path: "/user",
    component: _6848f04a,
    name: "user"
  }, {
    path: "/categories/create",
    component: _e8eb8e76,
    name: "categories-create"
  }, {
    path: "/products/create",
    component: _4ddbf94d,
    name: "products-create"
  }, {
    path: "/shop/blog",
    component: _47a52676,
    name: "shop-blog"
  }, {
    path: "/shop/cart",
    component: _03ffc943,
    name: "shop-cart"
  }, {
    path: "/shop/checkout",
    component: _6da69179,
    name: "shop-checkout"
  }, {
    path: "/shop/contact",
    component: _51462966,
    name: "shop-contact"
  }, {
    path: "/shop/products",
    component: _0839a007,
    name: "shop-products"
  }, {
    path: "/slide/create",
    component: _3fdacee0,
    name: "slide-create"
  }, {
    path: "/user/home",
    component: _7251d3d2,
    name: "user-home"
  }, {
    path: "/user/login",
    component: _31f09361,
    children: [{
      path: "",
      component: _6b786201,
      name: "user-login"
    }]
  }, {
    path: "/shop/user/cart/:id?",
    component: _0930cd9c,
    name: "shop-user-cart-id"
  }, {
    path: "/shop/user/changepassword/:id?",
    component: _7c93ee51,
    name: "shop-user-changepassword-id"
  }, {
    path: "/shop/user/detail/:id?",
    component: _4f3435ea,
    name: "shop-user-detail-id"
  }, {
    path: "/shop/user/edit/:id?",
    component: _7d7cfc1c,
    name: "shop-user-edit-id"
  }, {
    path: "/categories/details/:id?",
    component: _8f1de37e,
    name: "categories-details-id"
  }, {
    path: "/categories/edit/:id?",
    component: _683fc792,
    name: "categories-edit-id"
  }, {
    path: "/orders/detail/:id?",
    component: _125d6de7,
    name: "orders-detail-id"
  }, {
    path: "/orders/edit/:id?",
    component: _39fd91ce,
    name: "orders-edit-id"
  }, {
    path: "/products/details/:id?",
    component: _fe7b6e6e,
    name: "products-details-id"
  }, {
    path: "/products/edit/:id?",
    component: _1917a2a2,
    name: "products-edit-id"
  }, {
    path: "/shop/product_detail/:id?",
    component: _67bec066,
    name: "shop-product_detail-id"
  }, {
    path: "/shop/product/:id?",
    component: _d4090764,
    name: "shop-product-id"
  }, {
    path: "/slide/detail/:id?",
    component: _6d09c925,
    name: "slide-detail-id"
  }, {
    path: "/slide/edit/:id?",
    component: _1438b6e8,
    name: "slide-edit-id"
  }, {
    path: "/user/detail/:id?",
    component: _03885481,
    name: "user-detail-id"
  }, {
    path: "/user/edit/:id?",
    component: _0e0556e8,
    name: "user-edit-id"
  }, {
    path: "/",
    component: _192ad8b5,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
