import { MousePointer2, Zap } from "lucide-react"
import Link from "next/link"

export function HeroSection(){
 return(
<>
    {/* 1. HERO SECTION & TRUST STRIP */}
      <section className="min-h-screen bg-[#FAF9F5] relative pt-[20vh] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          {/* --- FLOATING USER AVATARS WITH DIRECTIONAL ARROWS --- */}
          {/* Top Left User */}
          <div className="hero-avatar hero-avatar-one hidden lg:block absolute left-10 top-12 group z-20">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-orange-200 border-2 border-white shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/botanica/hero-man-01.png"
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <MousePointer2
                className="transform rotate-[150deg] absolute top-10 left-12 text-[#2B4C3F]"
                fill="#2B4C3F"
                size={18}
              />
            </div>
          </div>

          {/* Top Right User */}
          <div className="hero-avatar hero-avatar-two hidden lg:block absolute right-10 top-8 group z-20">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-blue-200 border-2 border-white shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/botanica/hero-man-02.png"
                  alt="User Profile"
                  className="w-full h-full object-cover object-left"
                />
              </div>
              <MousePointer2
                className="transform rotate-[280deg] absolute right-14 top-8 text-[#2B4C3F]"
                fill="#2B4C3F"
                size={18}
              />
            </div>
          </div>

          {/* Bottom Left User */}
          <div className="hero-avatar hero-avatar-three hidden lg:block absolute left-24 bottom-48 group z-20">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-emerald-200 border-2 border-white shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/botanica/hero-man-03.png"
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <MousePointer2
                className="transform rotate-[100deg] absolute bottom-10 left-12 text-[#2B4C3F]"
                fill="#2B4C3F"
                size={18}
              />
            </div>
          </div>

          {/* Bottom Right User */}
          <div className="hero-avatar hero-avatar-four hidden lg:block absolute right-10 bottom-10 group z-20">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-yellow-200 border-2 border-white shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/botanica/hero-man-04.png"
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <MousePointer2
                className="transform rotate-[10deg] absolute bottom-10 right-10 text-[#2B4C3F]"
                fill="#2B4C3F"
                size={18}
              />
            </div>
          </div>

          {/* --- CENTRAL HERO CONTENT Wrapper --- */}
          <div className="relative z-10 max-w-3xl mx-auto py-12 px-4 rounded-3xl w-full text-center">
            {/* Blueprint Grid Accent */}
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,#e1dfd7_1px,transparent_1px),linear-gradient(to_bottom,#e1dfd7_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none z-0"
              style={{
                maskImage:
                  "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              }}
            ></div>

            <div className="relative z-10 space-y-7">
              <div className="inline-flex items-center gap-2 bg-white shadow-sm border border-gray-200/60 px-3 py-1 rounded-full text-xs font-semibold text-[#2B4C3F]">
                <Zap size={14} fill="#2B4C3F" />
                <span>Whole-plant rituals</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#1E2B24] leading-[1.15]">
                A slower way to{" "}
                <span className="underline decoration-[#93C572] decoration-4 underline-offset-4">
                  steep
                </span>
                 <span className="italic font-serif text-[#2B4C3F] font-normal tracking-normal pr-2"> your daily pause</span>.

              </h1>
              <p className="text-md sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
                Whole leaves, roots, and flowers blended for the moments when you
                want the day to feel a little more grounded.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <Link href="/shop" className="bg-[#1F3D30] hover:bg-[#152a21] text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer">
                  Explore Our Shop
                </Link> 
                <Link href="/contact-us" className="bg-white border border-gray-200 hover:bg-gray-50 text-[#1E2B24] px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-sm cursor-pointer">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 border-y border-[#d9d2c5] bg-[#fffdfa]/75 backdrop-blur-sm overflow-hidden py-4">
          <div className="hero-marquee whitespace-nowrap flex w-max items-center gap-9 text-[10px] uppercase tracking-[.28em] text-[#52685a]">
            {Array.from({ length: 2 }).map((_, index) => <div key={index} className="flex items-center gap-9"><span>Whole-plant infusions</span><i className="h-1.5 w-1.5 rounded-full bg-[#a26939]"/><span>Blended in small batches</span><i className="h-1.5 w-1.5 rounded-full bg-[#a26939]"/><span>For your daily pause</span><i className="h-1.5 w-1.5 rounded-full bg-[#a26939]"/><span>Botanica studio</span><i className="h-1.5 w-1.5 rounded-full bg-[#a26939]"/></div>)}
          </div>
        </div>
      </section>
</>
 )   
}
