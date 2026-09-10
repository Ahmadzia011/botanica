import { Zap, ShoppingBag, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

export function CallToAction() {
  return <>

  {/* 4. HIGH-CONVERSION MID-FUNNEL MILESTONE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1f3d30] rounded-[32px] p-8 sm:p-16 text-white text-center relative overflow-hidden shadow-xl border border-[#2B4C3F]">
            {/* Subtle Grid Design overlay */}
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-0"
              style={{
                maskImage:
                  "radial-gradient(ellipse at center, black 50%, transparent 90%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 50%, transparent 90%)",
              }}
            ></div>

            {/* Ambient Background Flare */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#93C572]/10 rounded-full filter blur-[100px] pointer-events-none z-0 animate-pulse"
              style={{ animationDuration: "6s" }}
            ></div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase text-[#93C572] shadow-sm mx-auto">
                <Zap size={12} fill="#93C572" className="animate-bounce" />
                <span>Make room for ritual</span>
              </div>

              <h2 className="italic font-serif text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2] text-white">
                Ready to steep a slower day?
              </h2>

              <p className="sm:text-base text-gray-300 max-w-lg mx-auto leading-relaxed">
                Bring a little more presence to the hours between doing, making,
                and coming back to yourself.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#93C572] hover:bg-[#82b462] text-[#1E2B24] px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer group">
                  <ShoppingBag size={16} />
                  <Link href='/shop'>Explore Our Shop</Link>
                  <ArrowRight
                    size={14}
                    className="transform group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all backdrop-blur-sm cursor-pointer">
                  <MessageSquare size={16} className="opacity-80" />
                        <Link href='/contact-us'>Contact Us</Link>

                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  
  </>;
}
