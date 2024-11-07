import * as React from "react";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";

const NavLinks = [
  { href: "/home", label: "Home" },
  { href: "/showUser", label: "User" },
  { href: "/services", label: "Serviços" },
  { href: "/contact", label: "Contato" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-primary">
            Logo
          </a>
          <div className="hidden md:flex space-x-4 ml-10">
            {NavLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>
          <div className="md:hidden">
            <MobileMenu
              isOpen={isMobileMenuOpen}
              onOpenChange={setIsMobileMenuOpen}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
