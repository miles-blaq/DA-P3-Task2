# Doge academy - Phase 3 - Task2
## 1
Fork this repo, create a nextjs app. Using [@solana/wallet-adapter](https://solana-labs.github.io/wallet-adapter) add a button to the page to enable a user to connect their phantom wallet with the app.

## 2
When a user connects their wallet, display the `mindIds` of all the spl-tokens currently in the user's wallet by making use of [getProgramAccounts](https://solanacookbook.com/guides/get-program-accounts.html#facts) method. Also displays the decimals of each token using [getParsedAccountInfo](https://solana-labs.github.io/solana-web3.js/classes/Connection.html#getParsedAccountInfo).

## 3
Add a textbox to the page. When the mintId of a NFT is entered, the `attributes` of the NFT should be shown. Explore [@metaplex-foundation/js](https://github.com/metaplex-foundation/js) for this.

Eg. for the NFT with mintId - `CRHpiQu8AeUC7vvDbj58vRizsv65xbRBkpaJKnVgwF2e`

| TRAIT TYPE | VALUE         |
|------------|:-------------:|
|Background  |Red            |
|Fur /  Skin |Red / Blue     |
|Head        |Musketeer's Hat|
|Mouth       |Soda           |
|Teeth       |No Traits      |
|Clothing    |Black T-Shirt  |
|Eyewear     |Shutter Shades |
|generation  |1              |
|sequence    |236            |

## 4
Add two textboxes and a submit button to the page. The textboxes will be used to enter trait_type and value respectively. When the submit button is clicked send a transaction which if approved by user, adds the trait entered to attributes array of the NFT (Assume the user to be the update_authority of the NFT). 

### Hint -
* For uploading the metadata to arweave make use of [bundlr](https://docs.bundlr.network/docs/client/transactions).
* After which you can update URI of the NFT using metaplex-foundation/js.
