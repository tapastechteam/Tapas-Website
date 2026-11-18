'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Loader from './Loader';
import Navbar from './Navbar';
import Footer from './Footer';
export default function SiteLayout({children}:{children:React.ReactNode}) {
  const [loadingComplete,setLoadingComplete]=useState(false);
  const path=usePathname();
  const standalone=path.startsWith('/team')||path.startsWith('/events')||path.startsWith('/gallery');
  return <div className="blue-source font-body bg-tapas-bg text-tapas-text antialiased min-h-screen flex flex-col">
    {!loadingComplete && <Loader onFinish={()=>setLoadingComplete(true)} />}
    <Navbar />
    {standalone ? children : <main className="flex-1">{children}</main>}
    <Footer />
  </div>;
}
