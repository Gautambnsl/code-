import {ethers} from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

console.log("first line in our website")

async function connect(){ 

console.log("connect is working")

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        56: 'https://bsc-dataseed1.binance.org'
      },
      chainId: 56
    }
  }
}

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

const provider = await web3Modal.connect();
await web3Modal.toggleModal();

// regular web3 provider methods
// const newWeb3 = new Web3(provider);
const web3Provider = new ethers.providers.Web3Provider(provider);
// await web3Provider.send("eth_requestAccounts", [])

const signer = web3Provider.getSigner()
console.log(signer,"Connect.js wala isgner ")

const accounts = await signer.getAddress()

console.log("connect is finished and accout number is 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀" , accounts);

return {web3Provider,signer};



// const AproviderOptions = {
//   walletconnect: {
//     package: WalletConnectProvider,
//     options: {
//       rpc: {
//         56: 'https://bsc-dataseed1.binance.org'
//       },
//       chainId: 56
//     }
//   }
// }

// const Aweb3Modal = new Web3Modal({
//   network: "mainnet", // optional
//   cacheProvider: true, // optional
//   providerOptions // required
// });

// const Aprovider = await web3Modal.connect();
// await Aweb3Modal.toggleModal();

// // regular web3 provider methods
// // const newWeb3 = new Web3(provider);
// const Aweb3Provider = new ethers.providers.Web3Provider(Aprovider);
// // await web3Provider.send("eth_requestAccounts", [])

// const Asigner = Aweb3Provider.getSigner()
// console.log(signer,"☘️☘️")

// const Aaccounts = await Asigner.getAddress()

// return signer;

// console.log(accounts,"👨‍💻👨‍💻👨‍💻");
// console.log("is this even working",provider,"⚡⚡⚡")
// // const signer = await provider.getSigner()
// const contract = new ethers.Contract("0xB695392C08B65230Ff972A820E86bB63596f9A3f",abi,signer)
// const rate = await contract.exchangeRates("100");
// // console.log(data);  
// const hexToDecimal = hex => parseInt(hex, 16);
// document.getElementById('show').innerHTML = hexToDecimal(rate._hex);

//     const signer2 = web3Provider.getSigner()
//     console.log(signer2,"this is signer 2");

// return web3Provider;

}



export default connect;