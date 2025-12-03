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
    <header className="fixed top-0 left-0 w-full border-b bg-background z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/lookback_logo.jpg"
            alt="Brand Logo"
            width={200}
            height={200}
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-8 font-medium">
          <Link href="#hero-section" className="hover:text-primary transition-colors">Home</Link>
          <Link href="#about-section" className="hover:text-primary transition-colors">About</Link>
          <Link href="#drinks-section" className="hover:text-primary transition-colors">Drinks</Link>
          <Link href="#contact-section" className="hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* Login / Register button */}
        <div className="hidden md:block">
          <Link href="/login">
            <Button size="sm">Login / Register</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Links */}
      {open && (
        <nav className="flex flex-col gap-4 border-t px-4 py-6 md:hidden font-medium">
          <Link href="#hero-section">Home</Link>
          <Link href="#about-section">About</Link>
          <Link href="#drinks-section">Drinks</Link>
          <Link href="#contact-section">Contact</Link>

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
    <section id="hero-section" className="bg-background py-24" aria-labelledby="hero-heading">
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

// ================= Features / Bento =================
function BentoShowcase1() {
  const items = [
    {
      title: "Juice Drinks",
      desc: "Freshly squeezed juices made from seasonal fruits.",
      src: "/drink1.jpg",
      span: "lg:col-span-4 lg:row-span-2",
    },
    {
      title: "Matcha Latte",
      desc: "Creamy matcha with just the right sweetness.",
      src: "/drink2.jpg",
      span: "lg:col-span-4 lg:row-span-1",
    },
    {
      title: "Iced Americano",
      desc: "Bold espresso, chilled and perfectly balanced.",
      src: "/drink3.jpg",
      span: "lg:col-span-2 lg:row-span-1",
    },
    {
      title: "Iced Coffee",
      desc: "Smooth cold-brew style coffee for any time of day.",
      src: "/drink4.jpg",
      span: "lg:col-span-2 lg:row-span-1",
    },
  ];

  return (
    <section id="drinks-section" className="bg-muted py-20">
      <div className="px-4 mx-auto max-w-7xl flex flex-col gap-10 md:gap-12">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <h2 className="text-3xl font-bold">
            Features that make LookBack your go-to drink companion
          </h2>
          <p className="text-muted-foreground mt-2">
            Explore the innovative features that set LookBack apart.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-6"
          style={{ gridAutoRows: "160px" }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`${item.span} relative overflow-hidden rounded-xl border bg-background`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute left-4 bottom-4 z-10 pointer-events-auto w-[90%]">
                <h3 className="text-lg font-semibold text-white drop-shadow">{item.title}</h3>
                <p className="text-sm text-white/90">{item.desc}</p>
              </div>
            </div>
          ))}
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
    <section id="about-section" className="bg-background py-20">
      <div className="px-4 mx-auto max-w-7xl">

        <h2 className="text-3xl font-bold">Our Galleries</h2>
        <p className="text-muted-foreground mb-8">
          A collection of our best and amazing customers.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 rounded-xl border p-4">
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
    <section id="contact-section" className="bg-background py-20">
      <div className="px-4 mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-16">

        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have a question or want to work together? Send us a message and we&#39;ll get back to you.
          </p>
        </div>

        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="border rounded-md p-3 w-full" />
            <input type="email" placeholder="Your Email" className="border rounded-md p-3 w-full" />
            <textarea placeholder="Your Message" className="border rounded-md p-3 w-full h-32"></textarea>
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
    <div className="min-h-screen pt-16">
      <Navbar1 />
      <HeroSection1 />
      <BentoGrid1 />
      <BentoShowcase1 />
      <ContactSection1 />
    </div>
  );
}