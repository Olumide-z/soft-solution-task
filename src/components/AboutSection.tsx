import React from 'react'
import AboutList from './AboutList'
import { useProfileStore } from '@/store/profileStore';

const AboutSection = () => {
    const { profile } = useProfileStore();

  return (
    <div className="mt-6 border border-[var(--color-grey)] overflow-auto rounded-[8px] bg-white h-fit md:h-[450px] w-full md:w-[350px] p-4">
        <p>About Me</p>

        <div className='flex items-center w-full sm:w-[70%] md:w-[90%] justify-between text-sm pt-6 pb-4'>
            <AboutList image='/images/gender.png' text='Gender'/>
            <p className='font-[600]'>{profile.gender}</p>
        </div>
        <div className='flex items-center w-full sm:w-[70%] md:w-[90%] justify-between text-sm pb-4'>
            <AboutList image='/images/age.png' text='Age'/>
            <p className='font-[600]'>{profile.age}</p>
        </div>
        <div className='flex items-center w-full sm:w-[70%] md:w-[90%] justify-between text-sm pb-4'>
            <AboutList image='/images/occupation.png' text='Occupation'/>
            <p className='font-[600]'>{profile.occupation}</p>
        </div>
        <div className='flex items-center w-full sm:w-[70%] md:w-[90%] justify-between text-sm pb-4'>
            <AboutList image='/images/relationship.png' text='Relationship'/>
            <p className='font-[600]'>{profile.relationship}</p>
        </div>
        <div className='flex items-center w-full sm:w-[70%] md:w-[90%] justify-between text-sm pb-4'>
            <AboutList image='/images/location.png' text='Location'/>
            <p className='font-[600]'>{profile.location}</p>
        </div>
        <div className='flex items-center w-full sm:w-[70%] md:w-[90%] justify-between text-sm pb-4'>
            <AboutList image='/images/height.png' text='Height Range'/>
            <p className='font-[600]'>{profile.height}</p>
        </div>
        <div className='flex items-center w-full sm:w-[70%] md:w-[90%] justify-between text-sm pb-4'>
            <AboutList image='/images/weight.png' text='Weight Range'/>
            <p className='font-[600]'>{profile.weight}</p>
        </div>
        <div className='flex items-center w-full sm:w-[70%] md:w-[90%] justify-between text-sm pb-4'>
            <AboutList image='/images/religion.png' text='Religion'/>
            <p className='font-[600]'>{profile.religion}</p>
        </div>
        <div className='flex items-center w-full sm:w-[70%] md:w-[90%] justify-between text-sm pb-4'>
            <AboutList image='/images/nationalty.png' text='Nationality'/>
            <p className='font-[600]'>{profile.nationality}</p>
        </div>
    </div>
  )
}

export default AboutSection