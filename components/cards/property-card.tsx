import Image from "next/image";
import { PiHeartBold } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { propertyAttributes } from "@/constants/index";
import { cva } from "class-variance-authority";

type PropertyCardProps = {
  orientation?: "horizontal" | "vertical";
};

export default function PropertyCard({
  orientation = "vertical",
}: PropertyCardProps) {
  return (
    <section className="flex flex-col gap-10">
      <div className={cardVariants({ orientation })}>
        <button className="w-10 h-10 bg-white z-10 shadow-main rounded-full absolute top-6 right-6 flex items-center justify-center">
          <PiHeartBold className="w-6 h-7 text-primary" />
        </button>
        <div
          className={cn(
            orientation === "vertical" ? "" : "grid grid-cols-[387px_1fr]"
          )}
        >
          <div className="relative w-[360px] h-[263px] max-w-full">
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
                <IoLocationOutline className="w-3.5 h-3.5 text-gray/60" />
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
                    <p className="text-gray text-base">{item.label}</p>
                  </article>
                ))}
              </div>

              <div className={cardFooterVariants({ orientation })}>
                <div className="border border-gray/50 rounded-xl p-4">
                  <h5 className="text-base">For Rent</h5>
                  <h4 className="text-black font-bold text-2xl">
                    $1,900
                    <span className="text-gray text-base font-normal">
                      /month
                    </span>
                  </h4>
                </div>
                <div>
                  <Button className="w-full h-full">
                    <FaArrowRight className="w-6 h-6 text-5xl" />
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
  "relative bg-white px-2.5 pt-3 pb-5 shadow-main rounded-[15px]",
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
  "text-dark-blue line-clamp-2 leading-tight text-[28px] font-semibold",
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
  "grid grid-cols-2 gap-1 items-center justify-between",
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
