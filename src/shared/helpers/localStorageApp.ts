import * as localStorageHelpers from './localStorage'

export const setIsDarkMode = ({ darkMode }: { darkMode: boolean }) => localStorageHelpers.setItem('darkMode', darkMode)
export const getIsDarkMode = () => localStorageHelpers.getItem('darkMode', true)

export const setLanguage = ({ lang }: { lang: string }) => localStorageHelpers.setItem('@dgApp/lang', lang)
export const getLanguage = () => localStorageHelpers.getItem('@dgApp/lang', 'en')
