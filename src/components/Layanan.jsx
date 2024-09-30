import React from 'react'
import { Link } from 'react-router-dom'

const Layanan = () => {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-2 gap-3 mt-5'>
      <Link to="/" className='flex flex-col gap-2 justify-center items-center w-[200px] p-7 bg-blue-500 h-[100px]'>
      <img className='w-[40px] h-[40px]' src="https://ptsp.pa-sumber.go.id/assets/images/livechat.png?1" />
      <h1 className='text-white'>Online Chat</h1>
      </Link>
      <Link to="/syarat" className='flex flex-col gap-2 justify-center items-center w-[200px] p-7 bg-blue-500 h-[100px]'>
      <img className='w-[40px] h-[40px]' src="https://ptsp.pa-sumber.go.id/assets/images/persyaratan.png?1" />
      <h1 className='text-white'>Syarat Berperkara</h1>
      </Link>
      <Link to="/" className='flex flex-col gap-2 justify-center items-center w-[200px] p-7 bg-blue-500 h-[100px]'>
      <img className='w-[40px] h-[40px]' src="https://ptsp.pa-sumber.go.id/assets/images/gugatanmandiri.png?1" />
      <h1 className='text-white'>Gugatan Mandiri</h1>
      </Link>
      <Link to="/panjar" className='flex flex-col gap-2 justify-center items-center w-[200px] p-7 bg-blue-500 h-[100px]'>
      <img className='w-[40px] h-[40px]' src="https://ptsp.pa-sumber.go.id/assets/images/panjar.png?1" />
      <h1 className='text-white'>Panjar Biaya Perkara</h1>
      </Link>
      <Link to="/" className='flex flex-col gap-2 justify-center items-center w-[200px] p-7 bg-blue-500 h-[100px]'>
      <img className='w-[40px] h-[40px]' src="https://ptsp.pa-sumber.go.id/assets/images/cekakta.png?1" />
      <h1 className='text-white'>Cek Akta Cerai</h1>
      </Link>
      <Link to="/" className='flex flex-col gap-2 justify-center items-center w-[200px] p-7 bg-blue-500 h-[100px]'>
      <img className='w-[40px] h-[40px]' src="https://ptsp.pa-sumber.go.id/assets/images/validasiakta.png?1" />
      <h1 className='text-white'>Validasi Akta Cerai</h1>
      </Link>
    </div>
  )
}

export default Layanan