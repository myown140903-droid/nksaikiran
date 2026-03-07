import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { mammals } from "@/data/mammals";
import { getStatusClass } from "@/data/mammals";

const statusColors: Record<string, string> = {
  "Least Concern": "#4ade80",
  "Near Threatened": "#facc15",
  "Vulnerable": "#fb923c",
  "Endangered": "#f87171",
};

const MapView = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const [selectedSpecies, setSelectedSpecies] = useState<string>("All");

  const allObservations = mammals.flatMap((m) =>
    m.observations.map((o) => ({ ...o, mammal: m }))
  );

  const filtered =
    selectedSpecies === "All"
      ? allObservations
      : allObservations.filter((o) => o.mammal.id === selectedSpecies);

  useEffect(() => {
    if (!mapRef.current) return;

    if (!mapInstance.current) {
      mapInstance.current = L.map(mapRef.current).setView([57.0, -4.5], 6);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapInstance.current);
    }

    const map = mapInstance.current;

    // Clear existing markers
    map.eachLayer((layer) => {
      if (layer instanceof L.CircleMarker) map.removeLayer(layer);
    });

    // Add markers
    filtered.forEach((obs) => {
      const color = statusColors[obs.mammal.conservationStatus] || "#94a3b8";
      L.circleMarker([obs.lat, obs.lng], {
        radius: 8,
        fillColor: color,
        color: "#1a1a1a",
        weight: 1.5,
        fillOpacity: 0.85,
      })
        .bindPopup(
          `<div style="font-family:system-ui;min-width:180px">
            <strong style="font-size:14px">${obs.mammal.commonName}</strong><br/>
            <em style="font-size:11px;color:#666">${obs.mammal.scientificName}</em>
            <hr style="margin:6px 0;border-color:#e5e5e5"/>
            <b>Location:</b> ${obs.location}<br/>
            <b>Date:</b> ${obs.date}<br/>
            <b>Observer:</b> ${obs.observer}<br/>
            <b>Count:</b> ${obs.count}<br/>
            <span style="font-size:11px;color:#666">${obs.notes}</span>
          </div>`
        )
        .addTo(map);
    });
  }, [filtered]);

  useEffect(() => {
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="border-b border-border bg-card py-8 lg:py-12">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            Observations Map
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Interactive map showing all mammal observation locations across Scotland.
          </p>

          {/* Species filter */}
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedSpecies("All")}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                selectedSpecies === "All"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-secondary"
              }`}
            >
              All Species
            </button>
            {mammals.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedSpecies(m.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  selectedSpecies === m.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-secondary"
                }`}
              >
                {m.commonName}
              </button>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
            {Object.entries(statusColors).map(([status, color]) => (
              <span key={status} className="flex items-center gap-1.5">
                <span
                  className="inline-block h-3 w-3 rounded-full border border-border"
                  style={{ backgroundColor: color }}
                />
                {status}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="flex-1 relative" style={{ minHeight: "500px" }}>
        <div ref={mapRef} className="absolute inset-0" />
      </div>
    </div>
  );
};

export default MapView;
