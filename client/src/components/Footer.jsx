import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-4 px-4 mt-20 '>
        <img src='src/assets/robot-assistant.png' alt="" width={35} />
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @NIshita.gmail.com | ALL Right reserved.</p>
        <div className='flex gap-2.5'>
           <Link to='https://www.facebook.com'> <img src={assets.facebook_icon} 
            alt="" width={35}/></Link>
         <Link to='https://www.twitter.com'>  <img src={assets.twitter_icon} alt="" width={35}/></Link>
         <Link to='https://www.instagram.com'>  <img src={assets.instagram_icon} alt="" width={35}/></Link>
        </div>
      
    </div>
  )
}

export default Footer
