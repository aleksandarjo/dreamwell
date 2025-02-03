import { BathIcon, BedIcon, GarageIcon, SquareIcon } from "@/public/index";

import { ROUTES } from "./route";

export const navLinks = [
  {
    route: ROUTES.HOME,
    label: "Home",
  },
  {
    route: ROUTES.LISTINGS,
    label: "Listing",
  },
  {
    route: ROUTES.ABOUT,
    label: "About",
  },
  {
    route: ROUTES.CONTACT,
    label: "Contact",
  },
  {
    route: ROUTES.BLOG,
    label: "Blog",
  },
] as const;

export const propertyAttributes = [
  {
    id: 1,
    label: "2 beds",
    src: BedIcon,
    alt: "bed",
    isEven: false,
  },
  {
    id: 2,
    label: "no garage",
    src: GarageIcon,
    alt: "garage",
    isEven: true,
  },
  {
    id: 3,
    label: "2 baths",
    src: BathIcon,
    alt: "bath",
    isEven: false,
  },
  {
    id: 4,
    label: "1,235 sqft",
    src: SquareIcon,
    alt: "square",
    isEven: true,
  },
] as const;
