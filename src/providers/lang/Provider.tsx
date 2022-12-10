import React, { createContext, useCallback, useState } from 'react'
import { NextRouter, useRouter } from 'next/router'

import { IntlProvider } from 'react-intl'

import { localStorageAppHelpers } from 'shared/helpers'

import en from '../../../public/lang/en.json'
import es from '../../../public/lang/es.json'

const messages = {
  es,
  en,
}

export interface ProviderState {
  lang: string
}

export interface ContextApi extends ProviderState {
  setLang: ({ lang }: { lang: string }) => void
}

const initialState: ProviderState = {
  lang: 'en',
}

const getLocale = (router: NextRouter) => {
  let lang = localStorageAppHelpers.getLanguage() || router.defaultLocale
  const queryLang = router?.query?.lang

  if (queryLang && !!router.locales.find(l => l === queryLang) && lang !== queryLang) {
    lang = queryLang as string
    localStorageAppHelpers.setLanguage({ lang })
  }

  return lang
}

export const InternationalisationContext = createContext<ContextApi | undefined>(undefined)

export const InternationalisationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()
  const lang = getLocale(router)

  const [state, setState] = useState<ProviderState>(() => {
    return {
      ...initialState,
      lang,
    }
  })

  const setLang = useCallback(({ lang }: { lang: string }): void => {
    setState({ lang })
    localStorageAppHelpers.setLanguage({ lang })
  }, [])

  return (
    <InternationalisationContext.Provider value={{ ...state, setLang }}>
      <IntlProvider locale={state.lang} messages={messages[state.lang]}>
        {children}
      </IntlProvider>
    </InternationalisationContext.Provider>
  )
}
