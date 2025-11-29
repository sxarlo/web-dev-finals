"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

// ================= Navbar =================
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

// ================= Hero Section =================
export function HeroSection1() {
  return (
    <section className="bg-background py-20" aria-labelledby="hero-heading">
      <div className="px-4 mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Hero Section</p>
          <h1 id="hero-heading" className="text-4xl font-bold">
            Headline that solves users main problem
          </h1>
          <p className="text-muted-foreground text-lg">
            Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now.
          </p>
          <div className="flex gap-3 mt-4">
            <Button>Get Started</Button>
            <Button variant="ghost">Explore <ArrowRight /></Button>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 relative w-full h-80 lg:h-[400px]">
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

// ================= Bento Grid =================
export function BentoGrid1() {
  const items = [
    { title: "Feature One", description: "Brief description of feature one.", image: "https://ui.shadcn.com/placeholder.svg" },
    { title: "Feature Two", description: "Brief description of feature two.", image: "https://ui.shadcn.com/placeholder.svg" },
    { title: "Feature Three", description: "Brief description of feature three.", image: "https://ui.shadcn.com/placeholder.svg" },
    { title: "Feature Four", description: "Brief description of feature four.", image: "https://ui.shadcn.com/placeholder.svg" },
  ];

  return (
    <section className="bg-background py-20">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold mb-8">Our Features</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 rounded-xl border p-4">
              <div className="relative w-full h-40">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ================= Contact Section =================
export function ContactSection1() {
  return (
    <section className="bg-background py-20">
      <div className="px-4 mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have a question or want to work together? Send us a message and well get back to you.
          </p>
        </div>

        {/* Right - Form */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-md p-3 w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-md p-3 w-full"
            />
            <textarea
              placeholder="Your Message"
              className="border rounded-md p-3 w-full h-32"
            ></textarea>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ================= Page =================
export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar1 />
      <HeroSection1 />
      <BentoGrid1 />
      <ContactSection1 />
    </div>
  );
}
