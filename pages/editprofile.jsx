import React from 'react'
import EditProfile from '../components/userdashboard/home/EditProfile'
import UserDetails from '../components/userdashboard/home/UserDetails'

function Editprofile() {
  return (
    <div className='grid lg:my-12 sticky top-0 lg:h-[calc(100vh-12rem)] grid-cols-1 lg:grid-cols-2 space-x-4'>
        <div className='col-span-1'>
          <UserDetails />
        </div>
        <EditProfile />
    </div>
  )
}

export default Editprofile