import { WindowControlPanel } from '@/widgets/window-control-panel'

import type { ReactNode } from 'react'
import { Outlet } from 'react-router'

export const BaseLayout = (): ReactNode => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <WindowControlPanel />
      <div className="relative flex flex-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}
