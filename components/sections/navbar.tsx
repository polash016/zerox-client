"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { nav, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-16 px-5 sm:px-10 lg:px-20 flex items-center justify-between transition-all duration-300",
        scrolled
          ? "bg-paper/85 backdrop-blur-xl backdrop-saturate-150 border-b border-rule"
          : "bg-transparent",
      )}
    >
      <Link
        href="#hero"
        className="flex items-center gap-2"
        aria-label={`${siteConfig.name} home`}
      >
        <Image
          src="/logo.svg"
          alt={siteConfig.name}
          width={100}
          height={32}
          className="h-8 w-auto"
          priority
        />
      </Link>

      <ul className="hidden md:flex items-center gap-7">
        {nav.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm font-medium text-ink-3 hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <Button asChild size="sm">
            <a href="#contact">Book a Call</a>
          </Button>
        </li>
      </ul>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-rule/60"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </SheetTrigger>
        <SheetContent className="bg-white">
          <SheetTitle className="sr-only">Site navigation</SheetTitle>
          <div className="flex items-center justify-between">
            <Link
              href="#hero"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2"
            >
              <Image
                src="/logo.svg"
                alt={siteConfig.name}
                width={100}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <SheetClose asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-rule/60"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </SheetClose>
          </div>
          <ul className="mt-8 flex flex-col gap-5">
            {nav.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-bold text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto pb-4">
            <Button asChild size="lg" className="w-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                Book a Call
              </a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
