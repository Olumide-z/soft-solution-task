import React from 'react'
import ProfileInfoLayout from './ProfileInfoLayout'
import { interestData } from '@/constants/data'

const Interests = () => {
  return (
    <>
        <ProfileInfoLayout title='My Interests' data={interestData} />
    </>
  )
}

export default Interests