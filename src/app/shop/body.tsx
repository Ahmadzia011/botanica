"use client";

import { useState } from "react";
import { SignInButton, useUser } from "@clerk/nextjs";
import {
  ArrowRight,
  Package,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Truck,
} from "lucide-react";
import { Footer } from "@/src/components/Footer";
import { SHOP_COLLECTION } from "@/src/constants/storefront.constants";
import { getCheckOutUrl } from "../actions/fetchCheckOut.actions";

export function ShopBody() {
  const { isLoaded, isSignedIn } = useUser();
  const [checkingOut, setCheckingOut] = useState<string | null>(null);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const beginCheckout = async (name: string, price: string) => {
    setCheckingOut(name);
    setCheckoutError(null);
    try {
      const url = await getCheckOutUrl([{ name, price: Number(price.replace("$", "")), quantity: 1 }], "payment");
      window.location.assign(url);
    } catch {
      setCheckoutError("Checkout could not start. Please try again in a moment.");
      setCheckingOut(null);
    }
  };
  return (
    <>
      <div className="text-[#1E2B24] bg-[#FAF9F5] antialiased selection:bg-[#2B4C3F] selection:text-white min-h-screen pt-40 relative overflow-hidden flex flex-col justify-between">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-[#93C572]/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-24 flex-grow">
          <div className="relative border-b border-gray-200/60 pb-12 mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-6 max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-white shadow-sm border border-gray-200/60 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#2B4C3F]">
                  <Sparkles size={13} fill="#2B4C3F" className="text-[#2B4C3F]" />
                  <span>Botanical collection</span>
                </div>
                <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#1E2B24] leading-[1.05]">
                  Small rituals made for <br />
                  <span className="italic font-serif text-[#2B4C3F] font-normal tracking-normal pr-2">
                    unhurried hours
                  </span>
                  .
                </h1>
              </div>

              <div className="flex items-center gap-4 self-start md:self-end">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200/80 rounded-xl text-xs font-bold tracking-wide uppercase text-[#1E2B24] shadow-sm">
                  <SlidersHorizontal size={14} />
                  <span>Whole plant blends</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {SHOP_COLLECTION.map((product) => (
              <article
                key={product.name}
                className="group flex flex-col bg-[#fffdfa] border border-[#e7dfd2] rounded-[1.25rem] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(25,57,43,0.08)]"
              >
                <div>
                  <div className="w-full aspect-[5/4] relative overflow-hidden bg-[#f3eee4]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute top-4 left-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[#173b2c] bg-[#fffdfa]/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      {product.subtitle}
                    </div>
                  </div>

                  <div className="px-6 pt-6">
                  <h3 className="font-serif text-2xl text-[#173b2c] tracking-tight mb-2 group-hover:text-[#a26939] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#68746a] leading-relaxed">
                    {product.description}
                  </p>
                  </div>
                </div>

                <div className="mx-6 mt-6 py-5 border-t border-[#e8e0d4] flex items-center justify-between">
                  <span className="font-serif text-xl text-[#173b2c]">{product.price}</span>
                  {isLoaded && !isSignedIn ? <SignInButton><button className="inline-flex items-center gap-2 text-sm font-medium text-[#173b2c] hover:text-[#a26939] transition-colors">Sign in to order <ArrowRight size={17}/></button></SignInButton> : <button onClick={() => beginCheckout(product.name, product.price)} disabled={checkingOut !== null} className="inline-flex items-center gap-2 text-sm font-medium text-[#173b2c] hover:text-[#a26939] transition-colors disabled:opacity-50">{checkingOut === product.name ? "Opening checkout…" : "Order now"}<ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1"/></button>}
                </div>
              </article>
            ))}
          </div>
          {checkoutError && <p role="alert" className="mt-6 text-sm text-[#a26939]">{checkoutError}</p>}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              ["Free delivery", "On orders over $75"],
              ["Freshly packed", "Dispatched within 48 hours"],
              ["Whole ingredients", "Every botanical clearly listed"],
            ].map(([title, copy]) => (
              <div
                key={title}
                className="border-t border-gray-300 pt-5"
              >
                <div className="flex items-center gap-2 text-[#2B4C3F]">
                  {title === "Free delivery" ? (
                    <Truck size={16} />
                  ) : title === "Easy returns" ? (
                    <Package size={16} />
                  ) : (
                    <ShieldCheck size={16} />
                  )}
                  <h3 className="font-bold text-[#1E2B24]">{title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mt-3">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
