'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Demo from "/public/assets/Demo.JPG"
export default function Home() {

  const [inputValue, setInputValue] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(inputValue.length);
  }, [inputValue]);

  const handleInputChange = (e) => {
    if (e.target.value.length <= 18) { setInputValue(e.target.value);}

  };

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <main>
        {/* Header */}
        <header className="bg-base-300">
          <div className="max-w-4xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 py-4">
            <div className="font-bold text-lg">PsWd</div>
            <nav className="hidden md:flex space-x-6">
              <Link className="link link-hover" href="/FAQ">FAQ</Link>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="text-center py-12 px-4 sm:py-16 flex flex-col md:flex-row gap-10 justify-center items-center">
          

          <Image className="w-96 rounded-xl grayscale" src={Demo} alt="Demo"/>
          
          
          <section>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 ">
            Welcome to PsWd
            </h1>


            {/* Input Form */}
            <div className="max-w-md mx-auto flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="text"
              placeholder="Type here"
              className="input input-primary w-full sm:w-auto sm:flex-1"
              value= {inputValue}
              
              onChange = {handleInputChange}
            />
            <button className="btn btn-neutral w-full sm:w-auto">Send</button>
          </div>

          {/* SymbolCounter */}
        <section className="text-center">

        <p className="text-error font-bold">
          {counter >= 18 ? "limit reached!" : ""}
        </p>
          </section>
        </section>
     </section>
        
      </main>
    </div>
  );
}
