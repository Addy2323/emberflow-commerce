import { Link } from "@tanstack/react-router";
import { Flame, Search, ShoppingBag, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CURRENCIES, useCurrency, type CurrencyCode } from "@/lib/currency";
import { cartCount, useCart } from "@/lib/store/cart";

const LANGUAGES = ["English", "Kiswahili", "Deutsch", "Français", "Italiano", "Español", "Русский"];

export function SiteHeader() {
  const count = useCart((s) => cartCount(s.lines));
  const code = useCurrency((s) => s.code);
  const setCode = useCurrency((s) => s.setCode);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
          <span className="relative grid size-9 place-items-center rounded-xl bg-gradient-ember shadow-ember">
            <Flame className="size-5 text-primary-foreground" aria-hidden />
          </span>
          <span className="hidden sm:inline">
            Nungwi<span className="text-primary">.</span>
          </span>
        </Link>

        <nav aria-label="Main" className="ml-4 hidden items-center gap-1 md:flex">
          <Link
            to="/shop"
            className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            activeProps={{ className: "bg-secondary text-foreground" }}
          >
            Shop
          </Link>
          <Link
            to="/shop"
            search={{ q: "", category: "beer" }}
            className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Beer
          </Link>
          <Link
            to="/shop"
            search={{ q: "", category: "snacks" }}
            className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Party packs
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-1.5">
          <Button variant="ghost" size="icon" asChild aria-label="Search products">
            <Link to="/shop">
              <Search />
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1.5" aria-label="Language and currency">
                <Globe className="size-4" aria-hidden />
                <span className="text-xs font-semibold">{code}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {(Object.keys(CURRENCIES) as CurrencyCode[]).map((c) => (
                <DropdownMenuItem key={c} onSelect={() => setCode(c)}>
                  {c}
                  {c === code && <span className="ml-auto text-primary">✓</span>}
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem disabled className="mt-1 text-[11px] uppercase tracking-wide">
                Languages
              </DropdownMenuItem>
              {LANGUAGES.slice(0, 3).map((l) => (
                <DropdownMenuItem key={l}>{l}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ember" size="sm" asChild className="relative">
            <Link to="/cart" aria-label={`Cart, ${count} items`}>
              <ShoppingBag aria-hidden />
              <span className="hidden sm:inline">Cart</span>
              {count > 0 && (
                <Badge className="ml-1 h-5 min-w-5 justify-center rounded-full bg-ink px-1.5 text-ink-foreground">
                  {count}
                </Badge>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
