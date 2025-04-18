import React, { useState } from 'react'
import { macbookModels } from '../data/index'

const MacBook = () => {

    const [selectedChip, setSelectedChip] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);

    const handleSelectChip = (index) => {
        setSelectedChip(index);
        setSelectedColor(0);
    }

    const currentMb = macbookModels[selectedChip];
    const currentColor = currentMb.colors[selectedColor];

    return (
        <div className='flex flex-col items-center justify-around bg-white p-8'>
            <h1 className='2xl:text-4xl xl:text-3xl md:text-2xl font-semi-bold text-gray-700 mb-8'>Choose Your Ideal MacBook Air.</h1>


            <div className='flex '>
                {macbookModels.map((mb, index) => (
                    <button
                        key={index}
                        className={`2xl:w-36 md:w-26 w-28 2xl:h-18 md:h-12 h-12 flex flex-col justify-evenly items-center border ${index === 0 ? "rounded-l-xl" : "rounded-r-xl"}
                ${index === selectedChip ? "border-2 border-blue-400" : "border-gray-700"}`}
                        onClick={() => handleSelectChip(index)}
                    >
                        <span className='2xl:text-lg xl:text-sm text-xs font-bold text-gray-700'>With {mb.chip} chip</span>
                        <span className='2xl:text-base xl:text-sm text-xs text-gray-400'>{mb.price}</span>
                    </button>
                ))}
            </div>
            <div className='flex flex-col 2xl:p-4 md:items-start items-center'>
                <div className='w-80 h-64 2xl:mb-0 mb-8'>
                    <img src={currentColor.img}
                        alt={`MacBook Air with ${currentMb.chip}`}
                        className='2xl:w-72 xl:w-52 w-48 h-full 2xl:mt-0 sm:mt-6' />
                    <span className='2xl:text-lg xl:text-sm font-medium text-gray-700 mb-2 text-center md:text-left '>Gold</span>
                    <div className='flex space-x-2 mb-4 md:text-left justify-center md:justify-start'>
                        <button className='2xl:w-6 sm:w-5 2xl:h-6 sm:h-5 h-4 bg-[#2e3641] rounded-full border hover:border-blue-500'></button>
                        <button className='2xl:w-6 sm:w-5 2xl:h-6 sm:h-5 h-4 bg-[#2e3641] rounded-full border hover:border-blue-500'></button>
                        <button className='2xl:w-6 sm:w-5 2xl:h-6 sm:h-5 h-4 bg-[#2e3641] rounded-full border hover:border-blue-500'></button>
                    </div>
                    <img src='Assets/images/apple-m2-icon.png' alt='chip' className='w-12 h-12 2xl:mb-2 xl:mb-2' />
                    <div className='2xl:mb-4 xl:mb-2 text-center md:text-left'>
                        <p className="2xl:text-lg xl:text-base font-semibold text-gray-700 mb-0.5">8-Core CPU</p>
                        <p className="2xl:text-lg xl:text-base font-semibold text-gray-700 mb-0.5">8-Core CPU</p>
                        <p className="2xl:text-lg xl:text-base font-semibold text-gray-700 mb-0.5">8-Core CPU</p>
                        <p className="2xl:text-lg xl:text-base font-semibold text-gray-700 mb-0.5">8-Core CPU</p>
                    </div>
                    <button type='button' className='w-min text-sm py-1 px-3 bg-blue-400 rounded-full text-white mt-4 md:mt-0'>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default MacBook