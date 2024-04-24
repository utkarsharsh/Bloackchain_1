import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {ethers}  from "ethers"
import abi from "./first.json"
// import { results } from '../../ignition/modules/Lock'
function App() {
  const [data,setdata]=useState({});
 const [r,setr]=useState([]);
 const [name,setname]=useState("");
 const [mess,setmess]=useState("");
    const a= async ()=>{
      if(mess==""|| name=="") {
        alert("fill the details");
        return;
      }
const {ethereum}=window;


  const account=await ethereum.request({method:"eth_requestAccounts"});
  


const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
const signer=new ethers.JsonRpcSigner(provider,account[0]);


const ABI=abi.abi;
const address="0x5fbdb2315678afecb367f032d93f642f64180aa3";

const ss=await provider.getSigner();


 const contract= new ethers.Contract(address,ABI,provider);
const contract2=new ethers.Contract(address,ABI,signer,);

let last=await contract2.takepaise(name,mess,{
  value:"1000000"
});

let result=await contract.showpaisa();
if(result){
  alert("check your wallet all done");
}
setr(result);




    
    }
useEffect(()=>{
    const demo= async ()=>{
      const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
      const ABI=abi.abi;
const address="0x5fbdb2315678afecb367f032d93f642f64180aa3";
const contract= new ethers.Contract(address,ABI,provider);
let result=await contract.showpaisa();
setr(result);
    }
    demo();

},[]);





  return (
    <>
    <div className=' bg-gradient-to-r from-violet-500 to-fuchsia-500 '>
      <div className='w-full h-[420px] relative' >
        <img src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" className='h-full w-full '/>
      </div>
      <div>
        <div className='flex flex-col justify-center align-middle'>
          <input type="text" placeholder='name'  className='p-4 border-purple-500 border-2  m-3' onChange={(e)=>{
setname(e.target.value);
          }}/>
          <input type="text" placeholder='message' className='p-4 border-purple-500 border-2 m-3' onChange={(e)=>{
setmess(e.target.value);
          }} />
          <div><button className=' mt-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white p-3 rounded-md m-2 ' onClick={a}>Pay</button></div>
        </div>
        <div className='flex'>
        <div className='w-1/3 flex flex-col '>
        <button className=' mt-3 bg-violet-500 text-white p-3 rounded-md m-2'>
          Name
        </button>

        {r.map((e)=>{
          return <button className=' mt-3  bg-fuchsia-500 text-white p-3 rounded-md m-2 '>
            {e.name}
          </button>
        })}
        </div>
        <div className='w-1/3 flex flex-col '>
        <button className=' mt-3 bg-violet-500 text-white p-3 rounded-md m-2 '>
         Message
        </button>

        {r.map((e)=>{
          return <button className=' mt-3  bg-fuchsia-500 text-white p-3 rounded-md m-2 '>
            {e.message}
          </button>
        })}
        </div>
        <div className='w-1/3 flex flex-col '>
        <button className=' mt-3 bg-violet-500 text-white p-3 rounded-md m-2'>
          Address
        </button>

        { r.map((e)=>{
          return <button className=' mt-3  bg-fuchsia-500 text-white p-3 rounded-md m-2 '>
            {e.from}
          </button>
        })}
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
