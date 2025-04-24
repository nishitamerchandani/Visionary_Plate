import React,{useContext} from "react";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import Steps from '../components/Steps';
import Description from '../components/Description';
import Testimonials from '../components/Testimonials';
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

import Footer from "../components/Footer.jsx";

const HeroSection = () => {
  const{user,setshowlogin}=useContext(AppContext)
  const navigate=useNavigate()
  const imgGenHandler=()=>{
    if(user){
         navigate('/ImageGen')
    }else{
      setshowlogin(true)
    }
  }
  const bgRemHandler=()=>{
    if(user){
         navigate('third/h1.html')
    }else{
      setshowlogin(true)
    }
  }
  const gimiHandler=()=>{
    if(user){
         navigate('/Gemini');
    }else{
      setshowlogin(true)
    }
  }
  return (
   <div className="bg-gradient-to-b from-teal-100 to-orange-100 border">
      <h1 className="text-black text-[10vw] text-nowrap font-extrabold absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 uppercase pointer-events-none">
        VISIONARY<span className="text-red-500">PLATE</span>
      </h1>
    
      <section className="h-screen w-full overflow-hidden relative z-1 flex items-start justify-end">
        <div className="w-[120vw] h-[120vh]">
        <Spline className="w-full h-full" scene="https://prod.spline.design/Qs4PcHvfvxgR33el/scene.splinecode" />

        </div>
      </section>
      <section className="w-full h-fit absolute left-0 bottom-10 z-[11] flex items-center justify-evenly pointer-events-none gap-2 p-2">
       

        <div className="w-[15vw] max-w-[300px] min-w-[100px] h-[15vw] max-h-[300px] min-h-[100px] rounded border border-transparent p-2 flex flex-col gap-2 bg-black shadow pointer-events-auto" onClick={bgRemHandler}>
          <h2 className="text-center font-bold uppercase">BG REMOVER</h2>
          <img
            className="w-full h-full object-cover overflow-hidden "
            src="https://imgs.search.brave.com/aTzdVSat1j2cwDHduPsipYVeY7Ls-1Py-QZBQVk--kA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmdlcmFzZXIuY29t/L19uZXh0L2ltYWdl/P3VybD0vaW1hZ2Vz/L2NvbXBhcmlzb24v/MS1hZnRlci5wbmcm/dz0xMDgwJnE9NzU"
            alt=""
          />
        </div>
      
        <div className="w-[15vw] max-w-[300px] min-w-[100px] h-[15vw] max-h-[300px] min-h-[100px] p-2 flex flex-col gap-2 bg-black shadow pointer-events-auto rounded border border-transparent" onClick={imgGenHandler}>
          <h2 className="text-center font-bold uppercase">Image Generator</h2>
          <img
            className="w-full h-full object-cover overflow-hidden"
            src="https://imgs.search.brave.com/ISoc2NiqiDoWPsQurz8K86xojXry5ekMqofdb9xQb-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2dlbmVyYXRvci90/ZXh0LXRvLWltYWdl/LndlYnA"
            alt=""
          />
        </div>

        <div className="w-[15vw] max-w-[300px] min-w-[100px] h-[15vw] max-h-[300px] min-h-[100px] border p-2 flex flex-col gap-2 bg-black shadow pointer-events-auto rounded border border-transparent" onClick={gimiHandler}>
          <h2 className="text-center font-bold uppercase">Chat Ai</h2>
          <img
            className="w-full h-full object-cover overflow-hidden"
            src="https://imgs.search.brave.com/h3_jgMy3N6iWWNAHcsP3ivm3L7smO5vw_0Dkk9aYYzE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL2d3ZWIt/dW5pYmxvZy1wdWJs/aXNoLXByb2QvaW1h/Z2VzL0hlcm9fMTBf/MS53aWR0aC0xMjAw/LmZvcm1hdC13ZWJw/LndlYnA"
            alt=""
          />
        </div>
  
      </section>
      <Steps/>
    <Description/>
    <Testimonials/>
    <Footer/>
    </div>
  );
};

export default HeroSection;
