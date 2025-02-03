import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/constants/route";

import { Button } from "../ui/button";

import NavLinks from "./nav-links";
import MobileNavigation from "./mobile-navigation";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between pb-5 pt-7">
      <div className="flex items-center gap-20">
        <Logo />
        <NavLinks />
      </div>
      <div className="flex items-center gap-2 max-xl:hidden">
        <Button>
          <Link className="flex items-center gap-2.5" href={ROUTES.SIGN_IN}>
            <Image src="/icons/user.svg" alt="user" width={16} height={16} />
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
      <MobileNavigation />
    </nav>
  );
}
