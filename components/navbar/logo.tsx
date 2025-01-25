import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/constants/route";

export default function Logo() {
  return (
    <Link href={ROUTES.HOME} className="flex items-center space-x-2">
      <Image src="/images/logo.svg" alt="logo" width={50} height={50} />
      <p className="golos text-primary text-2xl font-bold sm:text-3xl">
        Dreamwell
      </p>
    </Link>
  );
}
