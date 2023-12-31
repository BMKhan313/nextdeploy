"use client"
import React,{Suspense,lazy,useState} from "react"

const Header  =  lazy(()=>import('src/components/Header.js'))
const SideBar =  lazy(()=>import('src/components/SideBar.js'))

import './globals.css'
import { Providers } from '@/redux/provider'
import { store } from "@/redux/store"
import { useRouter, usePathname } from "next/navigation"
// import { useSelector } from "react-redux"
export const metadata = {
  title: 'Botnostic Credential Manager',
  description: 'Generated by Botnostic credential Manager',
}

export default function RootLayout({ children}) {

 
  return (
    <html lang="en">
    <body className="bg-[#EFEFEF] font-poppins flex overflow-y-hidden" >
       <div className='flex overflow-hidden w-full'>
        <Providers store={store}>
          <div className='flex flex-col  overflow-y-auto w-[100%]'>
          {children}
          </div>
          </Providers>
       </div>
      </body>
    </html>
  )
}
