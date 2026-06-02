import { BrowserWindow } from 'electron/main'

import { ipcTheme } from '@/modules/theme'
import { ipcWindow } from '@/modules/window'
import { ipcSettings } from '@/modules/settings/controller'

export const ipcRegister = (window: BrowserWindow): void => {
  ipcWindow(window)
  ipcTheme(window)
  ipcSettings(window)
}
