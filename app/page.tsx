import Header from "@/components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <div className="flex flex-1">
        <Sidebar />
        <main className="w-full">
          <Header />
          <div className="grid grid-cols-3 w-full divide-x divide-gray-200">
            <div className="col-span-1 px-6 py-4 flex flex-col gap-4">

              <div className="flex flex-col gap-0">
                <h1 className="text-2xl font-medium">Stocks</h1>
                <p className="text-gray-500 text-sm font-normal"><Link href={"/"} className="font-medium text-[#83B200]">{"3"} items</Link> are operating.</p>
              </div>


              <div className="relative">
                <div className="relative border border-gray-600/15 z-10 w-full px-6 py-4 rounded-2xl bg-transparent backdrop-blur-3xl flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl text-[#18230F] font-medium">Overview</h2>
                    {/* <TbArrowUpRight className="size-7 text-gray-500" /> */}
                  </div>
                  <div className="flex flex-col gap-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500 font-normal">Active SKUs</p>
                      <p className="text-sm text-[#18230F] font-medium">250</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500 font-normal">Capacity utilized</p>
                      <p className="text-sm text-[#18230F] font-medium">75%</p>
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <p className="text-3xl text-[#18230F] font-medium"><span className="text-[#83B200]">+</span>12.34<sup className="text-gray-500 text-lg">%</sup></p>
                    <div className="flex flex-col items-end gap-0">
                      <p className="text-sm font-normal text-gray-500">Last updated</p>
                      <p className="text-sm font-medium text-[#18230F]">Today, 06:48 AM</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0">
                  <div className="bg-[#FFFADC] absolute size-1/6 top-0 left-2 rounded-full"></div>
                  <div className="bg-[#B6F500] absolute size-2/6 bottom-0 right-2 rounded-full"></div>
                </div>
              </div>


              <div className="relative border border-gray-600/15 z-10 w-full px-6 py-4 rounded-2xl bg-transparent backdrop-blur-3xl flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl text-[#18230F] font-medium">Latest stocks</h2>
                  {/* <TbArrowUpRight className="size-7 text-gray-500" /> */}
                </div>
                <div className="flex flex-col gap-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500 font-normal">Total stock</p>
                    <p className="text-sm text-[#18230F] font-medium">10000 units</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500 font-normal">Low stock</p>
                    <p className="text-sm text-[#18230F] font-medium">5 items</p>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-3xl text-[#18230F] font-medium"><span className="text-[#83B200]">+</span>12.34<sup className="text-gray-500 text-lg">%</sup></p>
                  <div className="flex flex-col items-end gap-0">
                    <p className="text-sm font-normal text-gray-500">Last updated</p>
                    <p className="text-sm font-medium text-[#18230F]">Today, 06:48 AM</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-span-2">

            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
