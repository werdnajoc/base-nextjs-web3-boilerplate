import React from 'react'
import { ApolloProvider as Provider } from '@apollo/client'

import { apolloClient } from './client'

interface Props {
  children: React.ReactNode
}

export const ApolloProvider: React.FC<Props> = ({ children }) => {
  return <Provider client={apolloClient}>{children}</Provider>
}
