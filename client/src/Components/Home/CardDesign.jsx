import React from 'react'

const CardDesign = ({ id, imgUrl, title, desc, index, active, handleClick }) => (
    <div
        className={`relative ${active === id ? 'xl:flex-[3.5] flex-[10]' : 'xl:flex-[0.5] flex-[2]'
            } flex items-center justify-center min-w-[200px] h-[500px] bg-white shadow-2xl rounded-2xl border-2 border-white dark:border-black dark:bg-black transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
        onClick={() => handleClick(id)}>
        {active !== id ? (
            <div className='flex flex-col gap-y-3 items-center'>
                <img
                    src={imgUrl}
                    alt="image"
                    className=" w-full h-full"
                />
                <h3 className="font-bold text-center sm:text-[20px] text-[16px] text-black dark:text-white">
                    {title}
                </h3>
            </div>
        ) : (
            <div className="p-8 flex gap-y-3 justify-center items-center w-full flex-col">
                <h2 className="mt-[24px] font-bold sm:text-[24px] text-[20px] text-black dark:text-white">
                    {title}
                </h2>
                <span className='font-semibold text-justify text-black dark:text-white'>
                    {desc}
                </span>
            </div>
        )}
    </div>
);

export default CardDesign;