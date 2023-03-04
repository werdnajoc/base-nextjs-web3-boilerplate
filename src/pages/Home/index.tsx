import React from 'react'
import { useNetwork, useSwitchNetwork, useAccount, useBalance, useSignMessage } from 'wagmi'
import ConnectWallet from 'components/Connect/ConnectWallet'
import { gql } from '@apollo/client'
import { useSelector } from 'react-redux'

import { ThemeToggleButton } from 'components/Theme'
import { useTranslation } from 'providers/lang'

import { useERC20Balance } from 'services/web3/ERC20'

import styles from './styles.module.sass'

import { Countries } from 'components/Countries'
import { IncrementCounter } from 'components/IncrementCounter'

import { apolloClient } from 'providers/apollo'
import { reduxWrapper } from 'providers/redux'
import { setCounterState } from 'components/IncrementCounter/redux/counterSlice'
import { BaseButton } from 'components/BaseButton'

// @TODO graphql example for getServerSideProps and getServerSideProps
export const getServerSideProps = reduxWrapper.getServerSideProps(store => async ({ params }) => {
  store.dispatch(setCounterState(7))

  const { data } = await apolloClient.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  })

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  }
})

export default function Home({ countries }: any) {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  )
}

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLeftContainer}>LOGO</div>

      <div className={styles.headerMiddleContainer}>
        <ThemeToggleButton />
      </div>

      <div className={styles.headerRightContainer}>
        <ConnectWallet />
      </div>
    </header>
  )
}

function Main() {
  const { address, isConnected, connector } = useAccount()
  const { chain, chains } = useNetwork()
  const { isLoading: isNetworkLoading, pendingChainId, switchNetwork } = useSwitchNetwork()
  const { data: balance, isLoading: isBalanceLoading } = useBalance({
    address: address,
  })
  const { setLang, t } = useTranslation()

  const { state: erc20BalanceState, fetchBalance } = useERC20Balance({
    address: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7',
  })

  const getBalance = async () => {
    fetchBalance({ address })
  }

  return (
    <main className={styles.container}>
      {t('page.home.title')}

      <BaseButton text={'English'} onClick={() => setLang({ lang: 'en' })} />
      <br />
      <BaseButton text={'Spanish'} onClick={() => setLang({ lang: 'es' })} />
      <br />
      <IncrementCounter />
      <br />
      <Countries />
    </main>
  )
}
