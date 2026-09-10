import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import NavBar from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";

export default function Success() {
  return <><NavBar/><main className="min-h-screen bg-[#f4f0e8] pt-40 pb-24 flex items-center"><div className="max-w-xl mx-auto px-5 sm:px-8 text-center"><span className="mx-auto h-14 w-14 rounded-full bg-[#173b2c] text-[#e6c98f] flex items-center justify-center"><Check size={24}/></span><p className="mt-8 text-[11px] uppercase tracking-[.26em] font-medium text-[#a26939]">Order confirmed</p><h1 className="mt-5 font-serif text-5xl sm:text-6xl leading-[.95] text-[#173b2c]">A little pause is on its way.</h1><p className="mt-6 text-[#68746a] leading-relaxed">Thank you for choosing Botanica. We&apos;ll carefully pack your order and send delivery details to your email within 48 hours.</p><div className="mt-10 flex flex-col sm:flex-row justify-center gap-3"><Link href="/shop" className="inline-flex justify-center items-center gap-2 rounded-full bg-[#173b2c] px-6 py-3.5 text-sm text-[#fffaf0] hover:bg-[#295443] transition-colors">Continue exploring <ArrowRight size={15}/></Link><Link href="/" className="inline-flex justify-center items-center rounded-full border border-[#d6c8b4] px-6 py-3.5 text-sm text-[#173b2c] hover:bg-[#fffdfa] transition-colors">Back home</Link></div></div></main><Footer/></>;
}
