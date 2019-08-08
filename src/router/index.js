import Vue from 'vue'
import Router from 'vue-router'
// 底部导航组件导入
import Home from '@/components/home/Home'
import Itemize from '@/components/itemize/Itemize'
import Select from '@/components/select/Select'
import Cart from '@/components/cart/Cart'
import My from '@/components/my/My'
// 我的页面二级路由
import Account from '@/components/my/components/Account'
import Short from '@/components/my/components/Short'

import Details from '@/components/itemize/components/item/components/details/Details'
import HomePages from '@/components/home/components/homePages/HomePages'
// 搜索盒子
import SearchBox from '@/common/SearchBox'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/itemize',
      name: 'Itemize',
      component: Itemize
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/my',
      name: 'My',
      component: My,
      children: [
        {
          path: 'account',
          name: 'Account',
          component: Account
        },
        {
          path: 'short',
          name: 'Short',
          component: Short
        },
        { path: '', redirect: 'account' }
      ]
    },
    {
      path: '/details/:no',
      name: 'Details',
      component: Details
    },
    {
      path: '/homepages',
      name: 'HomePages',
      component: HomePages
    },
    {
      path: '/searchBox',
      name: 'SearchBox',
      component: SearchBox
    }
  ]
})
