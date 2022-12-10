import React from 'react'

import { ThemeProvider } from './theme'
import { Web3Provider } from './web3'
import { ApolloProvider } from './apollo'
import { InternationalisationProvider } from './lang'

interface Props {
  children: React.ReactNode
}

export const AppProviders: React.FC<Props> = ({ children }) => {
  return (
    <InternationalisationProvider>
      <ThemeProvider>
        <ApolloProvider>
          <Web3Provider>{children}</Web3Provider>
        </ApolloProvider>
      </ThemeProvider>
    </InternationalisationProvider>
  )
}
