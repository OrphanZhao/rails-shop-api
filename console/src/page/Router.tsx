import { useLazy } from '@/page/utils/index'

export default [
  {
    path: '/login',
    component: useLazy(() => import('@/page/Login'))
  },
  {
    path: '/',
    component: useLazy(() => import('@/page/Home'))
  },
  {
    path: '/404',
    component: useLazy(() => import('@/page/404'))
  },
  {
    path: '*',
    component: useLazy(() => import('@/page/404'))
  }
]
