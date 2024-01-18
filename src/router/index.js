import Vue from 'vue'
import Router from 'vue-router'

import HomePage from 'components/pages/home-page'
import AboutUs from 'components/pages/about-us'
import Services from 'components/pages/services'
import Cases from 'components/pages/cases'
import Contacts from 'components/pages/contacts'
import Policies from 'components/pages/policies'

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'Home',
        meta: {
            reload: true,
        }
    },
    {
        path: '/about-us',
        component: AboutUs,
        name: 'AboutUs',
        meta: {
            reload: true,
        }
    },
    {
        path: '/services',
        component: Services,
        name: 'Services',
        meta: {
            reload: true,
        }
    },
    {
        path: '/cases',
        component: Cases,
        name: 'Cases',
        meta: {
            reload: true,
        },
        props: true
    },
    {
        path: '/contacts',
        component: Contacts,
        name: 'Contacts',
        meta: {
            reload: true,
        }
    },
    {
        path: '/policies',
        component: Policies,
        name: 'Policies',
        meta: {
            reload: true
        }
    }
]

const router = new Router({
    mode: 'history',
    routes,
    linkExactActiveClass: 'active-link',
    scrollBehavior() {
        // TODO: скролл наверх при обновлении страницы
        return { top: 0 }
    },
    props: true
})


export default router