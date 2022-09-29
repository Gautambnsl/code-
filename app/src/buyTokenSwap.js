import connect from "./connect";
import {ethers} from "ethers";
import abi from "./abi/swap.json"


async function buyTokenSwap(amt){

    const contractAddress = "0xA9155a271F2fE21c9c0deC3373dB2c7082a332a5";

    const {provider,signer} = await connect();

    console.log("this is provider", provider)
    console.log("this is signer", signer)

    const contract = new ethers.Contract(contractAddress, abi, signer)

    const data = await contract.exchangeToken(amt);

    return data;
}


export default buyTokenSwap;