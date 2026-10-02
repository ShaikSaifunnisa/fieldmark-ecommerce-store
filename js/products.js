// FIELDMARK — product catalogue
// Single source of truth for every page. Edit this file to add/remove products.

const PRODUCTS = [
  {
    id: "bp-01",
    name: "Ridgeline 32L Pack",
    category: "Backpacks",
    price: 6499,
    seed: "fieldmark-bp-01",
    sizes: ["One Size"],
    short: "A 32-litre daypack built for long approaches, with a suspended mesh back panel.",
    details: [
      "420D recycled ripstop nylon shell",
      "Suspended mesh back panel for airflow",
      "Hip belt with two zippered pockets",
      "Weight: 1.1 kg / Capacity: 32L"
    ]
  },
  {
    id: "bp-02",
    name: "Switchback 18L Day Pack",
    category: "Backpacks",
    price: 3999,
    seed: "fieldmark-bp-02",
    sizes: ["One Size"],
    short: "A trim commuter-to-trail pack with a padded 15\" laptop sleeve.",
    details: [
      "Water-resistant coated canvas",
      "Padded 15\" laptop sleeve",
      "Magnetic roll-top closure",
      "Weight: 0.7 kg / Capacity: 18L"
    ]
  },
  {
    id: "bp-03",
    name: "Basecamp 55L Expedition Pack",
    category: "Backpacks",
    price: 10999,
    seed: "fieldmark-bp-03",
    sizes: ["S/M", "M/L"],
    short: "Multi-day load hauler with an adjustable torso and rain-sealed base.",
    details: [
      "Adjustable torso length, 4 sizing points",
      "Rain-sealed 1000D base panel",
      "Detachable 8L lid pocket",
      "Weight: 2.3 kg / Capacity: 55L"
    ]
  },
  {
    id: "jk-01",
    name: "Talus Insulated Shell",
    category: "Jackets",
    price: 8999,
    seed: "fieldmark-jk-01",
    sizes: ["XS", "S", "M", "L", "XL"],
    short: "A packable insulated shell rated to -5°C, cut for layering.",
    details: [
      "60g synthetic fill, packs into own pocket",
      "Taped seams, DWR-treated face fabric",
      "Rated comfort range: -5°C to 8°C",
      "Two-way front zip, chest vent"
    ]
  },
  {
    id: "jk-02",
    name: "Marrow Wool Overshirt",
    category: "Jackets",
    price: 5499,
    seed: "fieldmark-jk-02",
    sizes: ["S", "M", "L", "XL"],
    short: "A brushed wool-blend overshirt for cold mornings at camp.",
    details: [
      "70% wool, 30% recycled polyester blend",
      "Snap-button chest pockets",
      "Garment-washed for a broken-in feel",
      "Machine washable, cold cycle"
    ]
  },
  {
    id: "jk-03",
    name: "Fenwick Rain Anorak",
    category: "Jackets",
    price: 7299,
    seed: "fieldmark-jk-03",
    sizes: ["S", "M", "L", "XL"],
    short: "A pullover anorak with a fully taped hood for sideways rain.",
    details: [
      "2.5-layer waterproof laminate, 10k/10k rating",
      "Half-zip pullover construction",
      "Adjustable, fully taped hood",
      "Packs down to the size of a water bottle"
    ]
  },
  {
    id: "fw-01",
    name: "Cairn Low Trail Shoe",
    category: "Footwear",
    price: 5999,
    seed: "fieldmark-fw-01",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    short: "A low-cut trail shoe with a sticky rubber outsole for mixed terrain.",
    details: [
      "Vibram Megagrip outsole",
      "Breathable recycled mesh upper",
      "8mm heel-to-toe drop",
      "Weight: 290g (UK 8, single shoe)"
    ]
  },
  {
    id: "fw-02",
    name: "Halden Mid Hiking Boot",
    category: "Footwear",
    price: 8499,
    seed: "fieldmark-fw-02",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    short: "A mid-height waterproof boot for loaded multi-day carries.",
    details: [
      "Waterproof-breathable membrane lining",
      "Full-grain leather and ripstop upper",
      "Nylon shank for load support",
      "Resoleable construction"
    ]
  },
  {
    id: "fw-03",
    name: "Ashwater Camp Sandal",
    category: "Footwear",
    price: 2799,
    seed: "fieldmark-fw-03",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    short: "A contoured recovery sandal for around camp after a long day.",
    details: [
      "Dual-density EVA footbed",
      "Adjustable webbing straps",
      "Machine washable straps",
      "Weight: 180g (UK 8, single sandal)"
    ]
  },
  {
    id: "ac-01",
    name: "Colter Insulated Bottle 750ml",
    category: "Accessories",
    price: 1899,
    seed: "fieldmark-ac-01",
    sizes: ["750ml"],
    short: "Double-wall steel bottle that holds cold for 24 hours.",
    details: [
      "18/8 food-grade stainless steel",
      "Keeps drinks cold 24h, hot 12h",
      "Leakproof steel cap",
      "Weight: 320g empty"
    ]
  },
  {
    id: "ac-02",
    name: "Priddis Wool Beanie",
    category: "Accessories",
    price: 1299,
    seed: "fieldmark-ac-02",
    sizes: ["One Size"],
    short: "A ribbed merino beanie, brushed soft on the inside.",
    details: [
      "100% merino wool",
      "Brushed interior for warmth without itch",
      "Double-layer cuff",
      "Hand wash cold"
    ]
  },
  {
    id: "ac-03",
    name: "Merrow First-Light Headlamp",
    category: "Accessories",
    price: 2199,
    seed: "fieldmark-ac-03",
    sizes: ["One Size"],
    short: "A 400-lumen rechargeable headlamp with a red night-vision mode.",
    details: [
      "400 lumens max, USB-C rechargeable",
      "Red light mode preserves night vision",
      "IPX6 water resistance",
      "Runtime: 3h high / 40h low"
    ]
  },
  {
    id: "ac-04",
    name: "Talon Trekking Poles (Pair)",
    category: "Accessories",
    price: 2599,
    seed: "fieldmark-ac-04",
    sizes: ["One Size"],
    short: "Collapsible carbon poles with cork grips, sold as a pair.",
    details: [
      "Carbon-composite shafts",
      "Cork grip, adjustable wrist strap",
      "3-section collapsible, 33–53\" range",
      "Weight: 210g per pole"
    ]
  },
  {
    id: "ac-05",
    name: "Densmore Canvas Belt",
    category: "Accessories",
    price: 999,
    seed: "fieldmark-ac-05",
    sizes: ["S/M", "M/L"],
    short: "A cotton canvas belt with a solid brass buckle.",
    details: [
      "100% cotton canvas webbing",
      "Solid brass roller buckle",
      "38mm width",
      "Trim to fit"
    ]
  },
  {
    id: "jk-04",
    name: "Corrie Fleece Pullover",
    category: "Jackets",
    price: 4299,
    seed: "fieldmark-jk-04",
    sizes: ["S", "M", "L", "XL"],
    short: "A midweight recycled fleece with a chest kangaroo pocket.",
    details: [
      "260gsm recycled polyester fleece",
      "Quarter-zip with chin guard",
      "Kangaroo chest pocket",
      "Machine washable, cold cycle"
    ]
  },
  {
    id: "bp-04",
    name: "Petrel Hip Pack 4L",
    category: "Backpacks",
    price: 1999,
    seed: "fieldmark-bp-04",
    sizes: ["One Size"],
    short: "A minimal hip pack for short runs and fast-and-light days.",
    details: [
      "Water-resistant ripstop shell",
      "Stretch front pocket for a bottle",
      "Adjustable webbing belt",
      "Weight: 180g / Capacity: 4L"
    ]
  }
];

const CATEGORIES = ["Backpacks", "Jackets", "Footwear", "Accessories"];

function formatPrice(n) {
  return "₹" + n.toLocaleString("en-IN");
}

function productImage(seed, w, h) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
      }
