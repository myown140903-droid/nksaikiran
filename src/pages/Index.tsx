import { Link } from "react-router-dom";
import { ArrowRight, Binoculars, MapPin, TreePine } from "lucide-react";
import { mammals } from "@/data/mammals";
import SpeciesCard from "@/components/SpeciesCard";

const Index = () => {
  const featured = mammals.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src="/images/hero-deer.jpg"
          alt="Red deer stag in the Scottish Highlands"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 flex h-full items-center">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl animate-fade-in-up">
                Scottish Mammal Observations
              </h1>
              <p
                className="mt-4 text-lg leading-relaxed text-primary-foreground/85 sm:text-xl animate-fade-in-up"
                style={{ animationDelay: "150ms" }}
              >
                Recording and monitoring Scotland's diverse mammal species to support conservation and biodiversity research across the Highlands and beyond.
              </p>
              <div
                className="mt-8 flex flex-wrap gap-3 animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                <Link
                  to="/species"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:shadow-elevated hover:brightness-110"
                >
                  Explore Species
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
                >
                  About the Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="container grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { icon: Binoculars, label: "Species Tracked", value: mammals.length },
            {
              icon: MapPin,
              label: "Total Observations",
              value: mammals.reduce((s, m) => s + m.observations.length, 0),
            },
            { icon: TreePine, label: "Habitats Covered", value: "12+" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 px-6 py-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Species */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Featured</p>
              <h2 className="mt-1 font-display text-3xl font-bold text-foreground lg:text-4xl">
                Notable Species
              </h2>
            </div>
            <Link
              to="/species"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              View all species <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((m, i) => (
              <SpeciesCard key={m.id} mammal={m} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/species"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              View all species <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nature-gradient py-16 lg:py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground lg:text-4xl">
            Help Monitor Scotland's Wildlife
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            Every observation contributes to our understanding of mammal populations and helps inform conservation efforts across Scotland.
          </p>
          <Link
            to="/species"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-elevated transition-all hover:brightness-110"
          >
            Browse Species Directory
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
