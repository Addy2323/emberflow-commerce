import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Star, ShieldCheck, Truck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { QuantityStepper } from "@/components/products/quantity-stepper";
import { ProductCard } from "@/components/products/product-card";
import { usePrice } from "@/lib/currency";
import { getProduct, products } from "@/lib/mock/catalog";
import { useCart } from "@/lib/store/cart";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product not found — Nungwi" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const description = product.description.slice(0, 155);
    return {
      meta: [
        { title: `${product.name} — ${product.size} | Nungwi Drinks` },
        { name: "description", content: description },
        { property: "og:title", content: `${product.name} — Nungwi Drinks` },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const add = useCart((s) => s.add);
  const price = usePrice();

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <Link to="/shop" className="hover:text-foreground">
          Shop
        </Link>
        <span className="px-1">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-card">
          <img
            src={product.image}
            alt={product.name}
            width={960}
            height={960}
            className="aspect-square size-full object-cover"
          />
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{product.brand}</Badge>
            {product.ageRestricted && <Badge variant="destructive">18+</Badge>}
            {product.stock <= 10 && <Badge variant="outline">Only {product.stock} left</Badge>}
          </div>

          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{product.name}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {product.size} · {product.origin}
            {product.abv ? ` · ${product.abv}% ABV` : ""}
          </p>

          <div className="mt-3 inline-flex items-center gap-1 text-sm">
            <Star className="size-4 fill-warning text-warning" aria-hidden />
            <span className="font-semibold">{product.rating}</span>
            <span className="text-muted-foreground">({product.reviews} reviews)</span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-bold tracking-tight">{price(product.price)}</span>
            <QuantityStepper value={qty} onChange={setQty} />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              variant="ember"
              size="lg"
              onClick={() => {
                add(product, qty);
                toast.success(`${product.name} × ${qty} added to cart`);
              }}
            >
              Add to cart
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/cart">Go to cart</Link>
            </Button>
          </div>

          <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Truck className="size-4 text-primary" aria-hidden />
              Delivered cold in insulated packs across Nungwi.
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" aria-hidden />
              ID checked on delivery for age-restricted items.
            </li>
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold tracking-tight">You may also like</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
