"use client";

import React from "react";

import { useProperties } from "../../hooks/useProperties";

export default function PropertiesPage() {
  const { data, error, isLoading } = useProperties();

  if (isLoading) {
    return <div>Loading properties...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Listings</h2>
      {data && data.length > 0 ? (
        <ul>
          {data.map((property: any) => (
            <li key={property.id}>{property.title}</li>
          ))}
        </ul>
      ) : (
        <p>No properties found.</p>
      )}
    </div>
  );
}
