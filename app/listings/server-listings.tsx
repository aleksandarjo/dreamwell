import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getProperties } from "@/services/property-service";
import PropertiesList from "@/components/PropertiesList";

export default async function Properties() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["properties"],
    queryFn: getProperties,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PropertiesList />
    </HydrationBoundary>
  );
}
