
![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square) ![DUB](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)


# Groupeth
Decentralized Crowd campaign app running on **Rinkeby** test net.  Made using React,Next.js,Solidity and Semantic-UI.

![Home Page](images/home.PNG "Home Page")

## Quick Installation
```javascript
npm install
yarn run dev
```

## Custom Installation
To run with your own Contract address
```javascript
cd .. ethereum
node compile.js
node deploy.js
```


Replace this line with your contract address from console.log
```javascript
(JSON.parse(CampaignFactory.interface),{contract_address_here});
```
Then run
```javascript
yarn run dev
```
