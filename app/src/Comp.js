// import React, { useEffect, useState } from 'react'
// import abi from "./abi.json"
// import {ethers} from 'ethers';
// import provider from './connect';



// const Comp = (data) => {

//     async function test(){
//         console.log("is this even working",provider,"⚡⚡⚡")
//         const signer = await provider.getSigner()
//         const contract = new ethers.Contract("0xB695392C08B65230Ff972A820E86bB63596f9A3f",abi,signer)
//         const rate = await contract.exchangeRates("100");
//         // console.log(data);  
//         const hexToDecimal = hex => parseInt(hex, 16);
//         document.getElementById('show').innerHTML = hexToDecimal(rate._hex);
//       }


//   return (
//     <div onClick={test}>click me</div>
//   )
// }

// export default Comp;