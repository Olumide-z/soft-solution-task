import React from 'react'

interface AboutListProps {
    image: string,
    text: string
}
const AboutList = ({ image, text} : AboutListProps) => {
  return (
    <section className='flex items-center gap-3 text-sm'>
        <img src={image} alt={text} className='object-cover w-[20px] h-[20px] rounded-full'/>
        <p>{text} : </p>
    </section>
  )
}

export default AboutList