# Doge academy - Phase 3 - Task2
This week we will be working with some more commonly used packages in the solana ecosystem.

## 1
Fork this repo, create a nextjs app.

## 2
Using [@solana/wallet-adapter](https://solana-labs.github.io/wallet-adapter/) add a button to the page to enable a user to connect their phantom wallet with the app.

## 3
When a user connects their wallet, display the `mindIds` of all the tokens currently in the user's wallet.

## 4
Add a textbox and a submit button to the page.

## 5
When the mintId of a NFT is entered, the `attributes` of the NFT should be shown. Explore [@metaplex-foundation/js](https://github.com/solana-labs/wallet-adapter) for this.

Eg. for the following NFT - `CRHpiQu8AeUC7vvDbj58vRizsv65xbRBkpaJKnVgwF2e`

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

## 6
Design a [mongooseJs](https://mongoosejs.com/docs/guide.html) database schema with the following fields.

|Field | Description |
|------|:-----------:|
|creatorId|publicKey of the wallet that was connected(as string)|
|name|name of the NFT|
|creators|array of creators of the NFT|

## 7
When the submit button is clicked, store information about the NFT entered in the above schema.
