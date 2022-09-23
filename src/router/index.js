import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/HomeView.vue'
import Login from '../views/LoginView.vue'
import PsAndTs from '../views/PsAndTs.vue'
import manageCompany from '../views/Home/manageCompany.vue'
import policies from '../views/PoliciesView.vue'



// Where PsAndTs = Policies and Transactions
const routes = [
    {path: '/HomeView', name: 'HomeView', component: Home},

    {path: '/PsAndTs', name: 'PsAndTs', component: PsAndTs},

    {path: '/LoginView', name: 'LoginView', component: Login},

    {path: '/manageCompany/:id', name: 'manageCompany', component: manageCompany},
    // Redirect
    {path: '/all-cruds',   redirect: '/Home'},
    {path: '/PoliciesView', name: 'policies', component: policies}


]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router
