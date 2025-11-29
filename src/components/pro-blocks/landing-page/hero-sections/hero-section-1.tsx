"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

export function Navbar1() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-semibold">Brand</Link>
        <nav className="hidden md:flex gap-8">
          <Link href="#">Features</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </nav>
        <div className="hidden md:block">
          <Button size="sm">Get Started</Button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t px-4 py-6 md:hidden">
          <Link href="#">Features</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Button className="mt-2 w-full">Get Started</Button>
        </nav>
      )}
    </header>
  );
}

export function HeroSection1() {
  return (
    <section className="bg-background py-20" aria-labelledby="hero-heading">
      <div className="px-4 mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Hero Section</p>
          <h1 id="hero-heading" className="text-4xl font-bold">Headline that solves user main problem</h1>
          <p className="text-muted-foreground text-lg">
            Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now.
          </p>
          <div className="flex gap-3 mt-4">
            <Button>Get Started</Button>
            <Button variant="ghost">Explore <ArrowRight /></Button>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 relative w-full" style={{ paddingTop: "100%" }}>
          <Image
            src="https://ui.shadcn.com/placeholder.svg"
            alt="Hero section visual"
            fill
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar1 />
      <HeroSection1 />
    </div>
  );
}
