import Head from "next/head";
import Link from "next/link";

interface BreadcrumbProps {
  items: { name: string; url?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const type = "house";
  const title = "Single Family Ranch House";

  const breadcrumbSchema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: `https://dreamwell.vercel.app${item.url}`,
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

      <nav className="flex items-center gap-1 max-sm:flex-wrap">
        {items.map((item) =>
          item.url ? (
            <div key={item.name}>
              <Link href={item.url} className="text-base text-gray/50 ">
                {item.name}
              </Link>
              <span className="text-gray/50">/</span>
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
