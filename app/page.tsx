import Header from "@/components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

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
                <p className="text-gray-600 text-sm font-normal"><Link href={"/"} className="text-[#98CD00] font-medium">{"3"} items</Link> are operating.</p>
              </div>


              <div className="relative w-64">
                <div className="relative border border-gray-600/15 z-10 w-full px-6 py-4 rounded-2xl bg-white/30 backdrop-blur-3xl flex flex-col gap-4">
                  <div>
                    <h2 className="text-base font-semibold text-gray-500">Total Stock</h2>
                    <p className="text-2xl font-normal text-black">10,000 Units</p>
                  </div>
                  <button className="cursor-pointer text-sm font-semibold bg-black hover:bg-[#08CB00] text-white px-4 py-2 rounded-full w-fit">
                    View stock
                  </button>
                </div>
                <div className="absolute inset-0">
                  <div className="bg-[#FFFADC] absolute size-1/4 top-0 left-0 rounded-full"></div>
                  <div className="bg-[#B6F500] absolute size-2/4 bottom-0 right-0 rounded-full"></div>
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
