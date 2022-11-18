
import * as solanaweb3 from "@solana/web3.js"
import { useWallet } from "@solana/wallet-adapter-react"
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { useState,useEffect } from 'react'

// i keep getting 3 error
// 1) some runtime error, you can see it in the browser console, 
// although the app funtions despite it, would like to know how to tackle it
// 2) line  29 
// the app tries to read the address before it fully connects i guess, which shows that error, 
// then the app still goes ahead to run as intended
// but after the initial connection, it doesnt show this error anymore, until you restart the server

//3) line 69
// i am setting accounts (line 51 ) to the local state 'splAccounts',
// but i can't iterate through its value because it says it's empty

const AccountInfo = () => {
    const { wallet, publicKey } = useWallet()
    const [accountInfo, setAccountInfo] = useState(null)
    const [splAccounts, setSplAccounts ] = useState(null)

    

    const getAccts = async () => {

        // error number 2
        const MY_WALLET = publicKey.toBase58()
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

        setSplAccounts(accounts)
        setAccountInfo(`Found ${accounts.length} token account(s) for wallet ${MY_WALLET}: `)
    }

    if(!wallet){
        return(<p> Please connect your wallet </p>)
    }else{
        getAccts();
    }

    return (
        <div>
            <p> wallet successfully connnected </p>
            {/* <button onClick={getAccts}> can you see this </button> */}
            <p>{accountInfo}</p>
            {/* <p>{splAccounts}</p> */}


{/* uncomment this part for error 3 
        {
            splAccounts.map((account, i) => {
                return(
                <p> {`Mint: ${account.account.data["parsed"]["info"]["mint"]}`} </p>
                )
            })
        } */}
        </div>
    )
}

export default AccountInfo