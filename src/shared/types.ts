export const channels = {
  settings_get_by_property: 'settings:get_by_property',
  settings_set_autolaunch: 'settings:setAutoLaunch',
  settings_set_startMinimaze: 'settings:setStartMinimized',
  settings_set_language: 'settings:set_language',

  theme_get_theme: 'settings:get_theme',
  theme_set_theme: 'settings:set_theme',
  theme_on_update: 'settings:on_update',

  i18next_change_language: 'i18next:change_language',
  i18next_get_language: 'i18next:get_language',
  i18next_get_resources: 'i18next:get_resources',

  window_on_update: 'window:on_update',
  window_fullscreen: 'window:toggle-fullscreen',
  window_minimaze: 'window:minimize',
  window_maximaze: 'window:maximize',
  window_close: 'window:close'
} as const

export interface WindowAppProps {
  minimize: boolean
  maximize: boolean
  fullscreen: boolean
  show: boolean
}

export interface SettingsProps {
  autoLaunch: boolean
  startMinimized: boolean
}

export interface LocationProps {
  version: string
  autoLaunch: boolean
  startMinimized: boolean
  checkForUpdatesOnStartup: boolean
}

export const SUPPORTED_LANGUAGES: LanguageApp[] = ['ru', 'en']
export type LanguageApp = 'ru' | 'en'
export interface LanguageProps {
  language: LanguageApp
}

export type ThemeProps = {
  mode: 'system' | 'dark' | 'light'
  darken: boolean
}
