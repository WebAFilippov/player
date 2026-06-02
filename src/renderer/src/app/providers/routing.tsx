import { ComponentType, Suspense } from 'react'
import { createHashRouter } from 'react-router'
import { BaseLayout } from '../layouts/base-layout'
import { FallbackPageLoader } from '@/shared/ui'
import { PlayerPage } from '@/pages/Player'

const withSuspense = (Component: ComponentType) => (
  <Suspense fallback={<FallbackPageLoader />}>
    <Component />
  </Suspense>
)

const routes = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: withSuspense(PlayerPage)
      }
    ]
  }
]

export const router = createHashRouter(routes, {
  basename: window.location.hash.slice(1).split('?')[0]
})
