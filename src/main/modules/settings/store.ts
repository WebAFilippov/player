import Store from 'electron-store'

import { SettingsProps } from '@/shared_app/types'

export const settingsStore = new Store<SettingsProps>({
  name: 'settings',
  defaults: {
    autoLaunch: true,
    startMinimized: false,
  }
})
