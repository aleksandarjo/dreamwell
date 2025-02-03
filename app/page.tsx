import PropertyCard from "@/components/cards/property-card";

// todo configure eslint and prettier to sort the imports, tailwind classes and remove the unused imports

export default function Home() {
  return (
    <div className="min-h-screen bg-white  px-2.5 py-10">
      <PropertyCard />
      <PropertyCard orientation="horizontal" />
    </div>
  );
}
