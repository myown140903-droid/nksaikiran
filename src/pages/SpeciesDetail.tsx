import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, User, Hash } from "lucide-react";
import { mammals, getStatusClass } from "@/data/mammals";

const SpeciesDetail = () => {
  const { id } = useParams<{ id: string }>();
  const mammal = mammals.find((m) => m.id === id);

  if (!mammal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">Species Not Found</h1>
          <Link to="/species" className="mt-4 inline-flex items-center gap-1 text-sm text-accent hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to directory
          </Link>
        </div>
      </div>
    );
  }

  const totalCount = mammal.observations.reduce((s, o) => s + o.count, 0);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={mammal.image} alt={mammal.commonName} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 flex h-full items-end pb-8">
          <div className="container">
            <Link
              to="/species"
              className="mb-4 inline-flex items-center gap-1 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Species Directory
            </Link>
            <h1 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              {mammal.commonName}
            </h1>
            <p className="mt-1 text-lg italic text-primary-foreground/70">{mammal.scientificName}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground">About</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{mammal.description}</p>
              </div>

              {/* Observations Table */}
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Recent Observations
                  <span className="ml-2 text-base font-normal text-muted-foreground">
                    ({mammal.observations.length} records, {totalCount} individuals)
                  </span>
                </h2>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Date</th>
                        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Location</th>
                        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Observer</th>
                        <th className="px-4 py-3 text-center font-medium text-muted-foreground">Count</th>
                        <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mammal.observations.map((obs) => (
                        <tr key={obs.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className="flex items-center gap-1.5 text-foreground">
                              <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                              {new Date(obs.date).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <span className="flex items-center gap-1.5 text-foreground">
                              <MapPin className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                              {obs.location}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <span className="flex items-center gap-1.5 text-foreground">
                              <User className="h-3.5 w-3.5 text-muted-foreground" />
                              {obs.observer}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                              <Hash className="h-3 w-3" />
                              {obs.count}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-muted-foreground hidden md:table-cell max-w-xs truncate">
                            {obs.notes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">Species Info</h3>
                <dl className="space-y-4">
                  {[
                    { label: "Conservation Status", value: mammal.conservationStatus, badge: true },
                    { label: "Habitat", value: mammal.habitat },
                    { label: "Diet", value: mammal.diet },
                    { label: "Weight", value: mammal.weight },
                    { label: "Length", value: mammal.length },
                    { label: "Lifespan", value: mammal.lifespan },
                  ].map((item) => (
                    <div key={item.label} className="border-b border-border pb-3 last:border-0 last:pb-0">
                      <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </dt>
                      <dd className="mt-1">
                        {item.badge ? (
                          <span className={`status-badge ${getStatusClass(mammal.conservationStatus)}`}>
                            {item.value}
                          </span>
                        ) : (
                          <span className="text-sm text-foreground">{item.value}</span>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpeciesDetail;
