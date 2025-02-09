"use client";

import { useQuery } from "@tanstack/react-query";
import { getProperties } from "@/services/property-service";

const PropertiesList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: getProperties,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.data.map((property) => (
        <p key={property.id}>{property.title}</p>
      ))}
    </div>
  );
};

export default PropertiesList;
