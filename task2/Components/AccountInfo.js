
import * as solanaweb3 from "@solana/web3.js"
import { useWallet } from "@solana/wallet-adapter-react"
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { useState,useEffect } from 'react'

const AccountInfo = () => {
    const { wallet, publicKey } = useWallet()
    const [accountInfo, setAccountInfo] = useState(null)
    const [splAccounts, setSplAccounts ] = useState([])

    

    const getAccts = async () => {

        const MY_WALLET = await publicKey.toBase58()
        // "5HrdP3cHgVGF8nQB45HwBKfSzKqdvSyYEdAz34JX6eS1"

        const connection = new solanaweb3.Connection(solanaweb3.clusterApiUrl("devnet"), "confirmed");

        const accounts = await connection.getParsedProgramAccounts(
            TOKEN_PROGRAM_ID,
            {
                filters: [
                    {
                        dataSize: 165,
                    },
                    {
                        memcmp: {
                            offset: 32,
                            bytes: MY_WALLET
                        },
                    },
                ]
            }
        )
        await setAccountInfo(`Found ${accounts.length} token account(s) for wallet ${MY_WALLET}: `)

        await setSplAccounts([...accounts])
        console.log("printingSpl accts......++")
        console.log(accounts)
    }

    useEffect(()=>{

    }, [])

    return (

        <div>
            <p> Wallet successfully connnected </p>
            <button onClick={getAccts} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Get SPL accounts</button>
            <p style={{margin: "40px 0"}}>{accountInfo}</p>

        {
            splAccounts.map((account, i) => {
                return(
                <div>
                    <p> {`MintID: ${account.account.data["parsed"]["info"]["mint"]} 
                    || Amount: ${account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]}`} 
                    </p>
                </div>
                )
            })
        }
        </div>
    )
}

export default AccountInfo