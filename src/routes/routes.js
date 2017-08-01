import DashboardLayout from './../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from './../components/GeneralViews/NotFoundPage.vue'
// Admin pages
import Dashboard from './../components/Dashboard/Views/Dashboard.vue'
import Login from './../components/Login.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: DashboardLayout,
    redirect: '/admin/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      }
    ]
  },
  {path: '*', component: NotFound}
]

export default routes
