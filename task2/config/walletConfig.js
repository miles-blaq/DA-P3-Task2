// import { useMemo} from "react"
// import { WalletAdapterNetwork} from "@solana/wallet-adapter-base"
// import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';


// const network = WalletAdapterNetwork.Devnet

// const endpoint = useMemo(() => solanaweb3.clusterApiUrl(network, [network]))

// const wallets = useMemo(
//     () => [
//         /**
//          * Wallets that implement either of these standards will be available automatically.
//          *
//          *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
//          *     (https://github.com/solana-mobile/mobile-wallet-adapter)
//          *   - Solana Wallet Standard
//          *     (https://github.com/solana-labs/wallet-standard)
//          *
//          * If you wish to support a wallet that supports neither of those standards,
//          * instantiate its legacy wallet adapter here. Common legacy adapters can be found
//          * in the npm package `@solana/wallet-adapter-wallets`.
//          */
//         new UnsafeBurnerWalletAdapter(),
//     ],
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [network]
// );