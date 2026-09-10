import { Quote } from "lucide-react";
import { STORE_REVIEWS } from "@/src/constants/storefront.constants";

export function Testimonial(){
    return(
        <>
        <section className="pt-24 pb-28 bg-[#FAF9F5] border-t border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#2B4C3F] bg-white border border-gray-100 shadow-sm px-3 py-1 rounded-full">
                <Quote size={12} />
                Customer notes
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E2B24]">
                The kind of ritual people miss when it is gone.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STORE_REVIEWS.map((review) => (
                <article
                  key={review.name}
                  className="border-t border-gray-200 pt-6"
                >
                  <div className="flex items-center gap-1 text-[#93C572] mb-5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>
                  <p className="text-base leading-relaxed text-[#1E2B24] italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="w-11 h-11 rounded-full bg-[#173b2c] text-[#e5c78f] font-serif text-lg flex items-center justify-center">
                      {review.name.charAt(0)}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#1E2B24]">
                        {review.name}
                      </h4>
                      <p className="text-xs text-gray-400">{review.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        </>
    )
}
