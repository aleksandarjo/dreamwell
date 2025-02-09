import { NextResponse } from "next/server";
import propertyDetails from "@/data/property-data.json";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const property = propertyDetails.find((property) => property.id === id);

  return NextResponse.json(property);
}
