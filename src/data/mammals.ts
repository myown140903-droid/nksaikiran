export interface Observation {
  id: number;
  location: string
  lat: number;
  lng: number;
  date: string;
  observer: string;
  count: number;
  notes: string;
}

export interface Mammal {
  id: string;
  commonName: string;
  scientificName: string;
  image: string;
  description: string;
  habitat: string;
  diet: string;
  conservationStatus: "Least Concern" | "Near Threatened" | "Vulnerable" | "Endangered";
  weight: string;
  length: string;
  lifespan: string;
  observations: Observation[];
}

export const mammals: Mammal[] = [
  {
    id: "red-deer",
    commonName: "Red Deer",
    scientificName: "Cervus elaphus",
    image: "/images/hero-deer.jpg",
    description:
      "The red deer is the UK's largest native land mammal and an iconic symbol of the Scottish Highlands. Males (stags) grow impressive antlers each year, which they use during the autumn rut to compete for females. They are found across much of Scotland, from the Highlands to the lowland forests.",
    habitat: "Moorland, woodland, mountainous areas",
    diet: "Grasses, heather, tree shoots, bark",
    conservationStatus: "Least Concern",
    weight: "90–190 kg (male), 60–120 kg (female)",
    length: "165–260 cm",
    lifespan: "Up to 18 years",
    observations: [
      { id: 1, location: "Glen Coe, Highland", lat: 56.6833, lng: -5.0833, date: "2026-02-15", observer: "J. MacLeod", count: 12, notes: "Large herd grazing on hillside, including 3 stags" },
      { id: 2, location: "Cairngorms NP", lat: 57.0667, lng: -3.6333, date: "2026-01-28", observer: "S. Fraser", count: 8, notes: "Group near pine woodland edge at dawn" },
      { id: 3, location: "Isle of Rum", lat: 57.0000, lng: -6.3333, date: "2026-02-20", observer: "A. Campbell", count: 25, notes: "Mixed herd with calves from last season" },
      { id: 4, location: "Torridon, Highland", lat: 57.5500, lng: -5.5167, date: "2026-01-10", observer: "M. Stewart", count: 5, notes: "Stags on ridgeline, silhouetted against sunset" },
    ],
  },
  {
    id: "red-squirrel",
    commonName: "Red Squirrel",
    scientificName: "Sciurus vulgaris",
    image: "/images/red-squirrel.jpg",
    description:
      "Scotland is one of the last strongholds for the red squirrel in the UK. These agile creatures are smaller than the invasive grey squirrel and are distinguished by their russet fur and characteristic ear tufts. They are primarily found in Caledonian pine forests.",
    habitat: "Coniferous and mixed woodland",
    diet: "Pine seeds, hazelnuts, fungi, berries",
    conservationStatus: "Near Threatened",
    weight: "270–360 g",
    length: "18–24 cm (plus 17–18 cm tail)",
    lifespan: "3–7 years",
    observations: [
      { id: 5, location: "Abernethy Forest, Cairngorms", lat: 57.2333, lng: -3.6667, date: "2026-02-12", observer: "L. Gordon", count: 3, notes: "Feeding on pine cones at supplementary feeder" },
      { id: 6, location: "Formby, Merseyside", lat: 53.5500, lng: -3.0667, date: "2026-01-30", observer: "P. Williams", count: 2, notes: "Pair chasing through canopy" },
      { id: 7, location: "Kidland Forest, Northumberland", lat: 55.4000, lng: -2.2000, date: "2026-02-05", observer: "R. Henderson", count: 1, notes: "Single individual burying hazelnuts" },
    ],
  },
  {
    id: "eurasian-otter",
    commonName: "Eurasian Otter",
    scientificName: "Lutra lutra",
    image: "/images/otter.jpg",
    description:
      "Scotland's rivers and coastlines provide vital habitat for the Eurasian otter. Once nearly lost to pollution, otters have made a remarkable recovery in Scottish waterways. They are largely solitary and crepuscular, most active at dawn and dusk.",
    habitat: "Rivers, lochs, coastal areas",
    diet: "Fish, crustaceans, amphibians",
    conservationStatus: "Near Threatened",
    weight: "7–12 kg",
    length: "55–80 cm (plus 35–45 cm tail)",
    lifespan: "Up to 10 years",
    observations: [
      { id: 8, location: "Isle of Mull", lat: 56.4500, lng: -5.9500, date: "2026-02-18", observer: "K. MacDonald", count: 1, notes: "Otter feeding on shore-caught crab" },
      { id: 9, location: "River Spey, Moray", lat: 57.3333, lng: -3.3333, date: "2026-01-22", observer: "D. Ross", count: 2, notes: "Female with cub, fishing in shallows" },
      { id: 10, location: "Loch Lomond", lat: 56.0833, lng: -4.6333, date: "2026-02-01", observer: "F. Murray", count: 1, notes: "Brief sighting at dawn, spraint found nearby" },
    ],
  },
  {
    id: "scottish-wildcat",
    commonName: "Scottish Wildcat",
    scientificName: "Felis silvestris",
    image: "/images/wildcat.jpg",
    description:
      "The Scottish wildcat is Britain's rarest mammal and most endangered wild carnivore. Often called the 'Highland Tiger', they resemble large tabby cats but are more muscular with distinctive thick, ringed tails. Hybridisation with domestic cats is a major threat.",
    habitat: "Woodland, scrubland, moorland margins",
    diet: "Rabbits, rodents, birds",
    conservationStatus: "Endangered",
    weight: "3.5–7 kg",
    length: "48–68 cm (plus 26–35 cm tail)",
    lifespan: "Up to 15 years",
    observations: [
      { id: 11, location: "Ardnamurchan, Highland", lat: 56.7333, lng: -6.1000, date: "2026-02-08", observer: "I. MacKenzie", count: 1, notes: "Camera trap image, confirmed pure wildcat markings" },
      { id: 12, location: "Cairngorms NP", lat: 57.0500, lng: -3.6500, date: "2026-01-15", observer: "C. Grant", count: 1, notes: "Fleeting sighting at forest edge, dusk" },
    ],
  },
  {
    id: "pine-marten",
    commonName: "Pine Marten",
    scientificName: "Martes martes",
    image: "/images/pine-marten.jpg",
    description:
      "Once persecuted almost to extinction in Britain, the pine marten has staged a comeback in Scotland's forests. These cat-sized members of the weasel family are excellent climbers with a distinctive cream-coloured throat patch. Their recovery may be helping red squirrels by preying on grey squirrels.",
    habitat: "Deciduous and coniferous woodland",
    diet: "Small mammals, birds, berries, insects",
    conservationStatus: "Least Concern",
    weight: "1.1–2.2 kg",
    length: "45–58 cm (plus 16–28 cm tail)",
    lifespan: "Up to 11 years",
    observations: [
      { id: 13, location: "Glen Affric, Highland", lat: 57.2833, lng: -5.0333, date: "2026-02-22", observer: "N. Sinclair", count: 1, notes: "Seen raiding bird feeder at holiday cottage" },
      { id: 14, location: "Galloway Forest Park", lat: 55.1000, lng: -4.4000, date: "2026-01-18", observer: "B. Thomson", count: 2, notes: "Pair spotted at den site in old pine" },
      { id: 15, location: "Black Isle, Highland", lat: 57.5833, lng: -4.2333, date: "2026-02-10", observer: "E. Gunn", count: 1, notes: "Crossing road at night, eye-shine in headlights" },
    ],
  },
  {
    id: "mountain-hare",
    commonName: "Mountain Hare",
    scientificName: "Lepus timidus",
    image: "/images/mountain-hare.jpg",
    description:
      "The mountain hare is Scotland's only native hare species. Remarkably adapted to upland environments, they moult from brown to white each winter for camouflage against snow. They are found primarily in the Scottish Highlands and on some islands.",
    habitat: "Upland moorland, mountain plateaux",
    diet: "Heather, grasses, sedges",
    conservationStatus: "Least Concern",
    weight: "2–5.5 kg",
    length: "43–61 cm",
    lifespan: "Up to 9 years",
    observations: [
      { id: 16, location: "Cairngorm plateau", lat: 57.1167, lng: -3.6333, date: "2026-02-25", observer: "T. Sutherland", count: 4, notes: "White winter pelage, sitting in snow hollows" },
      { id: 17, location: "Ben Lawers, Perthshire", lat: 56.5500, lng: -4.2167, date: "2026-01-20", observer: "G. Munro", count: 2, notes: "Moulting coat, patchy brown and white" },
      { id: 18, location: "Angus Glens", lat: 56.8833, lng: -3.1500, date: "2026-02-14", observer: "H. Ogilvie", count: 6, notes: "Group feeding on heather shoots at dusk" },
    ],
  },
];

export const getStatusClass = (status: Mammal["conservationStatus"]): string => {
  switch (status) {
    case "Least Concern": return "status-least-concern";
    case "Near Threatened": return "status-near-threatened";
    case "Vulnerable": return "status-vulnerable";
    case "Endangered": return "status-endangered";
  }
};
