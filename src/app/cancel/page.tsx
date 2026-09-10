import Link from "next/link";
import { ArrowLeft, Leaf } from "lucide-react";
import NavBar from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";

export default function Cancel() {
  return <><NavBar/><main className="min-h-screen bg-[#f4f0e8] pt-40 pb-24 flex items-center"><div className="max-w-xl mx-auto px-5 sm:px-8 text-center"><span className="mx-auto h-14 w-14 rounded-full border border-[#d6c8b4] text-[#a26939] flex items-center justify-center"><Leaf size={23}/></span><p className="mt-8 text-[11px] uppercase tracking-[.26em] font-medium text-[#a26939]">Checkout paused</p><h1 className="mt-5 font-serif text-5xl sm:text-6xl leading-[.95] text-[#173b2c]">No rush. Your ritual can wait.</h1><p className="mt-6 text-[#68746a] leading-relaxed">Your order was not placed and nothing has been charged. Take another look whenever the moment feels right.</p><div className="mt-10 flex flex-col sm:flex-row justify-center gap-3"><Link href="/shop" className="inline-flex justify-center items-center gap-2 rounded-full bg-[#173b2c] px-6 py-3.5 text-sm text-[#fffaf0] hover:bg-[#295443] transition-colors">Return to the collection</Link><Link href="/" className="inline-flex justify-center items-center gap-2 rounded-full border border-[#d6c8b4] px-6 py-3.5 text-sm text-[#173b2c] hover:bg-[#fffdfa] transition-colors"><ArrowLeft size={15}/> Back home</Link></div></div></main><Footer/></>;
}
