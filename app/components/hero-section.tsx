import React from 'react'
import Image from "next/image";
import HeroImg from "../../public/images/hero.png";
import CurrentBalance from './current-balance';
import TotalReferred from './total-referred';

const HeroSection = () => {
    return (
        <section className="overflow-hidden px-32  py-8 relative w-[100%] h-[864px] bg-[radial-gradient(circle_at_center,_#3A554A_-60%,_#272C2A_60%)] ">
            <div className='flex justify-between items-center relative w-full '>
                <div className='flex flex-col gap-8 py-24 items-start relative w-[656px] '>
                    <div className='flex flex-col gap-6 items-start self-stretch relative w-full'>
                        <h1 className='text-[64px] font-bold leading-20'>
                            <span className='text-white font-bold'> Where Your Network is Your </span>
                            <span className='text-[#00e295] '> Net Worth</span>
                        </h1>
                        <p className='text-lg leading-[27px] text-neutral-100 font normal'>

                            ReferMe is a platform designed for individuals who want to create passive income while helping local businesses grow. By referring businesses to our network, you unlock a sustainable way to earn while supporting your community.
                        </p>
                        <button className='rounded-full border border-[#00e295] px-6 py-3 flex gap-2 justify-center items-center relative bg-[#00e295]'>
                            <p className='text-base text-black font-normal'>Start Your Portfolio</p>
                            <svg
                                width="32"
                                height="24"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"

                            >
                                <path
                                    d="M25.2041,16l-6.37,9.5547A1,1,0,0,1,17.17,24.4453L22.1328,17H7.998a1,1,0,0,1,0-2H22.1328L17.17,7.5547A1,1,0,0,1,18.834,6.4453Z"
                                    fill="#00000"
                                />
                            </svg>


                        </button>
                    </div>

                </div>
                <div className='relative pt-24 w-[715px] h-[845px]'>
                    <div className='rounded-t-[32px] rounded-b-none w-[460px] h-[497px] bg-[#00e295]'>
                        <Image
                            src={HeroImg}
                            alt="Network illustration"
                            width={715}
                            height={826}

                        />
                        <CurrentBalance />
                        <TotalReferred/>
                        
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSection
