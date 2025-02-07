import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { PiHeartBold, PiHeartFill } from "react-icons/pi";

import { propertyAttributes } from "@/constants/index";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

type PropertyCardProps = VariantProps<typeof cardVariants> & {
  orientation?: "horizontal" | "vertical";
};

export default function PropertyCard({
  orientation = "vertical",
}: PropertyCardProps) {
  return (
    <section className="flex flex-col gap-10">
      <div className={cardVariants({ orientation })}>
        <button className="absolute right-6 top-6 z-10 flex size-10 items-center justify-center rounded-full bg-white shadow-main">
          <PiHeartBold className="h-7 w-6 text-primary" />
        </button>
        <div
          className={cn(
            orientation === "vertical" ? "" : "grid grid-cols-[387px_1fr]"
          )}
        >
          <div className="relative h-[263px] w-[360px] max-w-full">
            <Image
              src="/images/property-1.png"
              alt="property"
              fill
              className="mx-auto w-full object-cover"
            />
          </div>
          <div
            className={cn(
              orientation === "vertical" ? "" : "flex flex-col justify-evenly",
              "px-5 mt-5"
            )}
          >
            <div>
              <h3 className={cardTitleVariants({ orientation })}>
                Beach View Villa
              </h3>
              <div className="flex items-center gap-1">
                <IoLocationOutline className="size-3.5 text-gray/60" />
                <span className="text-sm text-gray/60">
                  Denpasar, Bali, Indonesia
                </span>
              </div>
            </div>
            <div className={cardAttributesWrapperVariants({ orientation })}>
              <div className={cardAttributesVariants({ orientation })}>
                {propertyAttributes.map((item) => (
                  <article
                    key={item.id}
                    className={cn(
                      item.isEven === true ? "justify-self-end" : "",
                      "flex items-center gap-2 min-w-28"
                    )}
                  >
                    <Image src={item.src} alt={item.alt} />
                    <p className="text-base text-gray">{item.label}</p>
                  </article>
                ))}
              </div>

              <div className={cardFooterVariants({ orientation })}>
                <div className="rounded-xl border border-gray/50 p-4">
                  <h5 className="text-base">For Rent</h5>
                  <h4 className="text-2xl font-bold text-black">
                    $1,900
                    <span className="text-base font-normal text-gray">
                      /month
                    </span>
                  </h4>
                </div>
                <div>
                  <Button className="size-full">
                    <FaArrowRight className="size-6 text-5xl" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const cardVariants = cva(
  "relative rounded-[15px] bg-white px-2.5 pb-5 pt-3 shadow-main",
  {
    variants: {
      orientation: {
        horizontal: "w-full",
        vertical: " max-w-[390px]",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
);

const cardTitleVariants = cva(
  "line-clamp-2 text-[28px] font-semibold leading-tight text-dark-blue",
  {
    variants: {
      orientation: {
        horizontal: "max-w-xl",
        vertical: "min-h-[70px]",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
);

const cardAttributesVariants = cva(
  "grid grid-cols-2 items-center justify-between gap-1",
  {
    variants: {
      orientation: {
        horizontal: "",
        vertical: "mt-14",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
);

const cardAttributesWrapperVariants = cva("", {
  variants: {
    orientation: {
      horizontal: "grid grid-cols-[350px_410px] items-center justify-between",
      vertical: "grid-cols-[350px_1fr]",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

const cardFooterVariants = cva("grid grid-cols-[75%_25%] gap-2.5", {
  variants: {
    orientation: {
      horizontal: "",
      vertical: "mt-5",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});
