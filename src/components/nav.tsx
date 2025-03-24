"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Star } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { TennisBallIcon } from "@hugeicons/core-free-icons";

export default function Navigation() {
    const pathname = usePathname();
    
    const navItems = [
      { label: "Home", href: "/home", icon: <HugeiconsIcon icon={TennisBallIcon} height={20} width={20} /> },
      { label: "Following", href: "/following", icon: <Star height={20} width={20} /> },
      { label: "Account", href: "/account", icon: <Menu height={20} width={20} /> },
    ];
  
    return (
      <nav className="sticky bottom-0 w-full h-14 bg-background border-t flex items-center justify-center space-x-4">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            asChild
            className={`text-xs flex flex-col items-between justify-between gap-2 h-full ${
              pathname === item.href
                ? ""
                : "text-muted-foreground"
            }`}
          > 
            <Link href={item.href}>
              {item.icon}
              {item.label}
            </Link>
          </Button>
        ))}
      </nav>
    );
  }