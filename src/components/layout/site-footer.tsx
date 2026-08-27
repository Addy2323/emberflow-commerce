import { Link } from "@tanstack/react-router";
import { Flame, MapPin, Clock, ShieldCheck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-display text-lg font-extrabold">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-ember">
              <Flame className="size-4 text-primary-foreground" aria-hidden />
            </span>
            Nungwi Delivery
          </div>
          <p className="text-sm text-muted-foreground">
            Drinks, ice and essentials delivered to your hotel, villa or beach spot in Nungwi, Zanzibar.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <h2 className="font-display text-sm font-bold">Shop</h2>
          <Link to="/shop" className="block text-muted-foreground hover:text-primary">
            All products
          </Link>
          <Link to="/cart" className="block text-muted-foreground hover:text-primary">
            Your cart
          </Link>
          <Link to="/checkout" className="block text-muted-foreground hover:text-primary">
            Checkout
          </Link>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <h2 className="font-display text-sm font-bold text-foreground">Delivery</h2>
          <p className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" aria-hidden /> Nungwi, Kendwa & nearby
          </p>
          <p className="flex items-center gap-2">
            <Clock className="size-4 text-primary" aria-hidden /> 09:00 – 23:30 daily
          </p>
          <p className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-primary" aria-hidden /> 18+ for alcohol & tobacco
          </p>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <h2 className="font-display text-sm font-bold text-foreground">Pay how you like</h2>
          <p>Visa · Mastercard · Apple Pay · Google Pay</p>
          <p>Mobile Money · Cash on delivery</p>
        </div>
      </div>

      <div className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nungwi Delivery. Please drink responsibly.
      </div>
    </footer>
  );
}
