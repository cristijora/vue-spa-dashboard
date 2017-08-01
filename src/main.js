import Vue from 'vue'
import VueRouter from 'vue-router'
// Plugins
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import Notifications from './components/UIComponents/NotificationPlugin'
import SideBar from './components/UIComponents/SidebarPlugin'
import App from './App'

// router setup
import routes from './routes/routes'

// library imports
import 'bootstrap/dist/css/bootstrap.css'
import './assets/sass/material-dashboard.scss'
import 'es6-promise/auto'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'vuetify/dist/vuetify.min.css'

// plugin setup
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)
Vue.use(SideBar)

// configure router
const router = new VueRouter({
  routes
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
