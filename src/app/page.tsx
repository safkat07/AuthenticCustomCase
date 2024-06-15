/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-100 h-fit">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          {/* 1st div */}
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img className="w-full" src="/snake-1.png" alt="" />
              </div>

              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-4xl md:text-5xl lg:text-7xl">Your Image on a <span className="bg-green-600 text-white ">Custom</span> Phone Case</h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favourite memories with your own, <span className="font-semibold">
                  one-of-one
                </span> Phone Case. AuthenticCase allows you to protect your memories, not just your phone case.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left ">
                    <Check className="size-5 shrink-0 text-green-600" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left ">
                    <Check className="size-5 shrink-0 text-green-600" />
                    5 year print gaureenty
                  </li>
                  <li className="flex gap-1.5 items-center text-left ">
                    <Check className="size-5 shrink-0 text-green-600" />
                    Modern iPhones model supported
                  </li>
                </div>
              </ul>


              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img className="inline-block size-10 rounded-full right-2 ring-slate-100" src="/users/user-1.png" alt="" />
                  <img className="inline-block size-10 rounded-full right-2 ring-slate-100" src="/users/user-2.png" alt="" />
                  <img className="inline-block size-10 rounded-full right-2 ring-slate-100" src="/users/user-3.png" alt="" />
                  <img className="inline-block size-10 object-cover rounded-full right-2 ring-slate-100" src="/users/user-5.jpg" alt="" />
                  <img className="inline-block size-10 rounded-full right-2 ring-slate-100" src="/users/user-4.jpg" alt="" />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="size-5 text-green-600 fill-green-600" />
                    <Star className="size-5 text-green-600 fill-green-600" />
                    <Star className="size-5 text-green-600 fill-green-600" />
                    <Star className="size-5 text-green-600 fill-green-600" />
                    <Star className="size-5 text-green-600 fill-green-600" />
                  </div>
                  <p><span className="font-semibold">1,250</span> happy customers</p>
                </div>
              </div>
            </div>
          </div>

          {/* banner image div */}
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl ">
              <img src="/your-image.png" className="absolute w-40 lg:m-52 left-10 -top-72 select-none hidden sm:block lg:hidden xl:block" alt="" />
              <img src="/line.png" className="absolute w-20 -left-6 -bottom-6 select-none" alt="" />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
