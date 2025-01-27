import { NextResponse, NextRequest } from "next/server";
import properties from "@/data/real-estate-data.json";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "15");
  const minPrice = parseInt(searchParams.get("min") || "0");
  const maxPrice = parseInt(searchParams.get("max") || "99999999");

  const filteredProperties = properties.filter((property) => {
    if (query && !property.title.toLowerCase().includes(query.toLowerCase())) {
      return false;
    }

    const price = property.sale || property.rent;
    if (price! < minPrice || price! > maxPrice) {
      return false;
    }

    return true;
  });

  //prettier-ignore
  const paginatedData = filteredProperties.slice((page - 1) * limit, page * limit);

  return NextResponse.json({
    data: paginatedData,
    total: filteredProperties.length,
    page,
    limit,
  });
}
