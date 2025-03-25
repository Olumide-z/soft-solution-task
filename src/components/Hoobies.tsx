import React from 'react'
import ProfileInfoLayout from './ProfileInfoLayout'
import { hobbiesData } from '@/constants/data'

const Hoobies = () => {
  return (
    <>
        <ProfileInfoLayout title='My Hobbies' data={hobbiesData} />
    </>
  )
}

export default Hoobies