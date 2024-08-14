'use client'

import Link from 'next/link'
import Image from 'next/image'
import profilePic from '@/img/IMG_0837.jpg'
import logo from '@/img/yvonnes-art-website-favicon-color.png'
import BlurFade from '@/components/magicui/BlurFade'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Art', href: '/art' },
  { name: 'About', href: '/about' },
  { name: 'Profile', href: '#' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-neutral-100">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.0">
              <span className="sr-only">Your Company</span>
              <img alt="logo" src={logo.src} className="h-12 w-auto"/>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto"/>
              </a>
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-24 pb-24 lg:px-20">
        <div className='bg-neutral-100'>
          <BlurFade delay={0.25}>
          <div className="grid grid-cols-12 gap-8 mb-8">
            <div className='col-span-4 bg-white p-6 rounded-3xl h-96 shadow-lg'>
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
            <div className='col-span-8 bg-rose-300 p-6 rounded-3xl h-96 shadow-lg'>
              <p className='text-4xl font-semibold text-white leading-snug tracking-wide'>
                As a product designer, I specialize in creating magical visual identities for digital products. 
                I believe that a stunning design starts with common values, open communication, and respect for your audience.
              </p>
            </div>
          </div>
          </BlurFade>

          <BlurFade delay={0.50}>
          <div className="grid grid-cols-12 gap-8">
            <div className='col-span-8 grid grid-cols-12 bg-violet-300 text-white p-6 rounded-3xl h-96 shadow-lg'>
              <div className='col-span-5 grid justify-start place-items-center'>
                <p className='text-4xl font-semibold leading-snug whitespace-break-space'>Want to be a<br/>an ARTIST? <br/><br/> I'll teach <br/>🤩</p>
              </div>
              <div className='col-span-7'>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.2259521122884!2d101.44207866956073!3d3.0868936998055547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc53aeb6f499a7%3A0x49d810ba90157fa7!2zQXJ0cm9wb2xpcyDnlavlrrY!5e1!3m2!1sen!2smy!4v1709086019220!5m2!1sen!2smy" width="100%" height="100%" className="rounded-2xl" title="map" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
            <div className='col-span-4 bg-white p-6 rounded-3xl h-96 shadow-lg'>
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
          </div>
          </BlurFade>
          
        </div>
      </div>
    </div>
  )
}