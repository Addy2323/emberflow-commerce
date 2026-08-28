import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Snowflake, ShieldCheck } from "lucide-react";

import heroImage from "@/assets/hero-drinks.jpg";
import { Button } from "@/components/ui/button";
import { FlameBackdrop } from "@/components/animations/flame-backdrop";
import { ProductCard } from "@/components/products/product-card";
import { categories, products } from "@/lib/mock/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nungwi Drinks Delivery — Ice-cold drinks in 30 minutes" },
      {
        name: "description",
        content:
          "Beer, wine, champagne, soft drinks, ice and snacks delivered frost-cold to your villa, hotel or beach spot in Nungwi, Zanzibar.",
      },
      { property: "og:title", content: "Nungwi Drinks Delivery — Ice-cold drinks in 30 minutes" },
      {
        property: "og:description",
        content: "Frost-cold beer, wine, champagne and snacks delivered across Nungwi, Zanzibar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const popular = products.filter((p) => p.tags.includes("popular")).slice(0, 4);
  const deals = products.filter((p) => p.tags.includes("deal")).slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <FlameBackdrop className="opacity-70" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold">
              <Clock className="size-3.5 text-primary" aria-hidden />
              Delivered in ~30 minutes
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Ice-cold drinks,
              <br />
              straight to the sand.
            </h1>
            <p className="mt-4 max-w-md text-base text-muted-foreground">
              Beer, wine, champagne, soft drinks, ice and snacks — packed insulated and delivered across Nungwi,
              Zanzibar.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button variant="ember" size="lg" asChild>
                <Link to="/shop">Shop now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/shop" search={{ category: "beer" }}>
                  Browse beer
                </Link>
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <li className="inline-flex items-center gap-1.5">
                <Snowflake className="size-4 text-accent" aria-hidden /> Frost-cold guarantee
              </li>
              <li className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-accent" aria-hidden /> ID checked on delivery
              </li>
            </ul>
          </div>

          <div className="relative animate-scale-in overflow-hidden rounded-3xl border border-border shadow-lift">
            <img
              src={heroImage}
              alt="Chilled beers, wine and fresh juice on a Zanzibar beach table"
              width={1200}
              height={900}
              className="aspect-[4/3] size-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-display text-2xl font-bold tracking-tight">Shop by category</h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/shop"
              search={{ category: c.slug }}
              className="rounded-2xl border border-border bg-card p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <p className="font-semibold">{c.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="flex items-end justify-between gap-3">
          <h2 className="font-display text-2xl font-bold tracking-tight">Popular right now</h2>
          <Link to="/shop" className="text-sm font-semibold text-primary hover:underline">
            View all
          </Link>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="font-display text-2xl font-bold tracking-tight">Deals & bundles</h2>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
