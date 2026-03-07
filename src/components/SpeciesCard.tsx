import { Link } from "react-router-dom";
import { MapPin, Eye } from "lucide-react";
import type { Mammal } from "@/data/mammals";
import { getStatusClass } from "@/data/mammals";

interface SpeciesCardProps {
  mammal: Mammal;
  index: number;
}

const SpeciesCard = ({ mammal, index }: SpeciesCardProps) => {
  const totalObservations = mammal.observations.reduce((sum, o) => sum + o.count, 0);

  return (
    <Link
      to={`/species/${mammal.id}`}
      className="card-nature group block overflow-hidden rounded-xl bg-card border border-border"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={mammal.image}
          alt={mammal.commonName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <span className={`status-badge ${getStatusClass(mammal.conservationStatus)}`}>
            {mammal.conservationStatus}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
          {mammal.commonName}
        </h3>
        <p className="mt-1 text-sm italic text-muted-foreground">{mammal.scientificName}</p>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {mammal.description}
        </p>
        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            {mammal.observations.length} sightings
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {totalObservations} individuals
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SpeciesCard;
