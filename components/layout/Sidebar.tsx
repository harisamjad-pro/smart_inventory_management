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
  TbUser,
} from "react-icons/tb";

const sidebarLinks = [
  { href: "/", label: "Dashboard", icon: TbSmartHome },
  { href: "/stock", label: "Stock", icon: TbBox },
  { href: "/reorder", label: "Reorder", icon: TbReorder },
  { href: "/reports", label: "Reports", icon: TbReportAnalytics },
  { href: "/anomalies", label: "Anomalies", icon: TbBug },
  { href: "/users", label: "Users", icon: TbUser },
  { href: "/logout", label: "Logout", icon: TbLogout },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-white border-r border-r-gray-200">
      <ul className="flex flex-col gap-0 px-3 py-4">
        <li className="flex flex-col items-start gap-8">
          {/* bg-gray-200 w-full */}
          <Link href="/" className="text-[#83b300] mx-1.5 w-fit">
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
                    className={`flex items-center gap-2 text-sm px-3 ${label ? "py-2.5" : "py-3"} rounded-xl min-w-56 ${isActive
                      ? "font-medium text-[#18230F] bg-[#B6F500]"
                      : "font-normal text-gray-600 bg-transparent hover:bg-[#B8F50032]"
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
