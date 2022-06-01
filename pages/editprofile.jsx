import React from 'react'
import EditProfile from '../components/userdashboard/home/EditProfile'

function Editprofile() {
  return (
    <div className='grid lg:my-12 sticky top-0 lg:h-[calc(100vh-7rem)] grid-cols-1 md:grid-cols-2 space-x-4'>
        <div className='col-span-1 bg-red-400'></div>
        <EditProfile />
    </div>
  )
}

export default Editprofile