import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/products/product-card";
import { categories, products } from "@/lib/mock/catalog";

type ShopSearch = {
  q: string;
  category: string;
};

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    q: typeof search.q === "string" ? search.q : "",
    category: typeof search.category === "string" ? search.category : "",
  }),
  head: () => ({
    meta: [
      { title: "Shop cold drinks & snacks — Nungwi Drinks Delivery" },
      {
        name: "description",
        content:
          "Browse ice-cold beer, wine, champagne, soft drinks, ice and party snacks delivered fast across Nungwi, Zanzibar.",
      },
      { property: "og:title", content: "Shop cold drinks & snacks — Nungwi" },
      {
        property: "og:description",
        content: "Ice-cold beer, wine, champagne, soft drinks and snacks delivered across Nungwi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const { q, category } = Route.useSearch();
  const navigate = Route.useNavigate();

  const list = products.filter((p) => {
    const matchesCategory = !category || p.category === category;
    const needle = q.trim().toLowerCase();
    const matchesQuery =
      !needle ||
      p.name.toLowerCase().includes(needle) ||
      p.brand.toLowerCase().includes(needle) ||
      p.category.toLowerCase().includes(needle);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="max-w-2xl">
        <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Shop</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Everything chilled, packed insulated and on its way in minutes.
        </p>
      </header>

      <div className="mt-6 flex flex-col gap-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <Input
            value={q}
            aria-label="Search products"
            placeholder="Search beer, wine, snacks…"
            className="pl-9"
            onChange={(e) =>
              navigate({
                to: ".",
                search: (prev) => ({ ...prev, q: e.target.value }),
                replace: true,
              })
            }
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={category ? "outline" : "ember"}
            size="sm"
            className="rounded-full"
            onClick={() => navigate({ to: ".", search: (prev) => ({ ...prev, category: "" }) })}
          >
            All
          </Button>
          {categories.map((c) => (
            <Button
              key={c.slug}
              variant={category === c.slug ? "ember" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => navigate({ to: ".", search: (prev) => ({ ...prev, category: c.slug }) })}
            >
              {c.name}
            </Button>
          ))}
        </div>
      </div>

      {list.length === 0 ? (
        <p className="mt-12 text-sm text-muted-foreground">No products match that search yet.</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
