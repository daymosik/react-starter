import i18next from 'i18next'
import * as React from 'react'

enum Languages {
  Pl = 'pl',
  En = 'en-gb',
}

import * as en from './languages/en.json'
import * as pl from './languages/pl.json'

i18next.init({
  lng: Languages.Pl,
  fallbackLng: Languages.Pl,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    pl: {
      translation: pl,
    },
  },
})

const i18n = (key, props?) => {
  const message = i18next.t(key, props)
  return <span dangerouslySetInnerHTML={{ __html: message }} />
}

const i18nString = (key, props?) => {
  return i18next.t(key, props)
}

export { i18n, i18nString }
