import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='max-w-[1000px] mx-auto md:py-24 py-12'>
      <h1 className='md:text-5xl text-4xl font-bold Heading text-center pb-7'>About Moiz Blogs</h1>
      <p className='text-2xl text-center tracking-widest leading-10 mb-10'>Welcome to our Blog Haven a digital space where ideas come to life and knowledge finds a home.</p>

      <div className='w-full'>
      <Image src={"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='about image' height={2000} width={2000}/>
      </div>

      <div className='text-lg tracking-wide text-[#525151] py-10 leading-8'>
        <p className='my-10'>Our blog is your go-to destination for exploring diverse topics that inspire, inform, and engage. From the secrets to maintaining a healthy lifestyle in Health, to unlocking leadership skills in Management, from fostering your artistic spirit in Design & Creativity, to navigating the complexities of Relationships, weve got you covered.</p>

        <p className=''>Our mission is to empower our readers with well-researched, thought-provoking, and actionable content. Whether youre looking for tips to boost your productivity, creative hacks to enhance your design skills, or advice on building meaningful relationships, our blogs are here to guide you.</p>
      </div>
    </div>
  )
}

export default About