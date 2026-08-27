import { Link } from "@tanstack/react-router";
import { Home, Store, ShoppingBag, User } from "lucide-react";

import { cartCount, useCart } from "@/lib/store/cart";

const linkClass =
  "flex flex-1 flex-col items-center gap-1 py-2 text-[11px] font-medium text-muted-foreground transition-colors";

export function MobileNav() {
  const count = useCart((s) => cartCount(s.lines));

  return (
    <nav
      aria-label="Mobile"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
    >
      <div className="mx-auto flex max-w-md items-stretch">
        <Link to="/" className={linkClass} activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>
          <Home className="size-5" aria-hidden />
          Home
        </Link>
        <Link to="/shop" className={linkClass} activeProps={{ className: "text-primary" }}>
          <Store className="size-5" aria-hidden />
          Shop
        </Link>
        <Link to="/cart" className={linkClass} activeProps={{ className: "text-primary" }}>
          <span className="relative">
            <ShoppingBag className="size-5" aria-hidden />
            {count > 0 && (
              <span className="absolute -right-2 -top-1 grid size-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </span>
          Cart
        </Link>
        <Link to="/account" className={linkClass} activeProps={{ className: "text-primary" }}>
          <User className="size-5" aria-hidden />
          Account
        </Link>
      </div>
    </nav>
  );
}
