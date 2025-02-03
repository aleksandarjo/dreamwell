import { http, HttpResponse } from "msw";

import properties from "@/data/real-estate-data.json";

export const handlers = [
  http.get("http://localhost:3000/api/properties", ({ request }) => {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "15");
    const minPrice = parseInt(searchParams.get("min") || "0");
    const maxPrice = parseInt(searchParams.get("max") || "99999999");

    const filteredProperties = properties.filter((property) => {
      if (
        query &&
        !property.title.toLowerCase().includes(query.toLowerCase())
      ) {
        return false;
      }

      const price = property.sale || property.rent;
      if (price < minPrice || price > maxPrice) {
        return false;
      }

      return true;
    });

    const paginatedData = filteredProperties.slice(
      (page - 1) * limit,
      page * limit
    );

    return HttpResponse.json({
      data: [],
      total: paginatedData.length,
      page,
      limit,
    });
  }),
];
