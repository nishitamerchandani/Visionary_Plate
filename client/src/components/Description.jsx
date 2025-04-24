import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center  my-24 p-6 md:px-28"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-blue-600">
        Create With AI 
      </h1>
      <p className="text-gray-500 mb-8">Turn Your imagination into visuals</p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          src={assets.sample_img_1}
          alt=""
          className="w-80 xl:w-96 rounded-lg "
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4 text-blue-600">
            Introducing the AI-Powered Generator
          </h2>
          <p className="text-gray-600 mb-4">
         <span ><h4 className='text-zinc-950'>Text-to-Image Generator:</h4></span> 
          A cutting-edge AI tool that transforms textual descriptions into visually stunning images. Simply describe what you envision, and the AI generates a high-quality image that matches your imagination. This tool is perfect for creative projects, concept visualizations, and bringing abstract ideas to life.
          </p>
          <p className="text-gray-600">
          <span ><h4 className='text-zinc-950'>Background Removal Tool:</h4></span> 
          An advanced AI-powered background remover that effortlessly extracts subjects from images with precision. Whether it’s for professional design work or casual editing, this tool ensures a clean cutout, saving time and enhancing productivity. Ideal for e-commerce, graphic design, or personal projects.
          </p>
          <br />
          <p className="text-gray-600">
          <span ><h4 className='text-zinc-950'>AI Chatbot:</h4></span> 
A smart conversational AI assistant that provides instant responses and support for users. Equipped with natural language processing, it understands and answers queries effectively, creating a seamless and engaging user experience. Perfect for customer service, education, or providing guidance on your platform.


          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Description
