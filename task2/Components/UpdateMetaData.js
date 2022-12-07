import React from 'react'
import {Metaplex, walletAdapterIdentity, bundlrStorage} from "@metaplex-foundation/js";
import {
    Connection,
    clusterApiUrl,
    Keypair,
    PublicKey
} from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react"

export const UpdateMetaData = () => {

    const wallet = useWallet()

    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    const metaplex = Metaplex.make(connection)
    .use(walletAdapterIdentity(wallet))
    .use(bundlrStorage({
        address: 'https://devnet.bundlr.network/',
        providerUrl: 'https://api.devnet.solana.com/',
        timeout: 60000,

    }))
    const updateNFT = async (e) =>{
        e.preventDefault();

        const address = e.target.mintAddress.value
        const trait = e.target.traitType.value
        const val = e.target.value.value

        const myNftMintAddress = new PublicKey(address)
        const nft = await metaplex.nfts().findByMint({mintAddress: myNftMintAddress})

        if (!nft) {
            return
        }

        try{
        const {uri: newUri} = await metaplex.nfts().uploadMetadata({
            ...nft.json,
            attributes: [...nft.json.attributes, {"trait_type": trait, "value": val}],
        })


        await metaplex.nfts().update({
            nftOrSft: nft,
            uri: newUri
        });
      }catch(error){
        console.log("something went wrong " + error)
      }
        alert ("success")
    }

    return (
            <div>
                <p> update nft attributes below</p>
                <span> this might take a few mins to update</span>
                <form action="#" onSubmit={updateNFT}>
                    <div>
                        <label htmlFor="mintAddress"> Mint address: </label> <br />
                        <input type="text" name="mintAddress" required/>
                    </div>

                    <div>
                        <label htmlFor="traitType"> Trait type: </label> <br />
                        <input type="text" name="traitType" required/>
                    </div>

                    <div>
                        <label htmlFor="value"> value: </label> <br />
                        <input type="text" name='value'required/>
                    </div>

                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> change metadata </button>
                </form>
            </div>
            )
}