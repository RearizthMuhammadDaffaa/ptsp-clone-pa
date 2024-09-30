import React from 'react'

const Layout = ({children,title}) => {
  return (
    <div className='p-3 container mx-auto  lg:max-w-3xl w-[95%] lg:w-[100%]  bg-white mt-4 shadow-lg rounded-lg'>
      <div className='border-b-2 border-b-black p-5 w-full'>
        
      <h1 className='text-left '>{title}</h1>
        </div> 
       
      
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout