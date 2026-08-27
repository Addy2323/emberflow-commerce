import { Link } from "@tanstack/react-router";
import { Plus, Star } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePrice } from "@/lib/currency";
import { useCart } from "@/lib/store/cart";
import type { Product } from "@/lib/mock/catalog";

export function ProductCard({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  const price = usePrice();
  const lowStock = product.stock <= 10;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="relative block aspect-square overflow-hidden bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={640}
          height={640}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {product.tags.includes("deal") && <Badge variant="destructive">Deal</Badge>}
          {product.tags.includes("new") && <Badge className="bg-accent text-accent-foreground">New</Badge>}
          {lowStock && <Badge variant="secondary">Only {product.stock} left</Badge>}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
          <span className="truncate">{product.brand}</span>
          <span className="inline-flex items-center gap-1">
            <Star className="size-3 fill-warning text-warning" aria-hidden />
            {product.rating}
          </span>
        </div>

        <h3 className="text-base leading-snug font-semibold">
          <Link to="/product/$slug" params={{ slug: product.slug }} className="hover:text-primary">
            {product.name}
          </Link>
        </h3>
        <p className="text-xs text-muted-foreground">{product.size}</p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="text-lg font-bold tracking-tight">{price(product.price)}</span>
          <Button
            variant="ember"
            size="sm"
            className="rounded-full"
            onClick={() => {
              add(product);
              toast.success(`${product.name} added to cart`);
            }}
          >
            <Plus aria-hidden />
            Add
          </Button>
        </div>
      </div>
    </article>
  );
}
