import ImageGallery from "@/components/sliders/image-gallery";
import Breadcrumb from "@/components/ui/breadcrumb";

async function getProperty({ params }: { params: { id: string } }) {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/properties/${id}`, {
    cache: "no-store",
  });
  const property = await res.json();
  return property;
}

export default async function PropertyPage({
  params,
}: {
  params: { id: string };
}) {
  const property = await getProperty({ params });
  return (
    <section>
      <Breadcrumb
        baseUrl={process.env.NEXT_PUBLIC_BASE_URL}
        items={[
          { name: "Home", url: "/" },
          { name: "Listings", url: "/listings" },
          { name: property.type, url: `/listings?type=${property.type}` },
          { name: property.title },
        ]}
      />
      <ImageGallery />
    </section>
  );
}
