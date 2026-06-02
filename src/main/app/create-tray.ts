import { app, BrowserWindow, Menu, Tray } from 'electron/main'
import { nativeImage } from 'electron'

import appIcon from '../../../build/icon.ico?asset'

let tray: Tray | null = null

const toggleWindowVisibility = (): void => {
  const [window] = BrowserWindow.getAllWindows()

  if (window.isVisible()) {
    window.hide()
  } else {
    if (window.isMinimized()) {
      window.restore()
    }
    window.show()
  }
}

const buildMenu = (): Menu => {
  const [window] = BrowserWindow.getAllWindows()

  return Menu.buildFromTemplate([
    {
      label: window.isVisible() ? 'Скрыть' : 'Показать',
      click: toggleWindowVisibility
    },
    {
      label: 'Выход',
      click: () => {
        app.quit()
      }
    }
  ])
}

export const createTray = (): Tray => {
  tray = new Tray(nativeImage.createFromPath(appIcon))

  tray.setToolTip('ToolTip')
  tray.setTitle('Table')
  tray.setContextMenu(buildMenu())

  const [window] = BrowserWindow.getAllWindows()

  window.on('show', updateTrayMenu)
  window.on('hide', updateTrayMenu)
  window.on('minimize', updateTrayMenu)
  window.on('restore', updateTrayMenu)

  tray.on('click', toggleWindowVisibility)
  tray.on('double-click', toggleWindowVisibility)
  tray.on('right-click', () => tray?.popUpContextMenu(buildMenu()))

  return tray
}

export const updateTrayMenu = (): void => {
  if (!tray) return
  tray.setContextMenu(buildMenu())
}
