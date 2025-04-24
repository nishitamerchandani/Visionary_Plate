import React from 'react'
import Sidebar from './componet/Sidebar/Sidebar'
import Main from './componet/main/Main'
// import './index.css'
import './App.css'
// import ContextProvider from './context/Context.jsx'
const Combine = () => {
  return (
    <div className='flex text-black border'>
    <Sidebar/>
    <Main/>
    </div>
  )
}

export default Combine;
