import Vue from 'vue'
import Router from 'vue-router'

import HomePage from 'components/pages/home-page'
import AboutUs from 'components/pages/about-us'
import Services from 'components/pages/services'
import Cases from 'components/pages/cases'
import Contacts from 'components/pages/contacts'
import Policies from 'components/pages/policies'
import PageNotFound from 'components/pages/page-not-found'

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
        },
        props: true
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
    },
    { path: "*", component: PageNotFound }
]

const router = new Router({
    mode: 'history',
    routes,
    linkExactActiveClass: 'active-link',
    props: true,
    // scrollBehavior (to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition
    //     }
    //
    // }
})

router.afterEach(() => {
    document.querySelector('.ps')?.scrollTo(0,0)
})


export default router