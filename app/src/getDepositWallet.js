import connect from "./connect";
import {ethers} from "ethers";
import abi from "./abi/deposit.json";


async function getDepositeWallet(amt){

    const contractAddress = "0x8B84317C0480901De5ec1194e029eb64Feb2187D";

    const {provider,signer} = await connect();

    console.log("this is provider", provider)
    console.log("this is signer", signer)

    const contract = new ethers.Contract(contractAddress, abi, signer)

    const data = await contract.tokenDeposite(amt);

    return data;
}


export default getDepositeWallet;