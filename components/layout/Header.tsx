"use client";

import Link from "next/link";
import { TbBell, TbSearch } from "react-icons/tb";
import { useRef, useState } from "react";

export default function Header() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  return (
    <header className="text-black border-b border-b-black/15">
      <nav className="px-3 py-3.5">
        <ul className="flex gap-4 items-center">
          <li>
            <div
              className={`text-black border rounded-full flex items-center gap-2 text-sm font-normal px-3 py-2 ${focused ? "border-[#0046FF]" : "border-black/15"
                }`}
              onClick={() => inputRef.current?.focus()}
            >
              <TbSearch className={`size-5 ${focused ? "text-[#0046FF]" : "text-gray-500"}`} />
              <input
                ref={inputRef}
                type="search"
                name="search"
                id="search"
                className="w-64 focus:outline-0 placeholder:text-gray-500 bg-transparent"
                placeholder="Search here"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
            </div>
          </li>
          <li>
            <div className="flex border border-black/15 rounded-full ps-3 pe-1 py-1 items-center gap-2 text-[#18230F] text-sm">
              <TbBell className="size-5" />
              {/* bg-[#B8F50032] */}
              <span className="bg-gray-200 px-3 py-1 font-medium rounded-full">
                {"2 new"}
              </span>
            </div>
          </li>
          <li>
            <Link href="/contact">Upgrade</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
