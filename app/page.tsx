import Header from "@/components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { TbArrowUpRight, TbCurrencyDollar, TbMinus, TbPlus, TbSum } from "react-icons/tb";
import { BsStars } from "react-icons/bs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <div className="flex flex-1">
        <Sidebar />
        <main className="w-full">
          <Header />
          <div className="grid grid-cols-3 w-full divide-x divide-black/15">
            <div className="col-span-1 px-6 py-4 flex flex-col gap-4">

              <div className="flex flex-col gap-0">
                <h1 className="text-black text-2xl font-medium">Overview</h1>
                <p className="text-gray-500 text-base font-normal">Currently <Link href={"/"} className="text-[#0046FF] font-semibold hover:underline">{"3"} items</Link> are operating.</p>
              </div>

              <div className="relative">
                <div className="relative border border-black/15 z-10 w-full px-4 py-4 rounded-2xl bg-white/15 backdrop-blur-3xl flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl text-black font-medium">Total Stock</h2>
                    {/* <TbArrowUpRight className="size-7 text-[#0046FF]" /> */}
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-base text-gray-500 font-normal"><span className="text-black font-medium">10,000</span> units across <span className="text-black font-medium">5</span> warehouses</p>
                  </div>

                  <div className="flex flex-col gap-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500 font-normal">Low Stock Alerts</p>
                      <Link href={"/"} className="text-sm text-[#0046FF] font-semibold flex items-center gap-0 hover:underline"><TbArrowUpRight className="size-5 text-[#0046FF]" />5 items</Link>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500 font-normal">Stock Optimization</p>
                      <Link href={"/"} className="text-sm text-[#0046FF] font-semibold flex items-center gap-0 hover:underline"><BsStars className="size-4" /> 3 suggestions</Link>
                    </div>
                  </div>

                  <div className="flex flex-col gap-0">
                    <h3 className="text-sm font-medium text-black">Supplier Performance</h3>
                    <div className="flex items-end justify-between">
                      <p className="text-3xl text-black font-medium flex items-center"><TbPlus className="text-[#0046FF] size-auto" />92<sup className="text-gray-500 text-lg mt-2">%</sup></p>
                      <div className="flex flex-col items-end gap-0">
                        <p className="text-sm font-normal text-gray-500">Top Supplier</p>
                        <p className="text-sm font-medium text-black">John Cara</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0">
                  <div className="bg-[#FFFADC]/50 absolute size-1/6 top-0 left-2 rounded-full"></div>
                  <div className="bg-[#0046FF]/25 absolute size-3/6 bottom-0 right-2 rounded-full"></div>
                </div>
              </div>






              <div className="relative">
                <div className="relative border border-black/15 z-10 w-full px-6 py-4 rounded-2xl bg-transparent backdrop-blur-3xl flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl text-black font-medium">Total Stock</h2>
                    <TbArrowUpRight className="size-7 text-[#0046FF]" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500 font-normal"><span className="text-black font-medium">10,000</span> units across <span className="text-black font-medium">5</span> warehouses</p>
                      <p className="text-sm text-black font-medium flex items-center"><TbPlus className="text-[#0046FF] size-auto" />5<span className="text-gray-500">%</span></p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500 font-normal">Stock turnover rate</p>
                      <p className="text-sm text-black font-medium flex items-center"><TbPlus className="text-[#0046FF] size-auto" />6.5<span className="text-gray-500">%</span></p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0">
                    <h3 className="text-sm font-medium text-black">Supplier performance rate</h3>
                    <div className="flex items-end justify-between">
                      <p className="text-3xl text-black font-medium flex items-center"><TbPlus className="text-[#0046FF] size-auto" />92<sup className="text-gray-500 text-lg mt-2">%</sup></p>
                      <div className="flex flex-col items-end gap-0">
                        <p className="text-sm font-normal text-gray-500">Last updated</p>
                        <p className="text-sm font-medium text-black">Today, 06:48 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0">
                  <div className="bg-[#FF8040]/10 absolute size-2/6 top-0 left-2 rounded-full"></div>
                  <div className="bg-[#0046FF]/50 absolute size-2/6 bottom-0 right-2 rounded-full"></div>
                </div>
              </div>

            </div>




            <div className="col-span-2 px-6 py-4 flex flex-col gap-4">
              <div className="flex flex-col gap-0">
                <h1 className="text-2xl font-medium">Total stock value</h1>
                <p className="text-black/50 text-base font-normal">Across all warehouses.</p>
              </div>


              {/* Card: Total Stock Value */}
              <div className="relative border border-black/15 z-10 w-full px-4 py-4 rounded-2xl bg-white/15 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <h2 className="text-3xl text-black font-medium">
                    <span className="text-[#0046FF]">$</span> 50,000
                  </h2>
                  <div className="flex flex-col items-end gap-0">
                    <p className="text-sm font-normal text-gray-500">Compared to last month</p>
                    <p className="text-sm font-medium text-black">
                      <span className="text-[#FF8040]">-</span> 22.26 <span className="text-gray-500">%</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-base text-gray-500 font-normal">Yearly average:</p>
                  <p className="text-black font-medium">
                    <span className="text-[#0046FF]">$</span> 61,000
                  </p>
                  <TbArrowUpRight className="size-5 text-[#0046FF]" />
                </div>
                <div>
                  <Link href={"/"}>
                    <button className="bg-[#0046FF] text-white text-base font-medium px-3 py-2.5 rounded-xl w-full cursor-pointer">
                      View details
                    </button>
                  </Link>
                </div>
              </div>



              <div className="relative border border-black/15 z-10 w-full px-4 py-4 rounded-2xl bg-white/15 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <h2 className="text-xl text-black font-medium">Recent transactions</h2>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-base text-gray-500 font-normal">Last 24 hours</p>
                </div>
                <div>
                  <Link href={"/"}>
                    <button className="bg-[#0046FF] text-white text-base font-medium px-3 py-2.5 rounded-xl w-full cursor-pointer">
                      View details
                    </button>
                  </Link>
                </div>
              </div>


            </div>
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
