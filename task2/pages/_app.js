import '../styles/globals.css'

//wallet connect
import { useMemo} from "react"
import * as solanaweb3 from "@solana/web3.js"
import { WalletProvider, ConnectionProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton} from "@solana/wallet-adapter-react-ui"
import { WalletAdapterNetwork} from "@solana/wallet-adapter-base"
import { UnsafeBurnerWalletAdapter, WalletConnectWalletAdapter,SolletExtensionWalletAdapter } from '@solana/wallet-adapter-wallets';
// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

function MyApp({ Component, pageProps }) {

  const network = WalletAdapterNetwork.Devnet

  const endpoint = useMemo(() => solanaweb3.clusterApiUrl(network, [network]))

  const wallets = useMemo(
    () => [
        /**
         * Wallets that implement either of these standards will be available automatically.
         *
         *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
         *     (https://github.com/solana-mobile/mobile-wallet-adapter)
         *   - Solana Wallet Standard
         *     (https://github.com/solana-labs/wallet-standard)
         *
         * If you wish to support a wallet that supports neither of those standards,
         * instantiate its legacy wallet adapter here. Common legacy adapters can be found
         * in the npm package `@solana/wallet-adapter-wallets`.
         */
        // new UnsafeBurnerWalletAdapter(),
        new WalletConnectWalletAdapter({
          network,
          options: {
              relayUrl: 'wss://relay.walletconnect.com',
              // example WC app project ID
              projectId: 'e899c82be21d4acca2c8aec45e893598',
              metadata: {
                  name: 'Example App',
                  description: 'Example App',
                  url: 'https://github.com/solana-labs/wallet-adapter',
                  icons: ['https://avatars.githubusercontent.com/u/35608259?s=200'],
              },
          },
      }),  
      new SolletExtensionWalletAdapter({
        network,
        options: {
            relayUrl: 'wss://relay.walletconnect.com',
            // example WC app project ID
            projectId: 'e899c82be21d4acca2c8aec45e893598',
            metadata: {
                name: 'Example App',
                description: 'Example App',
                url: 'https://github.com/solana-labs/wallet-adapter',
                icons: ['https://avatars.githubusercontent.com/u/35608259?s=200'],
            },
        },
    }),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
);

  return (
    <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <WalletMultiButton/>
          <WalletDisconnectButton/>

      <Component {...pageProps} />
      
  </WalletModalProvider>
  </WalletProvider>
  </ConnectionProvider>
  )

}

export default MyApp
