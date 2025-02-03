import { NextResponse, NextRequest } from "next/server";

import properties from "@/data/real-estate-data.json";

export async function GET(request: NextRequest) {
  // MSW handles all API requests in local development.
  return NextResponse.json({
    data: [],
    total: 0,
    page: 1,
    limit: 15,
  });
}
