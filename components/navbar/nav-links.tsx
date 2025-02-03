"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { cn } from "@/lib/utils";
import { navLinks } from "@/constants";

import { SheetClose } from "../ui/sheet";

type NavLinksProps = {
  isMobileNav?: boolean;
};

type NavLinkProps = {
  route: string;
  label: string;
};

export default function NavLinks({ isMobileNav = false }: NavLinksProps) {
  const pathname = usePathname();

  function renderLink(link: NavLinkProps) {
    const isActive = pathname === link.route;
    return (
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
  }

  return (
    <ul
      className={`${isMobileNav ? "mt-20 flex-col items-start gap-2.5 uppercase" : "items-center gap-14 capitalize max-xl:hidden"} flex`}
    >
      {navLinks.map((link) =>
        isMobileNav ? (
          <SheetClose asChild key={link.route}>
            {renderLink(link)}
          </SheetClose>
        ) : (
          renderLink(link)
        )
      )}
    </ul>
  );
}
