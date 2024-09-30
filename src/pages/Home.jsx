import React from 'react'
import Slider from '../components/Slider'
import TextHeader from '../components/TextHeader'
import Layanan from '../components/Layanan'
import VideoCard from '../components/VideoCard'

const Home = () => {
  return (
    <div className='p-5 container mx-auto  max-w-3xl flex flex-col justify-center items-center w-[100%]'>
        <Slider />
        <TextHeader text1="Layanan PTSP Online" text2="Layanan Online yang kami sediakan antara lain:" />
        <Layanan />
        <TextHeader text1="Video Informasi" text2="Informasi seputar Pengadilan Agama melalui video"/>
        <VideoCard />
    </div>
  )
}

export default Home