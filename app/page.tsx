import Header from "@/components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      {/* <Header /> */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-white">
          <h1 className="text-4xl text-[#F97A00]">Some Text test</h1>
          <br />
            <div className="border border-gray-200 w-full px-4 py-3 rounded-2xl bg-white flex flex-col gap-4">
              <div>
                <h2 className="text-base font-semibold text-gray-500">Total Stock</h2>
                <p className="text-2xl font-normal text-black">10,000 Units</p>
              </div>
              <button className="cursor-pointer text-sm font-semibold bg-black hover:bg-[#08CB00] text-white px-4 py-2 rounded-full w-fit">
                View stock
              </button>
            </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
