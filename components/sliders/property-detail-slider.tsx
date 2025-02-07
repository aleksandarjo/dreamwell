"use client";

import Image from "next/image";
import { useState } from "react";
import { Thumbs, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useMediaQuery } from "usehooks-ts";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

import "swiper/css";
import "swiper/css/thumbs";
import { Button } from "../ui/button";

export default function DetailSlider() {
  const [open, setOpen] = useState<boolean>(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const breakpoint = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <Lightbox
        open={open}
        plugins={[Thumbnails, Counter]}
        close={() => setOpen(false)}
        counter={{ container: { style: { top: 0, left: 0 } } }}
        slides={[
          { src: "/images/property-main-1.jpg" },
          { src: "/images/property-thumbnail-1.jpg" },
          { src: "/images/property-thumbnail-2.jpg" },
        ]}
      />
      <div className="relative grid grid-cols-1 max-lg:grid-rows-[350px_100px] lg:grid-cols-[750px_1fr] lg:gap-5 xl:grid-cols-[900px_1fr] 2xl:grid-cols-[1083px_1fr]">
        <Swiper
          spaceBetween={20}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs]}
          className="max-h-[500px] w-full md:max-h-[500px] 2xl:max-h-[650px]"
        >
          <SwiperSlide>
            <Image
              src="/images/property-main-1.jpg"
              alt="property image"
              fill
              className="max-w-full rounded-xl object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/property-thumbnail-1.jpg"
              alt="property image"
              fill
              className="max-w-full rounded-xl object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/property-thumbnail-2.jpg"
              alt="property image"
              fill
              className="max-w-full rounded-xl object-cover"
            />
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          direction={breakpoint ? "vertical" : "horizontal"}
          slidesPerView={breakpoint ? 2 : 3}
          spaceBetween={breakpoint ? 20 : 10}
          watchSlidesProgress={true}
          modules={[Thumbs, FreeMode]}
          className="size-full max-lg:mt-5 lg:h-[500px] 2xl:h-[650px]"
        >
          <SwiperSlide>
            <div className="relative h-full">
              <Image
                src="/images/property-main-1.jpg"
                alt="property image"
                fill
                className="max-w-full rounded-xl object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full">
              <Image
                src="/images/property-thumbnail-1.jpg"
                alt="property image"
                fill
                className="max-w-full rounded-xl object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full">
              <Image
                src="/images/property-thumbnail-2.jpg"
                alt="property image"
                fill
                className="max-w-full rounded-xl object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <Button
          onClick={() => setOpen(true)}
          className="absolute right-5 z-10 rounded-r-md px-5 py-6 focus:outline-none max-lg:top-72 lg:bottom-5"
        >
          <Image src="/icons/pics.svg" alt="pictures" width={19} height={16} />
          See All Photos
        </Button>
      </div>
    </>
  );
}
