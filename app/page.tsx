import Link from "next/link";
import { TbArrowUpRight } from 'react-icons/tb';

export default function Home() {
  return (
    <div className="grid grid-cols-3">

      {/* Col 1 */}
      <div className="border-r border-gray-400/30 px-6 py-4 flex flex-col gap-6">

        <div className="flex flex-col gap-0">
          <h1 className="font-medium text-[32px] text-black">Inventory Overview</h1>
          <p className="font-normal text-base text-gray-600">Key metrics for stock and financial tracking</p>
        </div>

        <div className="border border-gray-400/30 px-4 py-4 rounded-2xl bg-gradient-to-tl from-purple-400/20 to-transparent">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-0">
              <h2 className="font-medium text-2xl text-black">Total Stock</h2>
            </div>
            <div className="flex flex-col gap-0 divide-y divide-gray-400/30">
              <div className="flex items-center justify-between">
                <p className="font-normal text-base text-gray-600">Across <span className="font-medium text-black">5</span> warehouses</p>
                <p className="font-normal text-base text-gray-600"><span className="font-medium text-black">10,000</span> units</p>
              </div>
              <div className="flex items-center justify-between">
                <Link href={"/"} className="font-semibold text-base text-purple-600 hover:text-purple-600/80 hover:underline flex items-center gap-0">Low Stock Alerts<TbArrowUpRight className="size-6" /></Link>
                <p className="font-normal text-base text-gray-600"><span className="font-medium text-black">5</span> items</p>
              </div>
            </div>
            {/* <Link href={"/"}><button className="cursor-pointer bg-purple-600 hover:bg-purple-600/80 font-normal text-sm text-white rounded-full px-4 py-2">View Details</button></Link> */}
          </div>
        </div>

      </div>

      {/* Col 2 */}
      <div className="px-6 py-4 flex flex-col gap-6 col-span-1">

        <div className="flex flex-col gap-0">
          <h1 className="font-medium text-2xl text-black">Inventory Overview</h1>
          <p className="font-normal text-base text-gray-600">Key metrics for stock and financial tracking</p>
        </div>

        {/* Card */}
        <div className="border border-gray-400/30 px-4 py-4 rounded-2xl bg-transparent w-full">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="flex items-center gap-0 font-medium text-base text-black">Total Stock Value</h2>
            </div>
            <div className="flex items-center justify-between gap-0">
              <div>
                <h3 className="font-medium text-4xl text-black">$50,000</h3>
              </div>
              <div>
                <p className="font-normal text-sm text-gray-600 flex flex-col items-end gap-0">
                  Compared to last month
                  <span className="font-medium text-black">+22%</span>
                </p>
              </div>
            </div>
            <div>
              <p className="font-normal text-sm text-gray-600">Based on Current Unit Prices</p>
            </div>
            <div className="flex items-center justify-between gap-0">
              <p className="font-normal text-sm text-gray-600">Yearly Average: <span className="font-medium text-black">$59,935.7</span></p>
              <Link href={"/"} className="font-medium text-sm text-purple-600 hover:text-purple-600/80 hover:underline flex items-center gap-0">
              View Details
              <TbArrowUpRight className="size-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="border border-gray-400/30 px-4 py-4 rounded-2xl bg-gradient-to-tl from-purple-400/20 to-transparent">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-medium text-xl text-black">Total Stock</h2>
            </div>
            <div>
              <p className="font-medium text-4xl text-black">10,000 units</p>
            </div>
            <div className="flex flex-col gap-0">
              <p className="font-normal text-base text-gray-600">Across 5 warehouses</p>
            </div>
            <div className="flex mt-2">
              <Link href={"/"}><button className="cursor-pointer bg-purple-600 hover:bg-purple-600/80 font-medium text-sm text-white rounded-full px-4 py-2">View Details</button></Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}