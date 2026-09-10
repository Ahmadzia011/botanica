import { QrCode } from "lucide-react";
import { LAMP_COLLECTION, COLLECTION_STATS } from "@/src/constants/storefront.constants";
import Link from "next/link";
export function ProductInfo() {
  return (
    <>
      <section className="bg-[#fffdfa] border-t border-[#e8e0d3]">
        <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-auto mb-16 space-y-5 max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 shadow-sm px-3 py-1 rounded-full text-xs font-semibold text-[#2B4C3F]">
              <QrCode size={12} />
              From field to cup
            </span>
            <h2 className="text-4xl font-semibold tracking-tight text-[#1E2B24] sm:text-5xl">
              A clearer cup begins with better plants.
            </h2>
            <p className="text-md text-gray-500 leading-relaxed">
              Thoughtful sourcing, whole ingredients, and blends that make the ordinary pause feel a little more considered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-4 text-md">
            {COLLECTION_STATS.map((item) => (
              <div
                key={item.label}
                className="border-t border-gray-200 p-6"
              >
                <p className="text-[10px] uppercase tracking-[0.24em] text-gray-400 font-bold">
                  {item.label}
                </p>
                <p className="text-2xl font-bold text-[#1E2B24] mt-3">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

     
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {LAMP_COLLECTION.map((product) => <article key={product.name} className="group rounded-[1.25rem] overflow-hidden bg-[#fffdfa] border border-[#e7dfd2] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(25,57,43,.08)]"><div className="relative aspect-[5/4] overflow-hidden bg-[#f3eee4]"><img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"/><span className="absolute top-4 left-4 px-3 py-1.5 bg-[#fffdfa]/90 rounded-full text-[10px] uppercase tracking-[.18em] font-medium text-[#173b2c]">{product.subtitle}</span></div><div className="p-6"><div className="flex justify-between gap-4"><h3 className="font-serif text-2xl text-[#173b2c]">{product.name}</h3><p className="font-serif text-lg text-[#173b2c]">{product.price}</p></div><p className="text-sm leading-relaxed text-[#68746a] mt-3">{product.description}</p><Link href="/shop" className="inline-block text-sm font-medium text-[#173b2c] mt-6 hover:text-[#a26939]">Discover blend →</Link></div></article>)}
          </div>
        </div>
      </section>
    </>
  );
}
