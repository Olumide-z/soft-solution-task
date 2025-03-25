import React from 'react'

const Filter = () => {
  return (
    <div>
        <button className='border border-[#2c2c2c] px-4 h-[33px] flex rounded-[50px] items-center gap-2'>
            <img src='/images/Filter.svg' alt='filter icon' className='w-[15px] h-[15px]'/>
            <span className='text-sm'>Filter</span>
        </button>
    </div>
  )
}

export default Filter