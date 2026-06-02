import './styles/globals.css'
import '@gravity-ui/uikit/styles/fonts.css'
import '@gravity-ui/uikit/styles/styles.css'

import ReactDOM from 'react-dom/client'
import { createEvent, sample } from 'effector'
import { RouterProvider } from 'react-router/dom'

import { router } from './providers/routing'

import { initWindowControlsFx } from '@/widgets/window-control-panel'


const container = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(container)

const appStarted = createEvent<void>()

sample({
  clock: appStarted,
  target: [ initWindowControlsFx]
})

appStarted()

root.render(<RouterProvider router={router} />)
