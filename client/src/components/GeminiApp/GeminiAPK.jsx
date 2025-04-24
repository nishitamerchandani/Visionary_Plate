import React from 'react'
import Combine from './combine.jsx'
import './index.css'
import './App.css'
import ContextProvider from './context/Context.jsx'
const GeminiAPK = () => {
  return (
    <ContextProvider>
      <Combine />
    </ContextProvider>
  )
}

export default GeminiAPK;
