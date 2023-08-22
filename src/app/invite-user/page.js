import React from 'react'
import {Suspense,lazy} from 'react'

const InviteUser = lazy(()=>import('src/components/invite-user/page'))
import SideBar from '@/components/SideBar'
import Header from '@/components/Header'

const page = () => {
  return (
    <div className="bg-[#EFEFEF] font-poppins flex overflow-y-hidden">
    <div className='flex overflow-hidden w-full'>
          <SideBar />
          <div className='flex flex-col  overflow-y-auto w-[100%]'>
            <Header />
           <InviteUser />
           </div>
        </div>
        
     </div>
    
  )
}

export default page