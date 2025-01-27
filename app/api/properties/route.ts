import { NextResponse, NextRequest } from "next/server";
import properties from "@/data/real-estate-data.json";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "15");
  const minPrice = parseInt(searchParams.get("min") || "0");
  const maxPrice = parseInt(searchParams.get("max") || "99999999");

  let filteredProperties = properties.filter((property) => {
    if (!query) return NextResponse.json(properties);
    return property.title.toLowerCase().includes(query!.toLowerCase());
  });

  if (minPrice) {
    filteredProperties = filteredProperties.filter((property) => {
      if (property.sale) return property.sale >= minPrice;
      if (property.rent) return property.rent >= minPrice;
    });
  }

  if (maxPrice) {
    filteredProperties = filteredProperties.filter((property) => {
      if (property.sale) return property.sale <= maxPrice;
      if (property.rent) return property.rent <= maxPrice;
    });
  }

  if (minPrice && maxPrice) {
    filteredProperties = filteredProperties.filter((property) => {
      if (property.sale)
        return property.sale >= minPrice && property.sale <= maxPrice;
      if (property.rent)
        return property.rent >= minPrice && property.rent <= maxPrice;
    });
  }

  //prettier-ignore
  const paginatedData = filteredProperties.slice((page - 1) * limit, page * limit);

  return NextResponse.json({
    data: paginatedData,
    total: filteredProperties.length,
    page,
    limit,
  });
}
