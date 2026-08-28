import { createFileRoute, Link } from "@tanstack/react-router";
import { Truck, Package, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePrice } from "@/lib/currency";

const ORDERS = [
  { id: "NG-1042", status: "Out for delivery", items: 6, total: 28.4 },
  { id: "NG-1031", status: "Delivered", items: 3, total: 12.9 },
  { id: "NG-1017", status: "Delivered", items: 11, total: 74.2 },
];

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Your account & orders — Nungwi Drinks Delivery" },
      { name: "description", content: "Track your Nungwi drink deliveries, review past orders and manage addresses." },
      { property: "og:title", content: "Your account & orders — Nungwi" },
      { property: "og:description", content: "Track deliveries and review past drink orders in Nungwi, Zanzibar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  const price = usePrice();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Your account</h1>
      <p className="mt-2 text-sm text-muted-foreground">Demo data — sign-in arrives with the backend.</p>

      <section className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
        <div className="flex items-center gap-3 border-b border-border p-5">
          <Truck className="size-5 text-primary" aria-hidden />
          <div>
            <p className="font-semibold">Order NG-1042 is on the way</p>
            <p className="text-xs text-muted-foreground">Arriving in about 20 minutes</p>
          </div>
        </div>
        <div className="relative h-2 overflow-hidden bg-surface">
          <span className="absolute inset-y-0 left-0 w-1/3 animate-delivery-move rounded-full bg-gradient-ember" />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-xl font-bold">Recent orders</h2>
        <ul className="mt-4 space-y-3">
          {ORDERS.map((o) => (
            <li
              key={o.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4 shadow-card"
            >
              <div className="flex items-center gap-3">
                <Package className="size-5 text-muted-foreground" aria-hidden />
                <div>
                  <p className="font-semibold">{o.id}</p>
                  <p className="text-xs text-muted-foreground">{o.items} items</p>
                </div>
              </div>
              <Badge variant={o.status === "Delivered" ? "secondary" : "default"}>{o.status}</Badge>
              <span className="font-semibold tabular-nums">{price(o.total)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-border bg-card p-5 shadow-card">
        <h2 className="flex items-center gap-2 font-display text-xl font-bold">
          <MapPin className="size-5 text-primary" aria-hidden />
          Saved address
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">Beach villa 12, Nungwi, Zanzibar</p>
        <Button variant="outline" size="sm" className="mt-4" asChild>
          <Link to="/shop">Order again</Link>
        </Button>
      </section>
    </div>
  );
}
