import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "./NavLink";

interface MobileMenuProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const NavLinks = [
  { href: "/home", label: "Home" },
  { href: "/showUser", label: "User" },
  { href: "/services", label: "Serviços" },
  { href: "/contact", label: "Contato" },
];

export function MobileMenu({ isOpen, onOpenChange }: MobileMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-muted">
            <div className="space-y-2 py-6">
              {NavLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  onClick={() => onOpenChange(false)}
                />
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
