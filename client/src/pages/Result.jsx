import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImage, setImageLoad] = useState(false);
  const [loading, setloading] = useState(false);
  const [input, setInput] = useState("");

  const { generateImage } = useContext(AppContext);
  const onSumitHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    if (input) {
      const image = await generateImage(input);
      if (image) {
        setImageLoad(true);
        setImage(image);
      }
    }
    setloading(false);
  };
  return (
    <div className="bg-gradient-to-b from-teal-100 to-orange-100 p-6">
      <Navbar />
      <motion.form
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={onSumitHandler}
        className="flex flex-col min-h-[90vh] justify-center items-center"
      >
        <div>
          <div className="relative">
            <img src={image} alt="" className="max-w-sm rounded" />
            <span
              className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
                loading ? " w-full transition-all duration-[10s]" : "w-0"
              }`}
            ></span>
          </div>
          <p className={!loading ? "hidden text-black" : ""}>Loading....</p>
        </div>
        {!isImage && (
          <div className="flex w-full max-w-xl bg-neutral-500 text-black text-sm p-0.5 mt-10 rounded-full">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Describe what you want to generate"
              className="flex-1 bg-transparent text-white outline-none ml-8 max-sm:w-20 placeholder-color"
            />
            <button
              type="submit"
              className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-white"
            >
              Generate
            </button>
          </div>
        )}
        {isImage && (
          <div className="flex gap-2 flex-wrap justify-center text-black text-sm p-0 mt-10 rounded-full">
            <p
              onClick={() => {
                setImageLoad(false);
              }}
              className="bg-transparent border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
            >
              Generate Another
            </p>
            <a
              href={image}
              download
              className="bg-zinc-900 text-white px-10 p-3 rounded-full cursor-pointer"
            >
              {" "}
              Download
            </a>
          </div>
        )}
      </motion.form>
      <Footer />
    </div>
  );
};

export default Result;
