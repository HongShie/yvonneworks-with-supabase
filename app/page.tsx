"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import BlurFade from "@/components/magicui/BlurFade";

const images = [
  "https://xrlplewixmqroqijycns.supabase.co/storage/v1/object/public/img/art/Fuji_Dawn.jpg",
  "https://xrlplewixmqroqijycns.supabase.co/storage/v1/object/public/img/art/Summer_Breeze.jpg",
  "https://xrlplewixmqroqijycns.supabase.co/storage/v1/object/public/img/art/Wet_Bloom.jpg",
  "https://xrlplewixmqroqijycns.supabase.co/storage/v1/object/public/img/art/Withered_heart.jpg",
  "https://xrlplewixmqroqijycns.supabase.co/storage/v1/object/public/img/art/Jumbo_Mumbo.jpg",
  "https://xrlplewixmqroqijycns.supabase.co/storage/v1/object/public/img/art/Lying_Down.jpg",
  "https://xrlplewixmqroqijycns.supabase.co/storage/v1/object/public/img/art/Sunrise.jpg",
];
export default function Example() {
  return (
    <div className="relative overflow-hidden h-screen bg-white">
      <div className="pb-80 pt-16 sm:pb-40 h-screen sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              YvonneWorks
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
              if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <BlurFade>
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          alt=""
                          src={images[0]}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      </BlurFade>
                      <BlurFade delay={0.25}>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={images[1]}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      </BlurFade>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <BlurFade delay={0.50}>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={images[2]}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      </BlurFade>
                      <BlurFade delay={0.75}>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={images[3]}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      </BlurFade>
                      <BlurFade delay={1.00}>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={images[4]}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      </BlurFade>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <BlurFade delay={1.25}>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={images[5]}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      </BlurFade> 
                      <BlurFade delay={1.50}>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={images[6]}
                          className="h-full w-full object-cover object-center"
                        />
                      </div></BlurFade> 
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/art"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
