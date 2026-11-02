// ─────────────────────────────────────────────────────────────
//  Single source of truth for all business details & content.
//  Edit here and the whole site updates.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Sri Ambica Laminates",
  url: "https://www.sriambicalaminates.com",
  email: "sriambicalaminates@gmail.com",
  // Primary WhatsApp / phone number used by buttons and the floating chat button
  whatsapp: "917016079345",
  phone: "+91 70160 79345",
  hours: "Mon – Sat · 11 AM to 9 PM",
  address: {
    line1: "13-1-492, Ground Floor, Mangalhat Market Road",
    line2: "Near Durga Tent House, Doodh Kahan",
    city: "Hyderabad",
    state: "Telangana",
    pin: "500006",
  },
  geo: { lat: 17.377275, lng: 78.454984 },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.718457070704!2d78.45498427540292!3d17.377275483508164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9784e325fe5d%3A0x484ef2522d985b96!2ssri%20ambica%20laminate!5e0!3m2!1sen!2sin!4v1737008357441!5m2!1sen!2sin",
};

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat},${site.geo.lng}`;

export const waLink = (text) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { name: "Home", href: "/" },
  { name: "Catalogue", href: "/catalogue" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const team = [
  {
    name: "Yug Patel",
    role: "CEO",
    phone: "+91 70160 79345",
    tel: "+917016079345",
    whatsapp: "917016079345",
    image: "/img/team-yug.webp",
  },
  {
    name: "Meet Patel",
    role: "CEO",
    phone: "+91 63545 31450",
    tel: "+916354531450",
    whatsapp: "916354531450",
    image: "/img/team-meet.webp",
  },
];

// ── Collections — `pdf` is the Google Drive link that opens in a new tab ──
export const collections = [
  {
    id: "prionex",
    name: "PRIONEX",
    tagline: "Where texture talks.",
    blurb:
      "Deep, tactile surfaces with an architectural sense of rhythm and ambience.",
    color: "#43544A",
    cover: "/img/cover-prionex.webp",
    pdf: "https://drive.google.com/file/d/1vLxbUcux5ZGobVUnLHiL9Hn-eWiWsJcA/view",
  },
  {
    id: "paxora",
    name: "PAXORA",
    tagline: "Minimal lines. Confident colour.",
    blurb:
      "A modern, minimalist range for interiors that should feel effortless and sure of themselves.",
    color: "#E06846",
    cover: "/img/cover-paxora.webp",
    pdf: "https://drive.google.com/file/d/1goTAJSttXa2_WqFGkU2QWFf5X2tzaYja/view",
  },
  {
    id: "plainx",
    name: "PLAINX",
    tagline: "A lively palette of plain colours.",
    blurb:
      "Soft, saturated and everything between — solid shades that let furniture shapes do the talking.",
    color: "#6EB9DA",
    cover: "/img/cover-plainx.webp",
    pdf: "https://drive.google.com/file/d/1M5hX5dx10VtBCe8RpSanG5TdEAZ2rfbL/view",
  },
  {
    id: "rangrez",
    name: "RANGREZ",
    tagline: "For those who think in colour.",
    blurb:
      "The Spectrum range — expressive shades and textures with real personality.",
    color: "#C51B2C",
    cover: "/img/cover-rangrez.webp",
    pdf: "https://drive.google.com/file/d/1CfgvPY_JeBCcHPLGcDYhmd-G7VR2pCF0/view",
  },
  {
    id: "plexa",
    name: "PLEXA",
    tagline: "Project-ready, premium.",
    blurb:
      "The Project Series: dependable laminates for offices, showrooms and large-scale interiors.",
    color: "#A57865",
    cover: "/img/cover-plexa.webp",
    pdf: "https://drive.google.com/file/d/19O1LkCjZzUDIFrkuyxDb3DU4w5pQnLa9/view",
  },
  {
    id: "woodma",
    name: "WOODMA",
    tagline: "An artful fusion of grain and design.",
    blurb:
      "Rich wood tones and refined patterns — from warm walnut to honey oak.",
    color: "#6FA39A",
    cover: "/img/cover-woodma.webp",
    pdf: "https://drive.google.com/file/d/1tWJwB_F7BeYW2__jIQ5FMpVk05jTQJGB/view?usp=sharing",
  },
];

// ── Real finishes, cropped from the catalogue pages ──
export const finishes = [
  {
    id: "noirwood",
    img: "/img/finish-noirwood.webp",
    code: "MB-3065",
    name: "Classico Noirwood",
    type: "Wood grain",
    tone: "#8A4E2D",
  },
  {
    id: "marble",
    img: "/img/finish-marble.webp",
    code: "SMT-806",
    name: "Veined Marble",
    type: "Stone",
    tone: "#C9B8B0",
  },
  {
    id: "terracotta",
    img: "/img/finish-terracotta.webp",
    code: null,
    name: "Fluted Terracotta",
    type: "Texture",
    tone: "#C0794E",
  },
  {
    id: "naturalrift",
    img: "/img/finish-naturalrift.webp",
    code: "MB-3048",
    name: "Natural Rift",
    type: "Wood grain",
    tone: "#B98A45",
  },
  {
    id: "martini",
    img: "/img/finish-martini.webp",
    code: "LS-2055",
    name: "Martini",
    type: "Plain colour",
    tone: "#D2A58F",
  },
  {
    id: "leaf",
    img: "/img/finish-leaf.webp",
    code: null,
    name: "Leaf Motif",
    type: "Pattern",
    tone: "#A9838A",
  },
  {
    id: "hashting",
    img: "/img/finish-hashting.webp",
    code: "MB-3070",
    name: "Hashting Sandal",
    type: "Wood grain",
    tone: "#6B3A28",
  },
];

export const scenes = [
  { img: "/img/scene-wood-wall.webp", label: "Wood-panelled TV wall", ratio: "aspect-[4/5]" },
  { img: "/img/scene-dining.webp", label: "Marble feature wall", ratio: "aspect-[5/4]" },
  { img: "/img/scene-kitchen.webp", label: "Kitchen cabinetry", ratio: "aspect-[4/3]" },
  { img: "/img/scene-marble-shelf.webp", label: "Marble-finish shelving", ratio: "aspect-[4/5]" },
  { img: "/img/scene-office.webp", label: "Executive office", ratio: "aspect-[16/10]" },
  { img: "/img/scene-bedroom.webp", label: "Headboard panelling", ratio: "aspect-[3/4]" },
  { img: "/img/scene-herringbone.webp", label: "Herringbone wall", ratio: "aspect-[4/5]" },
  { img: "/img/scene-tvunit.webp", label: "Media console", ratio: "aspect-[3/2]" },
  { img: "/img/scene-living.webp", label: "Living room", ratio: "aspect-[1/1]" },
];

export const stats = [
  { value: 2, suffix: "+", label: "Years in the trade" },
  { value: 2000, suffix: "+", label: "Happy clients" },
  { value: 10000, suffix: "+", label: "Projects supplied" },
  { value: 6, suffix: "", label: "Curated collections" },
];

export const services = [
  {
    icon: "truck",
    title: "Same-day & next-day delivery",
    text: "Same-day delivery across Hyderabad and next-day to nearby areas — even when you only need a single sheet.",
    tags: ["Hyderabad same-day", "Nearby next-day", "Single sheets welcome"],
  },
  {
    icon: "layers",
    title: "Premium laminate sheets, in bulk",
    text: "Dependable supply for retailers across Hyderabad and the surrounding regions, at competitive wholesale rates.",
    tags: ["Retail & wholesale", "Six collections", "Wholesale rates"],
  },
  {
    icon: "chat",
    title: "Call & WhatsApp support",
    text: "Talk to a real person. Ask about finishes, availability or an order — by call, WhatsApp or in the showroom.",
    tags: ["Call", "WhatsApp", "Showroom visits"],
  },
];

export const reasons = [
  { icon: "bolt", title: "Lightning fast", text: "The quickest turnaround around — with same-day delivery in Hyderabad." },
  { icon: "shield", title: "Quality first", text: "Premium surfaces that shrug off scratches and daily wear." },
  { icon: "tag", title: "Honest pricing", text: "Competitive wholesale rates, especially on bulk orders." },
  { icon: "handshake", title: "A trusted partner", text: "Long-standing relationships with retailers, carpenters and designers." },
];

export const process = [
  { n: "01", title: "Pick your finish", text: "Browse the six catalogues online, or touch the samples at our showroom." },
  { n: "02", title: "Call or WhatsApp", text: "Tell us what you need and how many sheets. We confirm availability quickly." },
  { n: "03", title: "We deliver", text: "Same-day within Hyderabad, next-day to nearby areas. Single sheet or full order." },
  { n: "04", title: "Fit & enjoy", text: "Your carpenter bonds the sheets and the furniture walks out transformed." },
];

export const about = {
  mission:
    "To be the most trusted supplier of high-quality laminate sheets, delivering unmatched value and customer satisfaction.",
  vision:
    "To revolutionise the laminate industry with innovative designs, sustainable practices and reliable delivery.",
  values:
    "Integrity, commitment, customer-centricity and quality excellence sit at the core of everything we do.",
};

export const testimonials = [
  {
    quote:
      "Sri Ambica Laminates has been our go-to supplier for years. Their fast delivery and customer service are unmatched.",
    author: "Retailer in Hyderabad",
    role: "Wholesale partner",
  },
  {
    quote:
      "Their laminates are of exceptional quality. Highly recommended for anyone looking for reliable suppliers.",
    author: "Interior designer",
    role: "Design professional",
  },
  {
    quote:
      "I love their commitment to sustainability and their wide range of designs. Truly impressive!",
    author: "Architect in Telangana",
    role: "Architecture firm",
  },
];

export const faqs = [
  {
    q: "Do you sell single sheets, or only bulk orders?",
    a: "Both. We supply retailers in bulk, and we'll deliver even a single sheet when that's all your project needs.",
  },
  {
    q: "Where do you deliver, and how quickly?",
    a: "Same-day delivery within Hyderabad and next-day delivery to nearby areas.",
  },
  {
    q: "How do I choose the right finish?",
    a: "Flip through the six catalogues online, or visit the showroom to see and feel the samples. Prefer to chat? Message us on WhatsApp and we'll point you to options that suit your project.",
  },
  {
    q: "How can I place an order?",
    a: "Call or WhatsApp our team (Monday to Saturday, 11 AM to 9 PM), or walk into the showroom in Mangalhat, Hyderabad.",
  },
  {
    q: "Can I get samples before I commit?",
    a: "Yes — tap 'Request samples' anywhere on the site and we'll continue the conversation on WhatsApp.",
  },
  {
    q: "Which collections do you carry?",
    a: "PRIONEX, PAXORA, PLAINX, RANGREZ, PLEXA and WOODMA — wood grains, marbles, plain colours, textures and patterns.",
  },
];
