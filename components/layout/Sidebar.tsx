"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  TbBox,
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
    <aside className="bg-gray-50 border-r border-r-gray-200">
      <ul className="flex flex-col gap-0 px-3 py-6">
        {sidebarLinks.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center gap-2 text-base px-3 py-2.5 bg-transparent hover:bg-[#06B90014] rounded-xl min-w-56 ${
                  isActive
                    ? "font-medium text-[#06B900]"
                    : "font-normal text-gray-600"
                }`}
              >
                <Icon className="size-5" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
