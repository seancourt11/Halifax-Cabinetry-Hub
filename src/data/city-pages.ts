/**
 * City-page data for Hempston's regional "custom cabinetry in <city>" SEO pages.
 * Each entry powers a route rendered by `CityCabinetryPage`.
 */

export type CityFaq = { q: string; a: string };

export type CityPageData = {
  slug: string; // matches file route, e.g. "custom-cabinetry-toronto"
  city: string;
  province: string; // long form, e.g. "Ontario"
  provinceCode: string; // e.g. "ON"
  region: string; // regional descriptor, e.g. "the GTA"
  countryCode: "CA" | "US";
  eyebrow: string; // hero eyebrow, e.g. "Toronto · Ontario"
  heroTitle: string[]; // lines
  heroLead: string;
  introHeadline: string;
  introBody: string[]; // paragraphs
  taxNote: string; // e.g. "HST 15%" / "GST 5% + PST 7%"
  permitAuthority: string; // e.g. "the City of Toronto"
  permitUrl: string;
  neighbourhoods: string[];
  regions: string[];
  keywords: string;
  testimonials: { quote: string; name: string; place: string }[];
  faqExtra?: CityFaq[]; // city-specific extras merged with shared FAQs
  geo: { lat: number; lng: number };
  areaAliases?: string[]; // extra cities in service area
};

// -------- shared, mildly localized helpers --------

function baseFaqs(d: {
  city: string;
  province: string;
  region: string;
  taxNote: string;
  permitAuthority: string;
  permitUrl: string;
  areas: string[];
}): CityFaq[] {
  const areaList = d.areas.slice(0, 8).join(", ");
  return [
    {
      q: `How much does custom cabinetry cost in ${d.city}?`,
      a: `Custom cabinetry in ${d.city} typically ranges from $30,000 to $90,000+ for a full kitchen, depending on the size of the space, door style, wood species, hardware, and complexity. Smaller commissions like a single vanity or a run of built-ins usually start between $4,500 and $14,000. Because every Hempston project is made to measure, we provide a fully itemised written quote after your ${d.city} design consultation — no vague estimates, no surprise line items.`,
    },
    {
      q: `How long does a custom kitchen project take in ${d.city}?`,
      a: `From your first design consultation to installation, most ${d.city} kitchens take 8 to 16 weeks. Design and approvals usually take 2 to 4 weeks, fabrication in our workshop 5 to 10 weeks, and installation 3 to 7 days on site. We confirm your timeline in writing before any deposit is taken.`,
    },
    {
      q: `What is the difference between custom, semi-custom, and stock cabinets?`,
      a: `Stock cabinets come in fixed sizes off the shelf and rarely fit ${d.city} homes perfectly. Semi-custom offers limited modifications to standard boxes. Fully custom cabinetry — what Hempston builds — is designed and fabricated specifically for your room, your storage needs, and your chosen materials, with no filler panels or compromises. Custom cabinetry maximises every inch and lasts for decades.`,
    },
    {
      q: `Do you serve areas outside downtown ${d.city}?`,
      a: `Yes. We design and install custom cabinetry throughout ${d.region}, including ${areaList} and surrounding communities across ${d.province}.`,
    },
    {
      q: "What materials and finishes do you offer?",
      a: "We work with solid hardwoods such as walnut, white oak, maple, and cherry, along with premium plywood casework, painted MDF for crisp Shaker and inset styles, and a wide range of hand-applied stains, lacquers, and conversion finishes. Soft-close doors and drawers, dovetailed solid-wood drawer boxes, and quality European hardware are standard on every Hempston project.",
    },
    {
      q: "Are your cabinets made locally?",
      a: `Every piece is designed and hand-built by our team in our Canadian workshops — never imported flat-pack. We install coast to coast, and each project ships fully pre-staged and quality-checked before it leaves the shop, so on-site work in ${d.city} is precise and fast.`,
    },
    {
      q: "Do you offer kitchen design services?",
      a: "Yes. Design is built into every Hempston project. Our kitchen designers handle the full layout — work triangle, island placement, storage zones, lighting, and appliance planning — and provide scaled drawings, 3D renderings, and material samples so you can see and feel your new kitchen before we build it.",
    },
    {
      q: "Can you build any cabinet style or colour?",
      a: "Yes. Hempston is a 100% custom cabinet maker — you are never limited to a fixed catalogue. The door profiles, inset styles, and finishes shown on our site are just a sample. We build virtually any door style, wood species, paint colour, or stain — from modern handleless slabs to classic beaded inset — and can match a reference photo or an existing piece in your home.",
    },
    {
      q: "Do you offer a warranty on custom cabinetry?",
      a: "We stand behind our craftsmanship with a comprehensive workmanship warranty, and we pass along manufacturer warranties on hardware and finishes. Full details are provided in writing with your project agreement.",
    },
    {
      q: `Do I need a permit for a kitchen renovation in ${d.city}?`,
      a: `Simply replacing cabinetry usually doesn't require a permit, but a full kitchen renovation that moves plumbing, electrical, or walls typically does need a permit from ${d.permitAuthority}. We coordinate with your contractor and can point you to official building-permit information at ${d.permitUrl} so the cabinetry side of your project stays fully compliant.`,
    },
    {
      q: `Is ${d.taxNote.split(" ")[0]} included in your ${d.city} quotes?`,
      a: `Our itemised, written quotes clearly show pricing and applicable ${d.province} tax (${d.taxNote}) before any deposit, so you always know your total investment up front — no vague estimates or surprise add-ons.`,
    },
  ];
}

// -------- city registry --------

// Maritimes + St. John's
const moncton: CityPageData = {
  slug: "custom-cabinetry-moncton",
  city: "Moncton",
  province: "New Brunswick",
  provinceCode: "NB",
  region: "Greater Moncton",
  countryCode: "CA",
  eyebrow: "Moncton · New Brunswick",
  heroTitle: ["Custom Kitchen", "Cabinetry in", "Moncton"],
  heroLead:
    "Hempston designs and handcrafts bespoke kitchen cabinetry, vanities, and built-ins for Moncton, Dieppe, Riverview and homes across New Brunswick — made to measure, never flat-packed.",
  introHeadline: "Cabinetry designed for how Moncton really lives",
  introBody: [
    "A century-old home on Mountain Road, a modern build in Riverview, a coastal cottage near Shediac — no two Greater Moncton homes are alike, and stock cabinetry almost never fits. Hempston designs and builds custom cabinetry in Moncton from the ground up, shaping every cabinet, drawer, and surface around your space and how you live.",
    "From first measurement to final reveal, every project is handled by craftspeople who care about the joints you'll never see as much as the doors you open every day.",
  ],
  taxNote: "HST 15%",
  permitAuthority: "the City of Moncton",
  permitUrl: "moncton.ca",
  neighbourhoods: [
    "Downtown Moncton",
    "West End",
    "North End",
    "Dieppe",
    "Riverview",
    "Sunny Brae",
    "Lewisville",
    "Shediac Road",
  ],
  regions: [
    "Shediac",
    "Sackville",
    "Amherst",
    "Cocagne",
    "Bouctouche",
    "Miramichi",
    "Fredericton corridor",
    "Cape Jourimain",
  ],
  keywords:
    "custom cabinetry Moncton, custom kitchens New Brunswick, kitchen cabinets Moncton NB, kitchen design Moncton, kitchen designer New Brunswick, cabinet maker Moncton, kitchen renovation Moncton, bespoke cabinetry New Brunswick, custom built-ins Moncton, custom bathroom vanity NB, Shaker kitchen New Brunswick, white oak kitchen Moncton",
  testimonials: [
    { quote: "Our new Moncton kitchen fits like it was always meant to be there. Every drawer, every door — flawless.", name: "Amélie & Marc L.", place: "Dieppe, NB" },
    { quote: "Hempston made a heritage West End reno feel effortless. Beautiful millwork, on schedule.", name: "Jennifer P.", place: "West End, Moncton" },
    { quote: "The built-ins in our Riverview home are furniture, not cabinets.", name: "Chris & Dana W.", place: "Riverview, NB" },
  ],
  geo: { lat: 46.0878, lng: -64.7782 },
};

const charlottetown: CityPageData = {
  slug: "custom-cabinetry-charlottetown",
  city: "Charlottetown",
  province: "Prince Edward Island",
  provinceCode: "PE",
  region: "Prince Edward Island",
  countryCode: "CA",
  eyebrow: "Charlottetown · PEI",
  heroTitle: ["Custom Kitchen", "Cabinetry in", "Charlottetown"],
  heroLead:
    "Bespoke kitchen cabinetry, vanities, and built-ins for Charlottetown, Stratford, Cornwall and homes across Prince Edward Island — hand-drawn, hand-built, hand-finished.",
  introHeadline: "Cabinetry designed for Island homes",
  introBody: [
    "From heritage homes on Great George Street to new builds in Stratford, Prince Edward Island rewards cabinetry that respects character and stands up to Maritime weather. Hempston designs and hand-builds custom kitchens and millwork in Charlottetown from the ground up — every joint, drawer and surface made to measure.",
    "You'll work with the same team from consultation to install, and the cabinetry you receive will be built to last for generations, not a decade.",
  ],
  taxNote: "HST 15%",
  permitAuthority: "the City of Charlottetown",
  permitUrl: "charlottetown.ca",
  neighbourhoods: [
    "Downtown Charlottetown",
    "Brighton",
    "Sherwood",
    "Parkdale",
    "West Royalty",
    "Stratford",
    "Cornwall",
    "East Royalty",
  ],
  regions: ["Summerside", "Montague", "Souris", "Kensington", "Cavendish", "Georgetown", "North Shore", "Tracadie Bay"],
  keywords:
    "custom cabinetry Charlottetown, custom kitchens Prince Edward Island, kitchen cabinets Charlottetown PEI, kitchen design Charlottetown, cabinet maker PEI, kitchen renovation Charlottetown, bespoke cabinetry Prince Edward Island, custom built-ins Charlottetown, custom bathroom vanity PEI, Shaker kitchen PEI, white oak kitchen Charlottetown",
  testimonials: [
    { quote: "Hempston delivered a kitchen worthy of our heritage home. Extraordinary detail work.", name: "Robert & Marion S.", place: "Brighton, Charlottetown" },
    { quote: "Our Stratford new build has cabinetry that guests always comment on. Worth every dollar.", name: "Kate M.", place: "Stratford, PEI" },
    { quote: "The pantry and mudroom completely changed how our family functions.", name: "Alex T.", place: "Cornwall, PEI" },
  ],
  geo: { lat: 46.2382, lng: -63.1311 },
};

const fredericton: CityPageData = {
  slug: "custom-cabinetry-fredericton",
  city: "Fredericton",
  province: "New Brunswick",
  provinceCode: "NB",
  region: "the Fredericton capital region",
  countryCode: "CA",
  eyebrow: "Fredericton · New Brunswick",
  heroTitle: ["Custom Kitchen", "Cabinetry in", "Fredericton"],
  heroLead:
    "Made-to-measure custom kitchens, vanities and built-ins for Fredericton, Oromocto, Hanwell and homes along the Saint John River — locally handcrafted, never flat-packed.",
  introHeadline: "Cabinetry built for Fredericton homes",
  introBody: [
    "From historic homes downtown near the river to new builds in Hanwell and Skyline Acres, Fredericton kitchens deserve cabinetry that fits the space and the way you actually live. Hempston designs and hand-builds every piece — no fixed door catalogues, no filler panels.",
    "One team from design to installation means nothing gets lost between the drawing and the finished room.",
  ],
  taxNote: "HST 15%",
  permitAuthority: "the City of Fredericton",
  permitUrl: "fredericton.ca",
  neighbourhoods: [
    "Downtown Fredericton",
    "North Side",
    "South Side",
    "Skyline Acres",
    "Nashwaaksis",
    "Hanwell",
    "New Maryland",
    "Oromocto",
  ],
  regions: ["Woodstock", "Grand Bay-Westfield", "Miramichi corridor", "St. Stephen", "Perth-Andover", "Doaktown", "McAdam", "Minto"],
  keywords:
    "custom cabinetry Fredericton, custom kitchens New Brunswick, kitchen cabinets Fredericton NB, kitchen design Fredericton, cabinet maker Fredericton, kitchen renovation Fredericton, bespoke cabinetry Fredericton, custom built-ins Fredericton, custom bathroom vanity Fredericton, Shaker kitchen NB, white oak kitchen Fredericton",
  testimonials: [
    { quote: "Our downtown Fredericton kitchen fits our home's character perfectly.", name: "Michael & Anne D.", place: "Downtown Fredericton" },
    { quote: "The team handled a tricky heritage layout without a single compromise.", name: "Rebecca H.", place: "Nashwaaksis" },
    { quote: "Beautiful cabinetry, thoughtful design, on time on budget.", name: "Simon B.", place: "Hanwell, NB" },
  ],
  geo: { lat: 45.9636, lng: -66.6431 },
};

const saintJohn: CityPageData = {
  slug: "custom-cabinetry-saint-john",
  city: "Saint John",
  province: "New Brunswick",
  provinceCode: "NB",
  region: "Greater Saint John",
  countryCode: "CA",
  eyebrow: "Saint John · New Brunswick",
  heroTitle: ["Custom Kitchen", "Cabinetry in", "Saint John"],
  heroLead:
    "Bespoke kitchen cabinetry, vanities and built-ins for Saint John, Rothesay, Quispamsis and homes across southern New Brunswick — designed and hand-built to last generations.",
  introHeadline: "Cabinetry designed for Saint John homes",
  introBody: [
    "Saint John's rich mix of heritage brick, Uptown lofts, and Kennebecasis Valley new builds demands cabinetry that fits the room and stands up to Bay of Fundy humidity. Hempston builds every piece to measure using solid hardwoods and conversion-grade finishes engineered for coastal air.",
    "Design and cabinet making happen under one roof, so what you see in the drawings is exactly what arrives on installation day.",
  ],
  taxNote: "HST 15%",
  permitAuthority: "the City of Saint John",
  permitUrl: "saintjohn.ca",
  neighbourhoods: [
    "Uptown Saint John",
    "South End",
    "North End",
    "West Side",
    "East Saint John",
    "Millidgeville",
    "Rothesay",
    "Quispamsis",
  ],
  regions: ["Hampton", "Sussex", "St. Andrews", "St. George", "Grand Bay-Westfield", "Kingston Peninsula", "Fundy Trail", "Norton"],
  keywords:
    "custom cabinetry Saint John, custom kitchens New Brunswick, kitchen cabinets Saint John NB, kitchen design Saint John, cabinet maker Saint John, kitchen renovation Saint John, bespoke cabinetry Saint John, custom built-ins Saint John, custom bathroom vanity NB, Shaker kitchen Saint John, white oak kitchen New Brunswick",
  testimonials: [
    { quote: "Hempston built cabinetry for our Uptown heritage home that looks like it's always been there.", name: "Peter & Julie G.", place: "Uptown Saint John" },
    { quote: "Best design experience we've had — and the fit and finish are extraordinary.", name: "Nadine C.", place: "Rothesay, NB" },
    { quote: "Handled our Quispamsis renovation top to bottom. Zero drama, beautiful result.", name: "Andrew F.", place: "Quispamsis, NB" },
  ],
  geo: { lat: 45.2733, lng: -66.0633 },
};

const stJohns: CityPageData = {
  slug: "custom-cabinetry-st-johns",
  city: "St. John's",
  province: "Newfoundland and Labrador",
  provinceCode: "NL",
  region: "the Northeast Avalon",
  countryCode: "CA",
  eyebrow: "St. John's · Newfoundland",
  heroTitle: ["Custom Kitchen", "Cabinetry in", "St. John's"],
  heroLead:
    "Handcrafted kitchen cabinetry, vanities and built-ins for St. John's, Mount Pearl, Paradise and homes across the Northeast Avalon — made to measure, never flat-packed.",
  introHeadline: "Cabinetry built for Newfoundland homes",
  introBody: [
    "From heritage jellybean row houses on Gower Street to modern builds in Paradise, St. John's homes have real character and real quirks — sloped floors, out-of-square walls, thick period trim — that stock cabinetry can't respect. Hempston builds every piece to measure, so cabinetry fits historic spaces and modern ones with equal precision.",
    "We coordinate closely with your contractor and ship fully pre-staged, so installation on the Avalon is quick and clean.",
  ],
  taxNote: "HST 15%",
  permitAuthority: "the City of St. John's",
  permitUrl: "stjohns.ca",
  neighbourhoods: [
    "Downtown St. John's",
    "Georgestown",
    "Rabbittown",
    "Churchill Square",
    "Kenmount",
    "Mount Pearl",
    "Paradise",
    "Torbay",
  ],
  regions: ["Conception Bay South", "Portugal Cove-St. Philip's", "Bay Bulls", "Petty Harbour", "Bell Island", "Witless Bay", "Holyrood", "Carbonear"],
  keywords:
    "custom cabinetry St. John's, custom kitchens Newfoundland, kitchen cabinets St. John's NL, kitchen design St. John's, cabinet maker Newfoundland, kitchen renovation St. John's, bespoke cabinetry Newfoundland, custom built-ins St. John's, custom bathroom vanity NL, Shaker kitchen Newfoundland, white oak kitchen St. John's",
  testimonials: [
    { quote: "Our Georgestown row house has a kitchen worthy of the neighbourhood now.", name: "Deirdre & Patrick R.", place: "Georgestown, St. John's" },
    { quote: "Hempston made a challenging heritage layout look effortless.", name: "Sean M.", place: "Downtown St. John's" },
    { quote: "The built-ins turned an awkward Paradise living room into our favourite space.", name: "Jenna B.", place: "Paradise, NL" },
  ],
  geo: { lat: 47.5615, lng: -52.7126 },
};

// Top 10 major Canadian metros (per StatsCan CMA population)
const toronto: CityPageData = {
  slug: "custom-cabinetry-toronto",
  city: "Toronto",
  province: "Ontario",
  provinceCode: "ON",
  region: "the Greater Toronto Area",
  countryCode: "CA",
  eyebrow: "Toronto · Ontario",
  heroTitle: ["Custom Kitchen", "Cabinetry in", "Toronto"],
  heroLead:
    "Bespoke kitchen cabinetry, vanities and built-ins for Toronto homes — from Victorian semis in Riverdale to Forest Hill new builds and King West lofts. Hand-built, precisely installed.",
  introHeadline: "Cabinetry designed for Toronto homes",
  introBody: [
    "Toronto's building stock is astonishingly varied — narrow century Victorians, mid-century bungalows, boutique condos, and sprawling North York new builds. What they share is a real premium on space, storage, and finish quality. Hempston designs and hand-builds custom cabinetry in Toronto from the ground up, so every inch is put to work and every finish is delivered to a furniture-grade standard.",
    "Our Toronto studio coordinates directly with your architect, designer, and contractor, and every project ships fully pre-staged from our workshop for a precise, low-disruption install.",
  ],
  taxNote: "HST 13%",
  permitAuthority: "the City of Toronto",
  permitUrl: "toronto.ca",
  neighbourhoods: [
    "Rosedale",
    "Forest Hill",
    "The Annex",
    "Yorkville",
    "Leaside",
    "Lawrence Park",
    "Riverdale",
    "Roncesvalles",
    "High Park",
    "Beaches",
    "Etobicoke",
    "North York",
  ],
  regions: ["Mississauga", "Oakville", "Burlington", "Vaughan", "Markham", "Richmond Hill", "King City", "Aurora", "Newmarket", "Whitby", "Ajax", "Pickering"],
  keywords:
    "custom cabinetry Toronto, custom kitchens Toronto, kitchen cabinets Toronto, kitchen design Toronto, kitchen designer Toronto, cabinet maker Toronto, kitchen renovation Toronto GTA, bespoke cabinetry Toronto, custom built-ins Toronto, luxury kitchen Toronto, custom bathroom vanity Toronto, Shaker kitchen Toronto, white oak kitchen Toronto, inset cabinetry Toronto",
  testimonials: [
    { quote: "Our Rosedale kitchen is easily the best-built room in the house. Astonishing detail.", name: "David & Elaine C.", place: "Rosedale, Toronto" },
    { quote: "Hempston coordinated seamlessly with our architect. Genuine furniture-grade work.", name: "Priya S.", place: "Forest Hill, Toronto" },
    { quote: "Pre-staged in the shop, installed in days. No mess, no compromises.", name: "Michael T.", place: "Leaside, Toronto" },
  ],
  geo: { lat: 43.6532, lng: -79.3832 },
};

const montreal: CityPageData = {
  slug: "custom-cabinetry-montreal",
  city: "Montreal",
  province: "Quebec",
  provinceCode: "QC",
  region: "Greater Montreal",
  countryCode: "CA",
  eyebrow: "Montréal · Québec",
  heroTitle: ["Custom Kitchen", "Cabinetry in", "Montreal"],
  heroLead:
    "Bespoke cabinetry, vanities and built-ins for Montreal plexes, Outremont townhouses, Westmount heritage homes and West Island new builds — handcrafted to fit exactly.",
  introHeadline: "Cabinetry designed for Montreal homes",
  introBody: [
    "Montreal's iconic plexes, tight Plateau kitchens, Outremont townhouses, and West Island bungalows each demand cabinetry that respects the room. Hempston designs and hand-builds every piece to measure — no filler panels, no compromises around out-of-square walls or period trim.",
    "Design and cabinet making happen under one roof, so what you approve in the drawings is exactly what installs in your Montreal home.",
  ],
  taxNote: "GST 5% + QST 9.975%",
  permitAuthority: "the Ville de Montréal (or your borough)",
  permitUrl: "montreal.ca",
  neighbourhoods: [
    "Plateau-Mont-Royal",
    "Outremont",
    "Westmount",
    "Mile End",
    "Old Montreal",
    "Griffintown",
    "NDG",
    "Rosemont",
    "Verdun",
    "Ahuntsic",
    "Town of Mount Royal",
    "Hampstead",
  ],
  regions: ["Laval", "Longueuil", "Brossard", "Boucherville", "Saint-Lambert", "Beaconsfield", "Baie-D'Urfé", "Pointe-Claire", "Kirkland", "Dollard-des-Ormeaux", "Île-Bizard", "Repentigny"],
  keywords:
    "custom cabinetry Montreal, armoires sur mesure Montréal, custom kitchens Montreal, kitchen cabinets Montreal, kitchen design Montreal, cabinet maker Montreal, ébéniste Montréal, kitchen renovation Montreal, bespoke cabinetry Quebec, custom built-ins Montreal, custom bathroom vanity Montreal, Shaker kitchen Montreal, white oak kitchen Montreal",
  testimonials: [
    { quote: "Our Outremont kitchen fits the character of the home and works for a young family. Perfection.", name: "Louis & Camille B.", place: "Outremont, Montréal" },
    { quote: "Hempston handled a tricky Plateau plex renovation beautifully.", name: "Sarah K.", place: "Plateau-Mont-Royal" },
    { quote: "West Island new build, and the cabinetry is easily the best decision we made.", name: "Nathan V.", place: "Beaconsfield, QC" },
  ],
  geo: { lat: 45.5019, lng: -73.5674 },
};

const vancouver: CityPageData = {
  slug: "custom-cabinetry-vancouver",
  city: "Vancouver",
  province: "British Columbia",
  provinceCode: "BC",
  region: "Metro Vancouver",
  countryCode: "CA",
  eyebrow: "Vancouver · British Columbia",
  heroTitle: ["Custom Kitchen", "Cabinetry in", "Vancouver"],
  heroLead:
    "Bespoke kitchen cabinetry, vanities and built-ins for Vancouver — Point Grey heritage homes, Kitsilano character conversions, West Side new builds and West Vancouver waterfronts.",
  introHeadline: "Cabinetry designed for the West Coast",
  introBody: [
    "Vancouver homes range from Craftsman heritage in Kitsilano to modernist waterfront in West Van, and each rewards cabinetry that respects sightlines, storage, and Coastal humidity. Hempston hand-builds every piece to measure using solid hardwoods and conversion-grade finishes engineered for West Coast conditions.",
    "Our team ships fully pre-staged and coordinates directly with your architect, designer and contractor for a precise, low-disruption install.",
  ],
  taxNote: "GST 5% + PST 7%",
  permitAuthority: "the City of Vancouver",
  permitUrl: "vancouver.ca",
  neighbourhoods: [
    "Point Grey",
    "Kitsilano",
    "Dunbar",
    "Shaughnessy",
    "Kerrisdale",
    "West End",
    "Yaletown",
    "Mount Pleasant",
    "Fairview",
    "West Vancouver",
    "North Vancouver",
    "South Granville",
  ],
  regions: ["Burnaby", "Richmond", "Coquitlam", "Port Moody", "New Westminster", "Surrey", "Langley", "White Rock", "Delta", "Bowen Island", "Squamish", "Whistler"],
  keywords:
    "custom cabinetry Vancouver, custom kitchens Vancouver BC, kitchen cabinets Vancouver, kitchen design Vancouver, kitchen designer Vancouver, cabinet maker Vancouver, kitchen renovation Vancouver, bespoke cabinetry Vancouver, custom built-ins Vancouver, luxury kitchen Vancouver, custom bathroom vanity Vancouver, white oak kitchen Vancouver, inset cabinetry Vancouver",
  testimonials: [
    { quote: "Our Point Grey kitchen is furniture-grade throughout. Every drawer whispers.", name: "James & Anna L.", place: "Point Grey, Vancouver" },
    { quote: "Hempston handled our West Van waterfront with real sensitivity to the architecture.", name: "Ravi M.", place: "West Vancouver" },
    { quote: "Extraordinary craftsmanship, and installation was fast and precise.", name: "Rebecca T.", place: "Kitsilano, Vancouver" },
  ],
  geo: { lat: 49.2827, lng: -123.1207 },
};

const calgary: CityPageData = {
  slug: "custom-cabinetry-calgary",
  city: "Calgary",
  province: "Alberta",
  provinceCode: "AB",
  region: "Calgary and area",
  countryCode: "CA",
  eyebrow: "Calgary · Alberta",
  heroTitle: ["Custom Kitchen", "Cabinetry in", "Calgary"],
  heroLead:
    "Handcrafted cabinetry for Calgary — Mount Royal heritage, Elbow Park estates, Aspen Woods new builds and inner-city infills. Made to measure, precisely installed.",
  introHeadline: "Cabinetry designed for Calgary homes",
  introBody: [
    "Calgary rewards cabinetry that can hold its own next to big windows and mountain-view sightlines. From Mount Royal heritage to modern Aspen Woods and Britannia infills, Hempston designs and hand-builds every piece to measure — pantries, islands, wine walls, built-ins and vanities engineered around how you actually live.",
    "Every project is pre-staged and quality-checked before it leaves the shop for Calgary, keeping on-site work fast and clean.",
  ],
  taxNote: "GST 5% (no provincial sales tax)",
  permitAuthority: "the City of Calgary",
  permitUrl: "calgary.ca",
  neighbourhoods: [
    "Mount Royal",
    "Elbow Park",
    "Britannia",
    "Roxboro",
    "Aspen Woods",
    "Springbank Hill",
    "West Hillhurst",
    "Bridgeland",
    "Inglewood",
    "Bel-Aire",
    "Eagle Ridge",
    "Rideau Park",
  ],
  regions: ["Airdrie", "Cochrane", "Chestermere", "Okotoks", "Bragg Creek", "Priddis", "Springbank", "Canmore", "Banff", "Strathmore", "High River", "De Winton"],
  keywords:
    "custom cabinetry Calgary, custom kitchens Calgary AB, kitchen cabinets Calgary, kitchen design Calgary, cabinet maker Calgary, kitchen renovation Calgary, bespoke cabinetry Calgary, custom built-ins Calgary, luxury kitchen Calgary, custom bathroom vanity Calgary, Shaker kitchen Calgary, white oak kitchen Calgary, inset cabinetry Calgary",
  testimonials: [
    { quote: "Our Mount Royal kitchen is the most beautiful thing in the house.", name: "William & Fiona D.", place: "Mount Royal, Calgary" },
    { quote: "Aspen Woods new build and we couldn't be happier with the cabinetry.", name: "Jason B.", place: "Aspen Woods" },
    { quote: "Precision install and beautiful millwork. Would use Hempston again.", name: "Melissa P.", place: "Britannia, Calgary" },
  ],
  geo: { lat: 51.0447, lng: -114.0719 },
};

const ottawa: CityPageData = {
  slug: "custom-cabinetry-ottawa",
  city: "Ottawa",
  province: "Ontario",
  provinceCode: "ON",
  region: "the National Capital Region",
  countryCode: "CA",
  eyebrow: "Ottawa · Ontario",
  heroTitle: ["Custom Kitchen", "Cabinetry in", "Ottawa"],
  heroLead:
    "Bespoke kitchen cabinetry, vanities and built-ins for Ottawa — Rockcliffe Park heritage, Glebe brick century homes, Westboro infills and Kanata new builds.",
  introHeadline: "Cabinetry designed for Ottawa homes",
  introBody: [
    "Ottawa's mix of heritage brick, Glebe century homes, and modern Kanata builds calls for cabinetry that reads as furniture — quiet in scale, precise in detail, generous in storage. Hempston designs and hand-builds every piece to measure, coordinating directly with your designer, architect and contractor from first sketch to install.",
    "Every project ships fully pre-staged from our workshop for a clean, precise install in your Ottawa home.",
  ],
  taxNote: "HST 13%",
  permitAuthority: "the City of Ottawa",
  permitUrl: "ottawa.ca",
  neighbourhoods: [
    "Rockcliffe Park",
    "New Edinburgh",
    "The Glebe",
    "Old Ottawa South",
    "Westboro",
    "Wellington Village",
    "Manor Park",
    "Alta Vista",
    "Centretown",
    "Hintonburg",
    "Kanata",
    "Barrhaven",
  ],
  regions: ["Gatineau", "Aylmer", "Chelsea", "Wakefield", "Ottawa Valley", "Almonte", "Carleton Place", "Manotick", "Stittsville", "Orleans", "Cumberland", "Rockland"],
  keywords:
    "custom cabinetry Ottawa, custom kitchens Ottawa, kitchen cabinets Ottawa, kitchen design Ottawa, kitchen designer Ottawa, cabinet maker Ottawa, kitchen renovation Ottawa, bespoke cabinetry Ottawa, custom built-ins Ottawa, luxury kitchen Ottawa, custom bathroom vanity Ottawa, Shaker kitchen Ottawa, white oak kitchen Ottawa, inset cabinetry Ottawa",
  testimonials: [
    { quote: "Rockcliffe heritage home, and Hempston built cabinetry that respects every detail.", name: "Henry & Margaret A.", place: "Rockcliffe Park, Ottawa" },
    { quote: "Our Glebe century-home kitchen finally functions — and looks incredible.", name: "Sophie L.", place: "The Glebe, Ottawa" },
    { quote: "Beautiful, precisely installed millwork across three rooms.", name: "Daniel R.", place: "Westboro, Ottawa" },
  ],
  geo: { lat: 45.4215, lng: -75.6972 },
};

const edmonton: CityPageData = {
  slug: "custom-cabinetry-edmonton",
  city: "Edmonton",
  province: "Alberta",
  provinceCode: "AB",
  region: "the Edmonton metro area",
  countryCode: "CA",
  eyebrow: "Edmonton · Alberta",
  heroTitle: ["Custom Kitchen", "Cabinetry in", "Edmonton"],
  heroLead:
    "Handcrafted kitchen cabinetry, vanities and built-ins for Edmonton — Glenora and Windsor Park heritage, Windermere estates, Old Strathcona conversions and new-build infills.",
  introHeadline: "Cabinetry designed for Edmonton homes",
  introBody: [
    "From Glenora's mature streets to Windermere and Ambleside estates, Edmonton homes range from restrained heritage to expansive new builds. Hempston designs and hand-builds every cabinet, drawer and built-in to measure — engineered around your storage and finished to a furniture-grade standard.",
    "Every project ships pre-staged and quality-checked for a fast, precise install in your Edmonton home.",
  ],
  taxNote: "GST 5% (no provincial sales tax)",
  permitAuthority: "the City of Edmonton",
  permitUrl: "edmonton.ca",
  neighbourhoods: [
    "Glenora",
    "Windsor Park",
    "Belgravia",
    "Old Strathcona",
    "Crestwood",
    "Laurier Heights",
    "Windermere",
    "Ambleside",
    "Riverbend",
    "Bulyea Heights",
    "Westmount",
    "Highlands",
  ],
  regions: ["St. Albert", "Sherwood Park", "Spruce Grove", "Stony Plain", "Beaumont", "Leduc", "Fort Saskatchewan", "Devon", "Parkland County", "Sturgeon County", "Nisku", "Morinville"],
  keywords:
    "custom cabinetry Edmonton, custom kitchens Edmonton AB, kitchen cabinets Edmonton, kitchen design Edmonton, cabinet maker Edmonton, kitchen renovation Edmonton, bespoke cabinetry Edmonton, custom built-ins Edmonton, luxury kitchen Edmonton, custom bathroom vanity Edmonton, Shaker kitchen Edmonton, white oak kitchen Edmonton",
  testimonials: [
    { quote: "Our Glenora kitchen looks like it grew up in the house. Beautiful.", name: "Peter & Louise M.", place: "Glenora, Edmonton" },
    { quote: "Windermere new build and the cabinetry is the standout.", name: "Karim S.", place: "Windermere, Edmonton" },
    { quote: "On time, on budget, extraordinary detail.", name: "Emily G.", place: "Old Strathcona" },
  ],
  geo: { lat: 53.5461, lng: -113.4938 },
};

const winnipeg: CityPageData = {
  slug: "custom-cabinetry-winnipeg",
  city: "Winnipeg",
  province: "Manitoba",
  provinceCode: "MB",
  region: "Winnipeg and area",
  countryCode: "CA",
  eyebrow: "Winnipeg · Manitoba",
  heroTitle: ["Custom Kitchen", "Cabinetry in", "Winnipeg"],
  heroLead:
    "Bespoke kitchen cabinetry, vanities and built-ins for Winnipeg — Wellington Crescent heritage, Tuxedo estates, Wolseley character homes and Bridgwater new builds.",
  introHeadline: "Cabinetry designed for Winnipeg homes",
  introBody: [
    "Winnipeg's grand heritage streets and character neighbourhoods deserve cabinetry that respects trim, ceiling heights and period detail. Hempston hand-builds every piece to measure — inset face-frame, Shaker, and modern slab — with dovetailed drawers and conversion finishes that stand up to Prairie extremes.",
    "Design and cabinet making live under one roof, so nothing is lost between the plan and the finished room in your Winnipeg home.",
  ],
  taxNote: "GST 5% + PST 7%",
  permitAuthority: "the City of Winnipeg",
  permitUrl: "winnipeg.ca",
  neighbourhoods: [
    "Wellington Crescent",
    "Crescentwood",
    "River Heights",
    "Tuxedo",
    "Wolseley",
    "Fort Rouge",
    "Fort Garry",
    "St. Vital",
    "Charleswood",
    "Bridgwater",
    "Assiniboine Park",
    "Kildonan",
  ],
  regions: ["Headingley", "Oak Bluff", "Île-des-Chênes", "Selkirk", "Steinbach", "Stonewall", "Portage la Prairie", "West St. Paul", "East St. Paul", "Niverville", "Lorette", "Beausejour"],
  keywords:
    "custom cabinetry Winnipeg, custom kitchens Winnipeg MB, kitchen cabinets Winnipeg, kitchen design Winnipeg, cabinet maker Winnipeg, kitchen renovation Winnipeg, bespoke cabinetry Winnipeg, custom built-ins Winnipeg, luxury kitchen Winnipeg, custom bathroom vanity Winnipeg, Shaker kitchen Winnipeg, white oak kitchen Winnipeg",
  testimonials: [
    { quote: "Wellington Crescent heritage kitchen — Hempston nailed every detail.", name: "Robert & Diane K.", place: "Wellington Crescent, Winnipeg" },
    { quote: "Our Tuxedo new build has cabinetry we'll love for decades.", name: "Amrit S.", place: "Tuxedo, Winnipeg" },
    { quote: "Wolseley character home, tricky layout, beautifully solved.", name: "Meagan C.", place: "Wolseley, Winnipeg" },
  ],
  geo: { lat: 49.8951, lng: -97.1384 },
};

const quebecCity: CityPageData = {
  slug: "custom-cabinetry-quebec-city",
  city: "Quebec City",
  province: "Quebec",
  provinceCode: "QC",
  region: "the Quebec City region",
  countryCode: "CA",
  eyebrow: "Québec · Québec",
  heroTitle: ["Custom Kitchen", "Cabinetry in", "Quebec City"],
  heroLead:
    "Bespoke cabinetry, vanities and built-ins for Quebec City — Vieux-Québec heritage, Montcalm townhouses, Sainte-Foy new builds and homes across the Capitale-Nationale.",
  introHeadline: "Cabinetry built for Quebec City homes",
  introBody: [
    "Quebec City's centuries-old streetscape and modern suburbs both reward cabinetry that treats the room as furniture. Hempston hand-builds every piece to measure — inset face-frame, Shaker, and slab — with the tolerances heritage homes demand and the storage new builds need.",
    "Design and cabinet making happen under one roof, so what you approve in the drawings is exactly what installs in your Quebec City home.",
  ],
  taxNote: "GST 5% + QST 9.975%",
  permitAuthority: "the Ville de Québec",
  permitUrl: "ville.quebec.qc.ca",
  neighbourhoods: [
    "Vieux-Québec",
    "Montcalm",
    "Saint-Jean-Baptiste",
    "Sillery",
    "Sainte-Foy",
    "Cap-Rouge",
    "Limoilou",
    "Saint-Roch",
    "Neufchâtel",
    "Beauport",
    "Charlesbourg",
    "L'Ancienne-Lorette",
  ],
  regions: ["Lévis", "Saint-Augustin-de-Desmaures", "L'Île-d'Orléans", "Stoneham", "Lac-Beauport", "Baie-Saint-Paul", "Saint-Nicolas", "Beaupré", "Château-Richer", "Boischatel", "Portneuf", "Donnacona"],
  keywords:
    "custom cabinetry Quebec City, armoires sur mesure Québec, custom kitchens Quebec City, kitchen cabinets Quebec, kitchen design Quebec City, ébéniste Québec, cabinet maker Quebec City, kitchen renovation Quebec City, bespoke cabinetry Quebec, custom built-ins Quebec City, custom bathroom vanity Quebec, Shaker kitchen Quebec",
  testimonials: [
    { quote: "Vieux-Québec heritage kitchen — extraordinary craftsmanship, real respect for the building.", name: "François & Anne C.", place: "Vieux-Québec" },
    { quote: "Sainte-Foy new build, and the cabinetry is a full step above anything else.", name: "Marie-Ève T.", place: "Sainte-Foy" },
    { quote: "Fit and finish are astonishing. Would recommend to anyone building or renovating.", name: "Jean-Philippe R.", place: "Sillery, Québec" },
  ],
  geo: { lat: 46.8139, lng: -71.208 },
};

const hamilton: CityPageData = {
  slug: "custom-cabinetry-hamilton",
  city: "Hamilton",
  province: "Ontario",
  provinceCode: "ON",
  region: "Hamilton and the Golden Horseshoe",
  countryCode: "CA",
  eyebrow: "Hamilton · Ontario",
  heroTitle: ["Custom Kitchen", "Cabinetry in", "Hamilton"],
  heroLead:
    "Bespoke kitchen cabinetry, vanities and built-ins for Hamilton — Durand and Kirkendall century homes, Ancaster estates, Dundas heritage and Waterdown new builds.",
  introHeadline: "Cabinetry designed for Hamilton homes",
  introBody: [
    "Hamilton's beautiful mix of brick century homes, Ancaster estates, and Waterdown new builds all reward cabinetry that respects room proportions and delivers real storage. Hempston hand-builds every piece to measure, with dovetailed drawers, solid-wood fronts, and conversion-grade finishes engineered to last for decades.",
    "Every project ships pre-staged from our workshop for a precise, low-disruption install in your Hamilton home.",
  ],
  taxNote: "HST 13%",
  permitAuthority: "the City of Hamilton",
  permitUrl: "hamilton.ca",
  neighbourhoods: [
    "Durand",
    "Kirkendall",
    "Westdale",
    "Ainslie Wood",
    "Locke Street",
    "Dundas",
    "Ancaster",
    "Waterdown",
    "Stoney Creek",
    "Binbrook",
    "Flamborough",
    "Corktown",
  ],
  regions: ["Burlington", "Grimsby", "Beamsville", "Vineland", "St. Catharines", "Oakville", "Cambridge", "Brantford", "Milton", "Guelph", "Caledonia", "Hagersville"],
  keywords:
    "custom cabinetry Hamilton, custom kitchens Hamilton ON, kitchen cabinets Hamilton, kitchen design Hamilton, cabinet maker Hamilton, kitchen renovation Hamilton, bespoke cabinetry Hamilton, custom built-ins Hamilton, luxury kitchen Hamilton, custom bathroom vanity Hamilton, Shaker kitchen Hamilton, white oak kitchen Hamilton, inset cabinetry Hamilton",
  testimonials: [
    { quote: "Durand century home — cabinetry that respects every original detail. Beautiful.", name: "Andrew & Kate B.", place: "Durand, Hamilton" },
    { quote: "Ancaster new build with the best cabinetry we could have hoped for.", name: "Jessica L.", place: "Ancaster, ON" },
    { quote: "Precision install, gorgeous millwork.", name: "Ryan M.", place: "Waterdown, ON" },
  ],
  geo: { lat: 43.2557, lng: -79.8711 },
};

const kitchener: CityPageData = {
  slug: "custom-cabinetry-kitchener",
  city: "Kitchener",
  province: "Ontario",
  provinceCode: "ON",
  region: "Waterloo Region",
  countryCode: "CA",
  eyebrow: "Kitchener · Ontario",
  heroTitle: ["Custom Kitchen", "Cabinetry in", "Kitchener"],
  heroLead:
    "Bespoke kitchen cabinetry, vanities and built-ins for Kitchener, Waterloo, Cambridge and homes across Waterloo Region — hand-built, precisely installed.",
  introHeadline: "Cabinetry designed for Waterloo Region homes",
  introBody: [
    "Waterloo Region combines Beechwood and Old Westmount heritage with modern subdivision new builds and thoughtful mid-century homes. Hempston designs and hand-builds every piece to measure — kitchens, pantries, vanities, and built-ins engineered around the way you actually live.",
    "Every project ships pre-staged from our workshop for a fast, precise install in your Kitchener-Waterloo home.",
  ],
  taxNote: "HST 13%",
  permitAuthority: "the City of Kitchener",
  permitUrl: "kitchener.ca",
  neighbourhoods: [
    "Downtown Kitchener",
    "Old Westmount",
    "Beechwood",
    "Doon",
    "Rosemount",
    "Uptown Waterloo",
    "Westmount Waterloo",
    "Erbsville",
    "Preston (Cambridge)",
    "Galt (Cambridge)",
    "Hespeler",
    "Breslau",
  ],
  regions: ["Guelph", "Elmira", "St. Jacobs", "New Hamburg", "Baden", "Ayr", "Paris", "Wellesley", "Woolwich", "North Dumfries", "Puslinch", "Fergus"],
  keywords:
    "custom cabinetry Kitchener, custom kitchens Waterloo, kitchen cabinets Kitchener-Waterloo, kitchen design Kitchener, cabinet maker Kitchener, kitchen renovation Waterloo, bespoke cabinetry Kitchener, custom built-ins Kitchener, luxury kitchen Waterloo, custom bathroom vanity Kitchener, Shaker kitchen Waterloo, white oak kitchen Kitchener",
  testimonials: [
    { quote: "Old Westmount heritage home — cabinetry that fits perfectly and looks like furniture.", name: "Michael & Sara F.", place: "Old Westmount, Kitchener" },
    { quote: "Uptown Waterloo new build with the standout cabinetry on the block.", name: "Ravi P.", place: "Uptown Waterloo" },
    { quote: "Cambridge century home — extraordinary work, on time and on budget.", name: "Laura B.", place: "Galt, Cambridge" },
  ],
  geo: { lat: 43.4516, lng: -80.4925 },
};

// Halifax is data-only here (its route is hand-built) — included so it can
// appear in the /locations hub and in nearby-city cross-links.
const halifax: CityPageData = {
  slug: "custom-cabinetry-halifax",
  city: "Halifax",
  province: "Nova Scotia",
  provinceCode: "NS",
  region: "Halifax Regional Municipality",
  countryCode: "CA",
  eyebrow: "Halifax · Nova Scotia",
  heroTitle: ["Custom Kitchen", "Cabinetry in", "Halifax"],
  heroLead: "",
  introHeadline: "",
  introBody: [],
  taxNote: "HST 15%",
  permitAuthority: "Halifax Regional Municipality",
  permitUrl: "halifax.ca",
  neighbourhoods: ["South End", "North End", "West End", "Bedford", "Dartmouth", "Hammonds Plains"],
  regions: ["Chester", "Lunenburg", "Mahone Bay", "Peggy's Cove", "Tantallon", "Windsor"],
  keywords: "",
  testimonials: [],
  geo: { lat: 44.6488, lng: -63.5752 },
};

export const cityPages: CityPageData[] = [
  halifax,
  moncton,
  charlottetown,
  fredericton,
  saintJohn,
  stJohns,
  toronto,
  montreal,
  vancouver,
  calgary,
  ottawa,
  edmonton,
  winnipeg,
  quebecCity,
  hamilton,
  kitchener,
];

export {
  halifax,
  moncton,
  charlottetown,
  fredericton,
  saintJohn,
  stJohns,
  toronto,
  montreal,
  vancouver,
  calgary,
  ottawa,
  edmonton,
  winnipeg,
  quebecCity,
  hamilton,
  kitchener,
};

export function buildCityFaqs(city: CityPageData): CityFaq[] {
  const base = baseFaqs({
    city: city.city,
    province: city.province,
    region: city.region,
    taxNote: city.taxNote,
    permitAuthority: city.permitAuthority,
    permitUrl: city.permitUrl,
    areas: [...city.neighbourhoods, ...city.regions],
  });
  return [...base, ...(city.faqExtra ?? [])];
}

// Haversine distance (km) — used to compute nearest cities for cross-links.
function distanceKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const toRad = (v: number) => (v * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

/** Return the N nearest cities to the given one, excluding itself. */
export function nearbyCitiesFor(city: CityPageData, count = 4): CityPageData[] {
  return cityPages
    .filter((c) => c.slug !== city.slug)
    .map((c) => ({ c, d: distanceKm(city.geo, c.geo) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, count)
    .map((x) => x.c);
}

