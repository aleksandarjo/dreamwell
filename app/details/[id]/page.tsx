import console from "console";
import Image from "next/image";
import DetailSlider from "@/components/sliders/property-detail-slider";
import Breadcrumb from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

async function getProperty() {
  const res = await fetch(`api/properties`, {
    cache: "no-store",
  });
  const properties = await res.json();

  return properties;
}

export default async function Details() {
  // const properties = await getProperty();
  const type = "house";
  return (
    <section>
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Listings", url: "/listings" },
          { name: "House", url: `/listings?type=${type}` },
          { name: "Single Family Ranch House" },
        ]}
      />
      <DetailSlider />
    </section>
  );
}
