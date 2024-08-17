'use client';
import ProductOverview from '@/components/tailwind/productOverview';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';

function Search(){
  const [searchParams, setSearchParams] = useState(useSearchParams());
  const artName = searchParams.get("name") ?? "";
  const artPrice = searchParams.get("price") ?? "";
  const artLink = searchParams.get("artlink") ?? "";
  const artpv1 = searchParams.get("artpv1") ?? "";
  const artpv2 = searchParams.get("artpv2") ?? "";
  const artpv3 = searchParams.get("artpv3") ?? "";
  return (<ProductOverview artName={artName} artPrice={artPrice} artLink={artLink} artpv1={artpv1} artpv2={artpv2} artpv3={artpv3}></ProductOverview>
  );
}


export default async function Example() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Search/>
      <SpeedInsights/>
    </Suspense>
  )
}
