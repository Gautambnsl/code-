import connect from "./connect";
import {ethers} from "ethers";
import abi from "./abi/ico.json"


async function getExchangeRateICO(){

    const contractAddress = "0xB695392C08B65230Ff972A820E86bB63596f9A3f";

    const {provider,signer} = await connect();

    console.log("this is provider", provider)
    console.log("this is signer", signer)

    const contract = new ethers.Contract(contractAddress, abi, signer)

    const data = await contract.exchangeRate();

    return data;
}


export default getExchangeRateICO;