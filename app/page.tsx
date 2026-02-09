"use client";

import React from "react"

import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  BookOpen,
  Sparkles,
  Palette,
  ChevronDown,
  Mail,
} from "lucide-react";

const characters = [
  {
    name: "Elara Voss",
    description:
      "She knows everyone's secrets — except the one that will undo her.",
    image: "/images/char-elara.jpg",
  },
  {
    name: "Julian Thorne",
    description:
      "Behind the charm lies a past he's spent years trying to bury.",
    image: "/images/char-julian.jpg",
  },
  {
    name: "Maren Lindqvist",
    description:
      "Calm, composed, and hiding something behind those knowing eyes.",
    image: "/images/char-maren.jpg",
  },
  {
    name: "Ren Alcazar",
    description:
      "The only one who tells the truth — and nobody believes him.",
    image: "/images/char-ren.jpg",
  },
];

const scenes = [
  {
    src: "/images/scene-cafe.jpg",
    alt: "An intimate candlelit cafe scene between two characters",
  },
  {
    src: "/images/scene-garden.jpg",
    alt: "A moonlit secret garden shrouded in mystery",
  },
  {
    src: "/images/scene-library.jpg",
    alt: "Two figures discovering secrets in an ancient library",
  },
];

const features = [
  {
    icon: BookOpen,
    title: "Deep Emotional Storytelling",
    description:
      "Every conversation carries weight. Every silence speaks volumes. A narrative crafted to be felt, not just read.",
  },
  {
    icon: Sparkles,
    title: "Meaningful Choices",
    description:
      "Your decisions shape relationships, reveal truths, and alter the course of the story in ways you won't expect.",
  },
  {
    icon: Heart,
    title: "Romance Woven with Mystery",
    description:
      "Love and suspicion intertwine. Trust is fragile. The closer you get to someone, the more you have to lose.",
  },
  {
    icon: Palette,
    title: "Beautiful Illustrated Art",
    description:
      "Every scene is a painting. Soft light, rich detail, and an atmosphere that draws you deeper into the world.",
  },
];

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="A romantic moonlit balcony scene"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-muted-foreground text-sm mb-6">
          A Game of Romance and Mystery
        </p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-foreground text-balance">
          Secret Knot
        </h1>
        <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-xl mx-auto text-pretty">
          Some bonds are forged in silence. Some truths are hidden in plain
          sight. Step into a world where every whisper could be a confession —
          or a lie.
        </p>
        <div className="mt-10">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Get Notified
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="uppercase tracking-[0.25em] text-primary text-xs mb-4">
          The World
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
          Where Secrets Live Between the Words
        </h2>
        <div className="mt-10 space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
          <p>
            In a coastal town caught between old-world elegance and quiet decay,
            four lives collide. A letter arrives that was never meant to be
            found. A name resurfaces that everyone agreed to forget.
          </p>
          <p>
            You are drawn into their world — a place where trust is currency,
            affection is a weapon, and the distance between a kiss and a
            betrayal is thinner than you think.
          </p>
          <p className="text-foreground/80 font-serif text-xl md:text-2xl italic">
            {
              "\"The truth doesn't set you free here. It binds you tighter.\""
            }
          </p>
        </div>
      </div>
    </section>
  );
}

function CharactersSection() {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.25em] text-primary text-xs mb-4">
            The Cast
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
            Everyone Has Something to Hide
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((char) => (
            <div key={char.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                <Image
                  src={char.image || "/placeholder.svg"}
                  alt={`Portrait of ${char.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <h3 className="font-serif text-xl text-foreground">
                {char.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {char.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.25em] text-primary text-xs mb-4">
            Scenes
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
            Moments That Linger
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {scenes.map((scene, i) => (
            <div
              key={scene.src}
              className={`relative overflow-hidden rounded-lg ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  i === 0 ? "aspect-[4/3]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={scene.src || "/placeholder.svg"}
                  alt={scene.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.25em] text-primary text-xs mb-4">
            The Experience
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
            {"Why You'll Fall In"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-5 p-6 rounded-xl bg-card/50 border border-border/50"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="py-28 md:py-36 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="uppercase tracking-[0.25em] text-primary text-xs mb-4">
          Coming Soon
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
          Be the First to Know
        </h2>
        <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg mx-auto">
          Secret Knot is in development. Leave your email and we will let you
          know the moment the story begins.
        </p>

        {submitted ? (
          <div className="mt-10 p-6 rounded-xl bg-card/50 border border-border/50">
            <Heart className="w-6 h-6 text-accent mx-auto mb-3" />
            <p className="font-serif text-xl text-foreground">
              {"You're on the list."}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {"We'll be in touch when the time is right."}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
          >
            <label htmlFor="email-input" className="sr-only">
              Email address
            </label>
            <input
              id="email-input"
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full flex-1 px-5 py-3 rounded-full bg-secondary text-foreground placeholder:text-muted-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Notify Me
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-lg text-foreground">Secret Knot</p>
        <p className="text-xs text-muted-foreground">
          {"2026 Secret Knot. All rights reserved."}
        </p>
      </div>
    </footer>
  );
}

export default function SecretKnotLanding() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <CharactersSection />
      <GallerySection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
