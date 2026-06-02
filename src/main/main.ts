import { app, BrowserWindow } from 'electron'
import { electronApp } from '@electron-toolkit/utils'

import { createTray } from './app/create-tray'
import { ipcRegister } from './ipc'
import { createWindow } from './app/create-window'

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', () => {
    const [window] = BrowserWindow.getAllWindows()
    if (window) {
      if (window.isMinimized()) {
        window.restore()
      }
      if (!window.isVisible()) {
        window.show()
      }
      window.focus()
    }
  })

  app.whenReady().then(async () => {
    try {
      electronApp.setAppUserModelId('TABLE.APP')

      const window = createWindow()
      createTray()

      ipcRegister(window)
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error)
      console.log(errorMessage)
      throw new Error(`Ошибка при инициализации приложения: ${error}`)
    }
  })
}
