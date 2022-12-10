import react from 'react'
import { useNetwork, useSwitchNetwork, useAccount, useBalance, useSignMessage } from 'wagmi'
import ConnectWallet from 'components/Connect/ConnectWallet'
import { useConnectModal, useAccountModal, useChainModal } from '@rainbow-me/rainbowkit'

import { ThemeToggleButton } from 'components/Theme'
import { useInternationalisation } from 'providers/lang'

import { useERC20Balance } from 'services/web3/ERC20'

import styles from './styles.module.sass'

import { Countries } from 'components/Countries'

import { gql } from '@apollo/client'
import { countryExampleClient } from 'providers/apollo'

// @TODO graphql example for getServerSideProps and getServerSideProps
export async function getServerSideProps() {
  const { data } = await countryExampleClient.query({
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
}

export default function Home({ countries }: any) {
  console.log('countries: ', countries)
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
  const { setLang, t } = useInternationalisation()

  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { openChainModal } = useChainModal()

  const { state: erc20BalanceState, fetchBalance } = useERC20Balance({
    address: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7',
  })

  const getBalance = async () => {
    fetchBalance({ address })
  }

  return (
    <main className={styles.container}>
      {t('page.home.title')}

      <button className="button" onClick={() => setLang({ lang: 'en' })}>
        English
      </button>
      <br />
      <button className="button" onClick={() => setLang({ lang: 'es' })}>
        Spanish
      </button>

      <br />
      <Countries />
    </main>
  )
}