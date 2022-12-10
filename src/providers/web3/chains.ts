import { Chain } from '@rainbow-me/rainbowkit'

const bscMainet: Chain = {
  id: 56,
  name: 'BNB Smart Chain',
  network: 'bsc',
  iconUrl: 'https://assets-cdn.trustwallet.com/blockchains/smartchain/info/logo.png',
  nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
  rpcUrls: {
    default: 'https://bsc-dataseed.binance.org',
    public: 'https://bsc-dataseed.binance.org',
  },
  blockExplorers: {
    etherscan: {
      name: 'Etherscan',
      url: 'https://bscscan.com/',
    },
    default: {
      name: 'Etherscan',
      url: 'https://bscscan.com/',
    },
  },
  testnet: false,
}

const bscTestnet: Chain = {
  id: 97,
  name: 'BNB Smart Chain',
  network: 'bsc',
  iconUrl: 'https://assets-cdn.trustwallet.com/blockchains/smartchain/info/logo.png',
  nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
  rpcUrls: {
    default: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    public: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  },
  blockExplorers: {
    etherscan: {
      name: 'Etherscan',
      url: 'https://testnet.bscscan.com',
    },
    default: {
      name: 'Etherscan',
      url: 'https://testnet.bscscan.com',
    },
  },
  testnet: true,
}

const mainets = {
  bsc: bscMainet,
}

const testnets = {
  bsc: bscTestnet,
}

export default process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK_TYPE === 'mainet' ? mainets : testnets
