import React from 'react'
import { iphoneModels } from '../data/index'

const Iphone = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-around p-8'>
            <h3 className='2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-6'>
                Which iphone suits you?
            </h3>
            <div className='flex justify-between w-full'>
                {iphoneModels.map((iphone, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center justify-between gap-y-3 '>
                        <img
                            src={iphone.img}
                            alt={iphone.name} className='2xl:w-72 lg:w-64 sm:w-48 md:h-64 object-contain' />
                        <a
                            href='#'
                            className='2xl:text-2xl xl:text-xl lg:text-base text-sm font-semibold text-gray-800 nt-4'>
                            {iphone.name}
                        </a>
                        <p className='2xl:text-lg xl:text-base lg:text-sm text-xs text-gray-600 mt-2'>{iphone.description}</p>
                        <span className='2xl:text-base xl:text-sm lg:text-xs text-blue-400 mt-2'>{iphone.price}</span>
                        <button
                        type='button' 
                        className='text-sm mt-2 px-4 py-2 bg-blue-400 text-white rounded-full'>Buy</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Iphone