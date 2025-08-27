"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  TbBox,
  TbBrandStocktwits,
  TbBug,
  TbLogout,
  TbReorder,
  TbReportAnalytics,
  TbSmartHome,
  TbTransactionDollar,
  TbUser,
} from "react-icons/tb";

const sidebarLinks = [
  { href: "/", label: "Dashboard", icon: TbSmartHome },
  { href: "/stock", label: "Stock", icon: TbBox },
  { href: "/reorder", label: "Reorder", icon: TbReorder },
  { href: "/reports", label: "Reports", icon: TbReportAnalytics },
  { href: "/anomalies", label: "Anomalies", icon: TbBug },
  { href: "/staff", label: "Staff", icon: TbUser },
  { href: "/transactions", label: "Transactions", icon: TbTransactionDollar },
  { href: "/logout", label: "Logout", icon: TbLogout },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-r border-r-black/15">
      <ul className="flex flex-col gap-0 px-3 py-4">
        <li className="flex flex-col items-start gap-8">
          {/* bg-gray-200 w-full */}
          <Link href="/" className="text-[#0046FF] mx-1.5 w-fit">
            <TbBrandStocktwits className="size-8" />
          </Link>
          <ul>
            {sidebarLinks.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    // min-w-56
                    className={`flex items-center gap-2 text-base px-3 ${label ? "py-2.5" : "py-3"} rounded-xl min-w-56 ${isActive
                      ? "font-medium text-white bg-[#0046FF]"
                      : "font-normal text-gray-500 bg-transparent hover:bg-[#0046FF]/10 hover:text-[#0046FF]"
                      }`}
                  >
                    <Icon className="size-5" />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </aside>
  );
}
