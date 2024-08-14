'use client';
import ProductOverview from '@/components/tailwind/productOverview';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default async function Example() {
  const searchParams = useSearchParams();
  return (
    <Suspense>
      <ProductOverview artName={searchParams.get("name")} artPrice={searchParams.get("price")} artLink={searchParams.get("artlink")} artpv1={searchParams.get("artpv1")} artpv2={searchParams.get("artpv2")} artpv3={searchParams.get("artpv3")}></ProductOverview>
    </Suspense>
  )
}