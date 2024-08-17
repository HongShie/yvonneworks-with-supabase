import Link from 'next/link'
import Header from '../../components/header';

import { createClient } from '@/utils/supabase/server';
import BlurFade from '@/components/magicui/BlurFade';

async function artworks() {
  const supabase = createClient();
    const { data: artworks, error } = await supabase
    .from("artworks")
    .select("id, name, category, year, dimensions, price, artlink, artpv1, artpv2, artpv3")
    .order("id", { ascending: true });;
    return artworks;
}

export default async function Home() {
  const jsonData = await artworks();
  console.log(jsonData?.length)

  return (
    <div className="bg-neutral-100">
      <Header />
      <div className="relative isolate px-6 pt-24 pb-24 lg:px-20">
        <div className='bg-neutral-100'>
          <div className="">
            <ul className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
              {jsonData?.map((artwork, idx) => (
                <BlurFade delay={0.25 + idx * 0.05} inView>
                  <div className="bg-white rounded-3xl px-4 py-4 shadow-lg lg:px-6 lg:py-6">
                  <li className='pb-4 text-xs font-normal lg:text-base' key={artwork.category}>{artwork.category}</li>
                  <a href={"/art/art-overview?name=" + artwork.name + "&price=" + artwork.price + "&year=" + artwork.year + "&dimensions=" + artwork.dimensions + "&artlink=" + artwork.artlink + "&artpv1=" + artwork.artpv1 + "&artpv2=" + artwork.artpv2 + "&artpv3=" + artwork.artpv3}>
                    <li className='text-md text-nowrap pb-4 font-bold w-auto lg:text-3xl' key={artwork.name}>
                      {artwork.name}
                    </li>
                  </a>
                  <img className='object-cover object-center h-32 w-full rounded-2xl lg:h-64' src={artwork.artlink} alt='Image'/>
                  </div>
                </BlurFade>
                
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
