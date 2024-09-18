import Link from 'next/link'
import Header from '../../components/header';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { createClient } from '@/utils/supabase/server';
import BlurFade from '@/components/magicui/BlurFade';

async function commission() {
  const supabase = createClient();
    const { data: commission, error } = await supabase
    .from("commission")
    .select("*")
    .order("id", { ascending: true });;
    return commission;
}

export default async function Home() {
  const jsonData = await commission();
  console.log(jsonData?.length)

  return (
    <div className="bg-neutral-100 h-screen">
      <Header />
      <div className="relative isolate px-6 pt-24 pb-24 lg:px-20">
        <div className='bg-neutral-100'>
          <div className="">
            <ul className='grid grid-cols-3 gap-4'>
              {jsonData?.map((commission, idx) => (
                <BlurFade delay={0.25 + idx * 0.05} inView>
                  <div className="bg-white rounded-3xl px-4 py-4 shadow-lg lg:px-6 lg:py-6">
                    <li className='pb-4 text-xs font-normal lg:text-base' key={commission.commissioner}>{commission.commissioner}</li>
                    <li className='text-md text-nowrap pb-4 font-bold w-auto lg:text-3xl' key={commission.art_name}>{commission.art_name}</li>
                    <li className='text-md text-nowrap pb-4 font-normal w-auto lg:text-3xl' key={commission.status}>{commission.status}</li>
                  </div>
                </BlurFade>
                
              ))}
            </ul>
          </div>
        </div>
      </div>
      <SpeedInsights/>
    </div>
  )
}