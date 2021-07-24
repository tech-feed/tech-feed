const locales = [
  {
    locale: 'pt-br',
    messages: import('./pt-br'),
    //loadData: import(`@formatjs/intl-relativetimeformat/dist/locale-data/en`),
  },
  {
    locale: 'en',
    messages: import('./en'),
    //loadData: import(`@formatjs/intl-relativetimeformat/dist/locale-data/en`),
  },
  {
    locale: 'ru',
    messages: import('./ru'),
    //loadData: import(`@formatjs/intl-relativetimeformat/dist/locale-data/ru`),
  },
  {
    locale: 'de',
    messages: import('./de'),
    //loadData: import(`@formatjs/intl-relativetimeformat/dist/locale-data/de`),
  },
]

export default locales
