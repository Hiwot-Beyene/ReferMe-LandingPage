import React from 'react'

const CurrentBalance = () => {
    return (
        <div className=' bottom-100 right-4 rounded-2xl border border-[#666666] p-4 flex  items-center  relative  w-[140px] h-[126px] bg-[#272c2a]'>
            <div className='flex flex-col gap-2 justify-center items-center relative'>
                <small className=' text-white text-sm font-normal w-full leading-[17px]'>
                    Current Balance

                </small>
                <div className='flex gap-2 items-center relative'>
                    <h4 className=' text-[22px] tracking-[-0.02em] font-semibold '>
                        $200
                    </h4>
                    <svg
                        width="16"
                        height="32"
                        viewBox="0 0 96 96"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"
                            fill="#ffffff"
                        />
                    </svg>



                </div>
                <button className=' rounded-full px-4 py-2 flex gap-2 justify-center items-center relative bg-[#00e295]'>
                    <small className='text-sm leading-[17px] text-[#272c2a] font-bold'>View</small>

                </button>

            </div>
        </div>
    )
}

export default CurrentBalance
