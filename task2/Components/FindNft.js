import React, { useState } from 'react'
import * as solanaWeb3 from "@solana/web3.js"
import { Metaplex } from "@metaplex-foundation/js"


export const FindNft = () => {

    const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("devnet"))
    const metaplex = new Metaplex(connection)

    const [attr, setAttr] = useState(["g","h","i"])
    const [attrState, setAttrState] = useState(false)



    const getAttributes = async (e) =>{
        e.preventDefault();

        const mintID = await e.target.mintId.value;

        const mintAddress = await new solanaWeb3.PublicKey(mintID)
        // "CRHpiQu8AeUC7vvDbj58vRizsv65xbRBkpaJKnVgwF2e"

        const nft = await metaplex.nfts().findByMint({mintAddress})

        await setAttr([nft.json.attributes])
        await setAttrState(true)
    }


  return (
    <div style={{margin: "40px 0"}}>
        <form onSubmit={getAttributes}>
            <label htmlFor="mintId"> Get attributes with mintID :</label> <br />
            <input type="text" name="mintId" required/> <br />
            <button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" > Get Attributes</button>
        </form>
        {
            attrState == false? <p> attributes will show here</p> : 
            
            <div>
            <p> attributes will show here xxx</p>
            <table class="border-collapse border border-slate-500 ...">
                <tr>
                    <th class="border border-slate-600 ..."> attributes </th>
                    <th class="border border-slate-600 ..."> value</th>
                </tr>
            {
            attr[0].map((a,index)=>{
                return (
                    <tr>
                        <td class="border border-slate-700 ...">{a.trait_type}</td>
                        <td class="border border-slate-700 ...">{a.value}</td>
                    </tr>
                )
            })
            }
            </table>
        </div>
        }
     
      
    </div>
  )
}
