# did-ops

## Developer SDK for Uport: 

```js
https://developer.uport.me/
```

## Onboarding new users from Dapp on to Uport:

- Connect Users to Your web3 dApp

- Add full support for uPort by adding a single line of code to your web3 dApp.

    1. Onboard new users within minutes
    2. Instantly create a privacy-preserving Ethereum account
    3. Build for both desktop and mobile browsers

## Issue & Request Verified Credentials

 - Help your users build their digital identity by issuing Verified Credentials about them or the things they do in your app.

    1. Request Ethereum transaction signing with web3
    2. Issue and Request Verified Credentials about your users

## Ethereum DID Registry Details

```
DIDs' are registered , stored in smart contract called ethr-did-registry
address for contract on ropsten is: 
```

```js
https://ropsten.etherscan.io/address/0xdca7ef03e98e0dc2b855be647c39abe984fcf21b
```

```
for further details on ethr-did-registry smartcontract, refer:
```

```js
https://github.com/uport-project/ethr-did-registry
```

- Using the Registry

```
The DID Registry can be used from JavaScript as well as directly from other contracts.

To use the contract, we provide truffle artifacts.
Once you require the Ethr-DID-Registry module, you will get an object containing the JSON.
```

```js
const DidRegistryContract = require('ethr-did-registry')
```

- You can use truffle-contract to utilize these artifacts.

```js
const Contract = require('truffle-contract')
let DidReg = Contract(DidRegistryContract)
DidReg.setProvider(web3.currentProvider)
let didReg = DidReg.deployed()
```

- You can also use web3.

```js
let networkId = 1 // Mainnet
let DidReg = web3.eth.contract(DidRegistryContract.abi)
let didReg = DidReg.at(DidRegistryContract.networks[networkId].address)
```
