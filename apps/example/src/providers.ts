import Portis from '@portis/web3'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Authereum from 'authereum'
import Fortmatic from 'fortmatic'
import Web3Modal from 'web3modal'

const providerOptions = {
  portis: {
    package: Portis,
    options: {
      id: '8f5cf962-ad62-4861-ab0c-7b234b6e6cff'
    }
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: 'e87f83fb85bf4aa09bdf6605ebe144b7'
    }
  },
  fortmatic: {
    package: Fortmatic,
    options: {
      key: 'pk_live_EC842EEAC7F08995'
    }
  },
  authereum: {
    package: Authereum,
    options: {}
  }
}

export const web3Modal = new Web3Modal({
  network: 'mainnet',
  cacheProvider: true,
  providerOptions
})
