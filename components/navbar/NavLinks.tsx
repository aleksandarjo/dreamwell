"use client";

import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SheetClose } from "../ui/sheet";

type NavLinksProps = {
  isMobileNav?: boolean;
};

export default function NavLinks({ isMobileNav = false }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul
      className={`${isMobileNav ? "flex-col gap-2.5 items-start mt-20 uppercase" : "max-xl:hidden items-center gap-14 capitalize"} flex`}
    >
      {navLinks.map((link) => {
        const isActive = pathname === link.route;
        const linkElement = (
          <Link
            key={link.route}
            href={link.route}
            className={cn(
              isActive ? "font-bold" : "font-regular",
              isMobileNav ? "text-xl text-black" : "text-base text-white"
            )}
          >
            {link.label}
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={link.route}>
            {linkElement}
          </SheetClose>
        ) : (
          linkElement
        );
      })}
    </ul>
  );
}
