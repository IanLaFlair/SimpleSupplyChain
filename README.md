# SimpleSupplyChain

Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,
AngularJS-powered HTML5 Markdown editor.

- Truflle Version is 4.1.14
- Web3 v1.2.1
- ✨Node v16.13.2

- Activity Diagram
![Activity Diagram](images/activity.jpeg)
- Sequence Diagram
![Sequence Diagram](images/sequence.jpeg)
- State Diagram
![State Diagram](images/state.jpeg)
- Class Diagram
![Class Diagram](images/class.jpeg)

## Some Lib

Library:

- truffle-assertions - Used this to originally get the events to fire, don't think it is needed because I found a code snipped to raise the events.
- truffle/hdwallet-provider - HD Wallet-enabled Web3 provider. Use it to sign transactions for addresses derived from a 12 or 24 word mnemonic.

## Address

Deployed Contract Address
| Name | Address | Link |
| ------ | ------ |------|
| Supplychain | 0xD47e2b5C6a62010aCD1e72061f3c3E3ECe2d659f | https://goerli.etherscan.io/address/0x313200fa8ff3099050ec1038950c4a083df0f797 |

Transacation Id
https://goerli.etherscan.io/tx/0xe6fdf9bae1960369807c3cc8cc5aada63603b8e30902ab089ab1551ad052dcda



### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/IanLaFlair/SimpleSupplyChain
```

install all requisite npm packages (as listed in ```package.json```):

```
npm install
```

Launch Truffle:

```
truffle develop
```

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate --reset
```

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

In a separate terminal window, launch the DApp:

```
npm run dev
```
