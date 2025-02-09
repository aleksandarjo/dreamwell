import Head from "next/head";
import Link from "next/link";

interface BreadcrumbProps {
  baseUrl: string;
  items: { name: string; url?: string }[];
}

export default function Breadcrumb({ items, baseUrl }: BreadcrumbProps) {
  console.log(baseUrl + items[2].url);
  const breadcrumbSchema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: `${baseUrl}${item.url}`,
        name: item.name,
      })),
    },
  ];

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <nav className="flex items-center max-sm:flex-wrap">
        {items.map((item) =>
          item.url ? (
            <div key={item.name}>
              <Link
                href={item.url}
                className="text-base text-gray/50 capitalize"
              >
                {item.name}
              </Link>
              <span className="text-gray/50 mx-1">/</span>
            </div>
          ) : (
            <span className="text-base font-medium" key={item.name}>
              {item.name}
            </span>
          )
        )}
      </nav>
    </>
  );
}
