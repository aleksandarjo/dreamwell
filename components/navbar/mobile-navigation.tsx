import { TbMenuDeep } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/route";

import NavLinks from "./nav-links";

export default function MobileNavigation() {
  return (
    <div className="xl:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="border-none bg-transparent hover:bg-transparent "
            variant="outline"
          >
            <TbMenuDeep className="!h-8 !w-8 text-8xl text-white" />
          </Button>
        </SheetTrigger>
        <SheetDescription></SheetDescription>
        <SheetContent
          side="left"
          className="flex h-full flex-col justify-between"
          aria-describedby={undefined}
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
                <p className="golos text-2xl text-primary">Dreamwell</p>
              </Link>
            </SheetClose>
            <NavLinks isMobileNav />
          </div>
          <div className="flex w-full flex-col gap-2.5">
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
