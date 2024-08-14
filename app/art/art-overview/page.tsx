'use client';
import ProductOverview from '@/components/tailwind/productOverview';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default async function Example() {
  const searchParams = useSearchParams();
  const artName =  searchParams.get("name");
  const artPrice = searchParams.get("price") ;
  const artLink =  searchParams.get("artlink");
  const artpv1 =   searchParams.get("artpv1") ;
  const artpv2 =   searchParams.get("artpv2") ;
  const artpv3 =   searchParams.get("artpv3") ;
  return (
    <Suspense>
      <ProductOverview artName={artName} artPrice={artPrice} artLink={artLink} artpv1={artpv1} artpv2={artpv2} artpv3={artpv3}></ProductOverview>
    </Suspense>
  )
}