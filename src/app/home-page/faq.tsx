"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { STORE_FAQS } from "@/src/constants/storefront.constants";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();
  return <section className="bg-[#fffdfa] py-24 sm:py-32"><div className="max-w-4xl mx-auto px-5 sm:px-8"><div className="max-w-xl mb-14"><p className="text-[11px] uppercase tracking-[.28em] text-[#a26939] font-medium mb-5">A little help</p><h2 className="font-serif text-5xl sm:text-6xl text-[#173b2c] leading-[.95]">The useful details, <em className="font-normal">simply put.</em></h2></div><div className="border-t border-[#ddd3c4]">{STORE_FAQS.map((item, index) => { const isOpen = openIndex === index; return <div key={item.question} className="border-b border-[#ddd3c4]"><button type="button" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} className="w-full flex items-center justify-between gap-6 py-6 text-left text-[#173b2c]"><span className="font-serif text-xl sm:text-2xl">{item.question}</span><motion.span animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? "#173b2c" : "rgba(0,0,0,0)" }} transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }} className={`h-8 w-8 rounded-full border border-[#d8c9b5] flex items-center justify-center shrink-0 ${isOpen ? "text-[#e6c98f] border-[#173b2c]" : "text-[#a26939]"}`}><Plus size={16}/></motion.span></button><AnimatePresence initial={false}>{isOpen && <motion.div key="answer" initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden"><p className="max-w-2xl pb-7 pr-12 text-[#68746a] leading-relaxed">{item.answer}</p></motion.div>}</AnimatePresence></div>; })}</div></div></section>;
}
