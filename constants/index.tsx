import { ROUTES } from "./route";

import { bathIcon, bedIcon, garageIcon, squareIcon } from "@/public/index";

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
    src: bedIcon,
    alt: "bed",
    isEven: false,
  },
  {
    id: 2,
    label: "no garage",
    src: garageIcon,
    alt: "garage",
    isEven: true,
  },
  {
    id: 3,
    label: "2 baths",
    src: bathIcon,
    alt: "bath",
    isEven: false,
  },
  {
    id: 4,
    label: "1,235 sqft",
    src: squareIcon,
    alt: "square",
    isEven: true,
  },
] as const;
