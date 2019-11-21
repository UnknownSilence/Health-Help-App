import Vue from 'vue';
import VueRouter from 'vue-router'

// components
import Home from "@/components/Home"
import FindCare from "@/components/FindCare"


Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/find',
        name: 'Find',
        component: FindCare
    }

    ]
})