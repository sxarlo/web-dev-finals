"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

// ================= Navbar =================
function Navbar1() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/lookback_logo.jpg"
            alt="Brand Logo"
            width={200}
            height={200}
          />
        </Link>

        <nav className="hidden md:flex gap-8 font-medium">
          <Link href="#" className="hover:text-primary transition-colors">Home</Link>
          <Link href="#" className="hover:text-primary transition-colors">About</Link>
          <Link href="#" className="hover:text-primary transition-colors">Drinks</Link>
          <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* Correct Login/Register button */}
        <div className="hidden md:block">
          <Link href="/login">
            <Button size="sm">Login / Register</Button>
          </Link>
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

          <Link href="/login">
            <Button className="mt-2 w-full">Login / Register</Button>
          </Link>
        </nav>
      )}
    </header>
  );
}

// ================= Hero Section =================
function HeroSection1() {
  return (
    <section className="bg-background py-20" aria-labelledby="hero-heading">
      <div className="px-4 mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        <div className="flex-1 flex flex-col gap-6">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Who are we?</p>
          <h1 id="hero-heading" className="text-4xl font-bold">
            Welcome to LookBack - Your Ultimate Drink Companion
          </h1>
          <p className="text-muted-foreground text-lg">
            We serve moments and create memories. Discover, share, and enjoy your favorite drinks with LookBack.
          </p>
          <div className="flex gap-3 mt-4">
            <Button>About</Button>
            <Button variant="ghost">Explore our drinks <ArrowRight /></Button>
          </div>
        </div>

        <div className="flex-1 relative w-full h-80 lg:h-[400px]">
          <Image
            src="/lookback_hero_img.png"
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
function BentoGrid1() {
  const items = [
    { image: "/img1.png" },
    { image: "/img2.png" },
    { image: "/img3.png" },
    { image: "/img4.png" },
  ];

  return (
    <section className="bg-background py-20">
      <div className="px-4 mx-auto max-w-7xl">

        <h2 className="text-3xl font-bold">Our Galleries</h2>
        <p className="text-muted-foreground mb-8">
          A collection of our best and amazing customers.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-xl border p-4"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ================= Contact Section =================
function ContactSection1() {
  return (
    <section className="bg-background py-20">
      <div className="px-4 mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-16">

        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have a question or want to work together? Send us a message and we&#39;ll get back to you.
          </p>
        </div>

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