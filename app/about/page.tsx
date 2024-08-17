'use client'

import Link from 'next/link'
import Image from 'next/image'
import profilePic from '@/img/IMG_0837.jpg'
import logo from '@/img/yvonnes-art-website-favicon-color.png'
import BlurFade from '@/components/magicui/BlurFade'
import Header from '@/components/header'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Art', href: '/art' },
  { name: 'About', href: '/about' },
  // { name: 'Profile', href: '#' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  let googlemap: string = "https://goo.gl/maps/5YX1yYJpHrX1k3yZ6";

  return (
    <div className="bg-neutral-100">
      <Header></Header>
      <div className="relative isolate px-6 pt-24 pb-24 lg:px-20">
        <div className='bg-neutral-100'>
          <div className="grid grid-cols-12 gap-8 mb-8">
          <BlurFade className='col-span-4 h-96'>
            <div className=' bg-white p-6 rounded-3xl h-full shadow-lg'>
              <div className='h-1/2'>
              <Image
              src={profilePic}
              alt='Profile Picture'
              className='rounded-2xl h-full object-cover'
              />
              </div>
              <div className='h-1/2'>
                <p className='text-4xl font-semibold mt-6'>Yvoone Ong</p>
                <span className="mt-4 me-4 inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-100">Artist</span>
                <span className="mt-4 me-4 inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-sm font-medium text-yellow-700 ring-1 ring-inset ring-yellow-100">Minature Sculptor</span>
                <span className="mt-4 me-4 inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-100">Part Time Art Teacher</span>
                <span className="mt-4 inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-100">Based in Malaysia</span>
              </div>
            </div>
            </BlurFade>
            <BlurFade className='col-span-8 h-96' delay={0.1}>
            <div className='bg-rose-300 p-6 rounded-3xl h-full shadow-lg'>
              <p className='text-4xl font-semibold text-white leading-snug tracking-wide'>
                As a product designer, I specialize in creating magical visual identities for digital products. 
                I believe that a stunning design starts with common values, open communication, and respect for your audience.
              </p>
            </div>
            </BlurFade>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <BlurFade className='col-span-8 h-96' delay={0.2}>
            <div className='grid grid-cols-12 bg-violet-300 text-white p-6 rounded-3xl h-full shadow-lg'>
              <div className='col-span-5 grid justify-start place-items-center'>
                <p className='text-4xl font-semibold leading-snug whitespace-break-space'>Want to be a<br/>an ARTIST? <br/><br/> I'll teach <br/>🤩</p>
              </div>
              <div className='col-span-7'>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.2259521122884!2d101.44207866956073!3d3.0868936998055547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc53aeb6f499a7%3A0x49d810ba90157fa7!2zQXJ0cm9wb2xpcyDnlavlrrY!5e1!3m2!1sen!2smy!4v1709086019220!5m2!1sen!2smy"
                  width="100%" 
                  height="100%" 
                  className="rounded-2xl" 
                  title="map" 
                  loading="lazy">
                </iframe>
              </div>
            </div>
            </BlurFade>
            <BlurFade className='col-span-4 h-96' delay={0.3}>
            <div className='bg-white p-6 rounded-3xl h-full shadow-lg'>
              <div className='h-1/3 text-5xl flex justify-center items-center'>
                <span>✌🏻</span><span>💡</span><span>✨</span>
              </div>
              <div className='h-1/3'>
              <p className='text-4xl font-semibold text-center'>
                Have an<br/>
                custom-made<br/>
                in mind?</p>
              </div>
              <div className='h-1/3 flex justify-center items-center'>
                <span className="mt-4 me-4 inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-100">Whatsapp</span>
                <span className="mt-4 me-4 inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-100">Facebook</span>
                <span className="mt-4 inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-100">Pinterest</span>
              </div>
            </div>
            </BlurFade>
          </div>          
        </div>
      </div>
    </div>
  )
}