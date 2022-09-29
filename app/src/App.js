
// import './App.css';
import { useEffect, useState } from 'react';
import connect from './connect';
import getAddress from './getAddress';
import getExchangeRateICO from './getExchangeRateICO';
import buyTokenIco from './buyTokenIco';
import getExchangeRateSwap from './getExchangeRateSwap';
import buyTokenSwap from './buyTokenSwap';
import getDepositeWallet from './getDepositWallet';




function App() {

const [address, setAddress] = useState();
const [exRateIco, setExRateIco] = useState();
const [exRateSwap, setExRateSwap] = useState();
const [icoAmount, setIcoAmount] = useState();
const [swapAmount, setSwapAmount] = useState();
const [depositAmount, setDepositAmount] = useState();

async function temp(){
const data = await connect();
}

async function fetchAddress(){
  const data = await getAddress();
  setAddress(data);
}

async function fetchExchangeRateICO(){
  const data = await getExchangeRateICO()
  console.log("data is", data , "🛅🛅🛅🛅🛅🛅🛅🛅🛅🛅🛅");
  const temp = parseInt(data._hex, 16);
  console.log(temp, "this is hex to dec value")
  setExRateIco(temp);
}

async function fetchBuyTokenIco(){
  await buyTokenIco(icoAmount);
}
 
async function fetchExchangeRateSWAP(){
  const data = await getExchangeRateSwap();
  console.log("data is", data , "🛅🛅🛅🛅🛅🛅🛅🛅🛅🛅🛅");
  const temp = parseInt(data._hex, 16);
  console.log(temp, "this is hex to dec value")
  setExRateSwap(temp);
}

async function fetchBuyTokenSwap(){
  await buyTokenSwap(swapAmount);
}


async function fetchDepositWallet(){

await getDepositeWallet(depositAmount);

}
  
useEffect(()=>{
  temp();
  },[])     

  return (
    <>
    <button onClick={fetchAddress}>get Address</button>===<p>Address : {address}</p>
    {/*-------------------------------------------------ICO---------------------------------------------------*/}
    <button onClick={fetchExchangeRateICO}>get exhange rate ICO</button>===<p>exchange Rate ICO: {exRateIco}</p>
    <button onClick={fetchBuyTokenIco}>buy token</button>===
    <input type="text" placeholder='enter amount to buy token' onChange={e => setIcoAmount(e.target.value) }/>
    {/*-------------------------------------------------SWAP---------------------------------------------------*/} <br /> <br />
    <button onClick={fetchExchangeRateSWAP}>get exhange rate Swap</button>===<p>exchange Rate Swap: {exRateSwap}</p>
    <button onClick={fetchBuyTokenSwap}>buy token Swap</button>===
    <input type="text" placeholder='Swap : enter amount to buy token' onChange={e => setSwapAmount(e.target.value) }/>
    {/*-------------------------------------------------DepositWallet---------------------------------------------------*/} <br /> <br />
    <button onClick={fetchDepositWallet}>Deposit</button>===
    <input type="text" placeholder='Deposit Amount' onChange={e => setDepositAmount(e.target.value) }/>
    </>
  );
}

export default App;
