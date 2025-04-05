import React from 'react'
import Image from "next/image";
import logoImage from "../../public/images/logo.png";
import NavItem from "@/components/nav-item";
const NavigationBar = () => {
  return (
    <div>
      <header className="px-32 flex flex-col gap-0 justify-center items-center relative w-full h-[100px] bg-[#00e295]">
        <nav className='flex justify-between items-center w-full'>

          <Image
            src={logoImage}
            alt="Network illustration"
            width={188}
            height={50}

          />


          <div className='flex  justify-between items-center w-[600px]'>
            <NavItem label="About Us" href="/about" />
            <NavItem label="Invest In ReferMe" href="/services" />
            <NavItem label="Contact Us" href="/contact" />



            <button className='rounded-full border border-[#00e295] py-3 px-4  items-center self-stretch relative w-full bg-[#272c2a]'>
            <p className='text-base  text-white font-normal w-full self-stretch'>Start Your Portfolio</p>


            </button>


          </div>

        </nav>
      </header>
    </div>
  )
}

export default NavigationBar
