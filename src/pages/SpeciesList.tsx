import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { mammals } from "@/data/mammals";
import SpeciesCard from "@/components/SpeciesCard";

const statusFilters = ["All", "Least Concern", "Near Threatened", "Vulnerable", "Endangered"] as const;

const SpeciesList = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    return mammals.filter((m) => {
      const matchesSearch =
        m.commonName.toLowerCase().includes(search.toLowerCase()) ||
        m.scientificName.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All" || m.conservationStatus === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border bg-card py-12 lg:py-16">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            Species Directory
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Browse all Scottish mammal species in our observation database. Click on any species to view detailed information and recent sightings.
          </p>

          {/* Search & Filter */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search species..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {statusFilters.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                    statusFilter === s
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 lg:py-16">
        <div className="container">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((m, i) => (
                <SpeciesCard key={m.id} mammal={m} index={i} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">No species found matching your criteria.</p>
              <button
                onClick={() => { setSearch(""); setStatusFilter("All"); }}
                className="mt-4 text-sm font-medium text-accent hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SpeciesList;
