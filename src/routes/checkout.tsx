import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Flame } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { usePrice } from "@/lib/currency";
import { DELIVERY_FEE, cartSubtotal, useCart } from "@/lib/store/cart";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Nungwi Drinks Delivery" },
      { name: "description", content: "Enter your delivery details and confirm your chilled drinks order in Nungwi." },
      { property: "og:title", content: "Checkout — Nungwi Drinks Delivery" },
      { property: "og:description", content: "Confirm your chilled drinks order for delivery in Nungwi, Zanzibar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const lines = useCart((s) => s.lines);
  const clear = useCart((s) => s.clear);
  const price = usePrice();
  const [done, setDone] = useState(false);

  const subtotal = cartSubtotal(lines);
  const total = subtotal + DELIVERY_FEE;

  if (done) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
        <span className="relative grid size-20 animate-success-pop place-items-center rounded-full bg-gradient-ember shadow-ember">
          <Check className="size-10 text-primary-foreground" aria-hidden />
          <Flame className="absolute -right-1 -top-1 size-6 animate-flame-glow text-primary" aria-hidden />
        </span>
        <h1 className="mt-6 font-display text-2xl font-extrabold tracking-tight">Payment successful</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Order confirmed. Your drinks are being packed on ice and will be on the way shortly.
        </p>
        <div className="mt-6 flex gap-3">
          <Button variant="ember" asChild>
            <Link to="/account">Track order</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/shop">Keep shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Checkout</h1>

      {lines.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-border p-10 text-center">
          <p className="text-sm text-muted-foreground">Nothing to check out yet.</p>
          <Button variant="ember" className="mt-5" asChild>
            <Link to="/shop">Browse the shop</Link>
          </Button>
        </div>
      ) : (
        <form
          className="mt-8 grid gap-8 lg:grid-cols-[1fr_20rem]"
          onSubmit={(e) => {
            e.preventDefault();
            clear();
            setDone(true);
          }}
        >
          <div className="space-y-5 rounded-2xl border border-border bg-card p-5 shadow-card">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" autoComplete="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Delivery address</Label>
              <Input id="address" name="address" autoComplete="street-address" placeholder="Hotel, villa or beach spot" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Delivery notes</Label>
              <Textarea id="notes" name="notes" placeholder="Gate code, landmark, sunbed number…" rows={3} />
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-card p-5 shadow-card">
            <h2 className="font-display text-lg font-bold">Order summary</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {lines.map((l) => (
                <li key={l.product.id} className="flex justify-between gap-3">
                  <span className="text-muted-foreground">
                    {l.product.name} × {l.qty}
                  </span>
                  <span className="tabular-nums">{price(l.product.price * l.qty)}</span>
                </li>
              ))}
            </ul>
            <dl className="mt-4 space-y-2 border-t border-border pt-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Delivery</dt>
                <dd className="tabular-nums">{price(DELIVERY_FEE)}</dd>
              </div>
              <div className="flex justify-between text-base font-bold">
                <dt>Total</dt>
                <dd className="tabular-nums">{price(total)}</dd>
              </div>
            </dl>
            <Button type="submit" variant="ember" className="mt-5 w-full">
              Pay {price(total)}
            </Button>
          </aside>
        </form>
      )}
    </div>
  );
}
