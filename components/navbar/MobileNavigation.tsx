import { Button } from "@/components/ui/button";
import { TbMenuDeep } from "react-icons/tb";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { ROUTES } from "@/constants/route";

export function MobileNavigation() {
  return (
    <div className="xl:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="bg-transparent border-none hover:bg-transparent "
            variant="outline"
          >
            <TbMenuDeep className="!h-8 !w-8 text-white text-8xl" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col justify-between h-full"
        >
          <div>
            <SheetTitle className="hidden">Navigation</SheetTitle>
            <SheetClose asChild>
              <Link href="/" className="flex items-center gap-1">
                <Image
                  src="/images/logo.svg"
                  width={40}
                  height={40}
                  alt="Logo"
                />
                <p className="golos text-primary text-2xl">Dreamwell</p>
              </Link>
            </SheetClose>
            <NavLinks isMobileNav />
          </div>
          <div className="flex flex-col w-full gap-2.5">
            <Button>
              <Link className="flex items-center gap-2.5" href={ROUTES.SIGN_IN}>
                <Image
                  src="/icons/user.svg"
                  alt="user"
                  width={16}
                  height={16}
                />
                Sign in
              </Link>
            </Button>
            <Button variant="secondary">
              <Image
                className="invert-hover"
                src="/icons/add.svg"
                alt="add"
                width={16}
                height={16}
              />
              Add property
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
