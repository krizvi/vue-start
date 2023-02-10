import {createRouter, createWebHistory} from 'vue-router'
import MyHome from '../views/MyHome.vue'
import VuexCounter from "@/components/vuex/VuexCounter";
import VuexEmployees from "@/components/vuex/VuexEmployees";
import VuexUserList from "@/components/vuex/VuexUserList";

const routes = [{
    path: '/', name: 'MyHome', component: MyHome
}, {
    path: '/counter', name: 'MyCounter', component: VuexCounter
}, {
    path: '/employees', name: 'MyEmployees', component: VuexEmployees
}, {
    path: '/users', name: 'MyUserList', component: VuexUserList
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router
