import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { QuantityStepper } from "@/components/products/quantity-stepper";
import { usePrice } from "@/lib/currency";
import { DELIVERY_FEE, cartSubtotal, useCart } from "@/lib/store/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your cart — Nungwi Drinks Delivery" },
      { name: "description", content: "Review your chilled drinks and snacks before checkout in Nungwi, Zanzibar." },
      { property: "og:title", content: "Your cart — Nungwi Drinks Delivery" },
      { property: "og:description", content: "Review your chilled drinks and snacks before checkout." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const lines = useCart((s) => s.lines);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const price = usePrice();

  const subtotal = cartSubtotal(lines);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Your cart</h1>

      {lines.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-border p-10 text-center">
          <p className="text-sm text-muted-foreground">Your cart is empty — the cold room is full though.</p>
          <Button variant="ember" className="mt-5" asChild>
            <Link to="/shop">Start shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_20rem]">
          <ul className="space-y-4">
            {lines.map((line) => (
              <li
                key={line.product.id}
                className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-card"
              >
                <Link
                  to="/product/$slug"
                  params={{ slug: line.product.slug }}
                  className="size-20 shrink-0 overflow-hidden rounded-xl bg-surface"
                >
                  <img
                    src={line.product.image}
                    alt={line.product.name}
                    width={160}
                    height={160}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <Link
                        to="/product/$slug"
                        params={{ slug: line.product.slug }}
                        className="font-semibold hover:text-primary"
                      >
                        {line.product.name}
                      </Link>
                      <p className="text-xs text-muted-foreground">{line.product.size}</p>
                    </div>
                    <span className="font-semibold tabular-nums">{price(line.product.price * line.qty)}</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <QuantityStepper value={line.qty} min={1} onChange={(next) => setQty(line.product.id, next)} />
                    <Button
                      variant="ghost"
                      size="sm"
                      aria-label={`Remove ${line.product.name}`}
                      onClick={() => remove(line.product.id)}
                    >
                      <Trash2 aria-hidden />
                      Remove
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-2xl border border-border bg-card p-5 shadow-card">
            <h2 className="font-display text-lg font-bold">Summary</h2>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd className="tabular-nums">{price(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Delivery</dt>
                <dd className="tabular-nums">{price(DELIVERY_FEE)}</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-2 text-base font-bold">
                <dt>Total</dt>
                <dd className="tabular-nums">{price(subtotal + DELIVERY_FEE)}</dd>
              </div>
            </dl>
            <Button variant="ember" className="mt-5 w-full" asChild>
              <Link to="/checkout">Checkout</Link>
            </Button>
            <Button variant="ghost" className="mt-2 w-full" asChild>
              <Link to="/shop">Continue shopping</Link>
            </Button>
          </aside>
        </div>
      )}
    </div>
  );
}
