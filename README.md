# Doge academy - Phase 3 - Task2
## 1
Fork this repo, create a nextjs app. Using [@solana/wallet-adapter](https://solana-labs.github.io/wallet-adapter/) add a button to the page to enable a user to connect their phantom wallet with the app.

## 2
When a user connects their wallet, display the `mindIds` of all the spl-tokens currently in the user's wallet.

## 3
Add a textbox and a submit button to the page.
When the mintId of a NFT is entered, the `attributes` of the NFT should be shown. Explore [@metaplex-foundation/js](https://github.com/solana-labs/wallet-adapter) for this.

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
Design a [mongooseJs](https://mongoosejs.com/docs/guide.html) database schema with the following fields. When the submit button is clicked, store information about the NFT entered in the schema.
|Field | Description |
|------|:-----------:|
|creatorId|publicKey of the wallet that was connected(as string)|
|name|name of the NFT|
|creators|array of creators of the NFT|
