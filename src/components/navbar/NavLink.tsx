interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export function NavLink({ href, label, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
      onClick={onClick}
    >
      {label}
    </a>
  );
}
