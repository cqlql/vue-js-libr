import { h } from 'vue'
import DemosNav from '@/views/DemosNav.vue'
import { RouteRecordRaw } from 'vue-router'

const demos = [
  {
    path: '/Skeleton',
    component: import('@/components/Skeleton/SkeletonDemo.vue'),
  },
  {
    path: '/CountDown',
    component: import('@/components/CountDown/CountDown.vue'),
  },
]

const routes: RouteRecordRaw[] = demos

routes.push({
  path: '/:pathMatch(.*)',
  component: {
    render() {
      return h(DemosNav, {
        list: demos,
      })
    },
  },
})

export default routes

console.log(demos)
