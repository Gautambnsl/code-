import connect from "./connect";


async function getAddress(){

    const {provider,signer} = await connect();
    // console.log("this is provider", provider)
    // console.log("this is signer", signer)
    const address = await signer.getAddress();
    console.log(address,"✅✅✅✅");
    return address;


}


export default getAddress;