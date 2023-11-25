import { createRouter, createWebHashHistory } from 'vue-router'
import HomeBusPark from '../pages/HomeBusPark'
import DriversPage from '../pages/DriversPage'
import BussesPage from '../pages/BussesPage'
import AppointmentPage from '../pages/AppointmentPage'
import AboutBusPark from '../pages/AboutBusPark'
import EditPageItem from '../pages/EditPageItem'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeBusPark,
    },
    {
        path: '/drivers',
        name: 'drivers',
        component: DriversPage,
    },
    {
        path: '/busses',
        name: 'busses',
        component: BussesPage,
    },
    {
        path: '/appointment',
        name: 'appointment',
        component: AppointmentPage,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutBusPark,
    },
    {
        path: '/edit/:category?/:idItem?',
        name: 'editItem',
        component: EditPageItem,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
