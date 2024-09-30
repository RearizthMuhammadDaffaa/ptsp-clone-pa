import React from 'react'

const Header = () => {
  return (
    <header className='bg-white shadow-xl h-14 flex p-3'>
       <div className="lg:container lg:mx-auto lg:px-4  flex items-center p-2 gap-2 lg:mx-10 max-w-2xl">
       <h1 className=' text-2xl font-semibold '>PTSP Online</h1>
       <h2 className='text-l text-center'>Pengadilan Agama Sumedang</h2>
       </div>
    </header>
  )
}

export default Header