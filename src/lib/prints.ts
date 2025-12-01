export interface EditionSize {
  id: string;
  label: string;
  dimensions?: string;
  priceLabel?: string;
  quantity?: number;
}

export interface GalleryImage {
  src: string;
  thumb?: string;
  alt?: string;
}

export interface PrintDetail {
  slug: string;
  title: string;
  collection?: string;
  description: string[];
  edition?: {
    intro?: string;
    total?: number;
    sizes?: EditionSize[];
    priceSummary?: string;
  };
  features?: string[];
  notes?: string[];
  gallery?: GalleryImage[];
  supportingImages?: GalleryImage[];
  paperInfo?: string;
  disclaimers?: string[];
  cta?: {
    label: string;
    note?: string;
    disabled?: boolean;
  };
}

export const defaultPaperInfo =
  "Printed on fine art archival photo matte paper rating up to 175 years. PH neutral, Acid and OBA free.";

export const defaultDisclaimers = [
  "All prints come unframed, framed images shown for a visual sense of scale.",
  "Printed and shipped from USA.",
  "All sales final.",
];

export const defaultFeatures = [
  '2" outside white border on all prints.',
  "Certificate of Authenticity Plaque Included",
];

export const createBaseSizes = (): EditionSize[] => [
  { id: "small", label: "Small", dimensions: "16.5″ × 11″", priceLabel: "$250", quantity: 150 },
  { id: "medium", label: "Medium", dimensions: "20″ × 13.4″", priceLabel: "$450", quantity: 75 },
  { id: "large", label: "Large", dimensions: "30″ × 20″", priceLabel: "$700", quantity: 25 },
];

export const getPrintEntries = (): PrintDetail[] => [
  {
    slug: "ford-gt",
    title: "Ford GT",
    collection: "Automotive Series",
    description: [
      "Finally got to shoot this amazing piece of automotive engineering in the famous Salt Flats. It feels like another planet out there. We were blessed with the most incredible skies and sunset I’ve seen in a good long while.",
      "Driving out, flanked by nothing but stark white vistas and deep navy skies, music cranked and windows down — incredible.",
    ],
    edition: {
      intro: "Limited Edition Prints (250 Total)",
      sizes: createBaseSizes(),
      priceSummary: "S $250 / M $450 / L $700",
    },
    features: defaultFeatures,
    notes: ["Prints are NOT framed, please have professionally framed."],
    gallery: [
      {
        src: "/images/thumb-gallery/ford-gt/ford-gt-pm800.jpg",
        thumb: "/images/thumb-gallery/ford-gt/ford-gt-pm800%20small.jpg",
        alt: "Ford GT limited edition print in frame",
      },
      {
        src: "/images/thumb-gallery/ford-gt/fordgt-wideall.jpg",
        thumb: "/images/thumb-gallery/ford-gt/fordgt-wideall%20small.jpg",
        alt: "Ford GT prints arranged across a wall",
      },
      {
        src: "/images/thumb-gallery/ford-gt/fordgt-cularge-solo.jpg",
        thumb: "/images/thumb-gallery/ford-gt/fordgt-cusmall-solo.jpg",
        alt: "Close crop of the Ford GT large print",
      },
      {
        src: "/images/thumb-gallery/ford-gt/fordgt-cumed-solo.jpg",
        thumb: "/images/thumb-gallery/ford-gt/fordgt-cumed-solo%20small.jpg",
        alt: "Medium edition Ford GT print detail",
      },
      {
        src: "/images/thumb-gallery/ford-gt/fordgt-widelarge-solo.jpg",
        thumb: "/images/thumb-gallery/ford-gt/fordgt-widelarge-solo%20small.jpg",
        alt: "Wide angle Ford GT print hero view",
      },
    ],
    supportingImages: [
      {
        src: "/images/thumb-gallery/ford-gt/ford-gt-pmsample2k.jpg",
        alt: "Ford GT print certificate and packaging sample",
      },
      {
        src: "/images/thumb-gallery/ford-gt/fordgt-wideall%202.jpg",
        alt: "Ford GT print lineup showing all three sizes",
      },
      {
        src: "/images/thumb-gallery/ford-gt/saltflatspm1k.jpg",
        alt: "Salt flats scene highlighting the Ford GT shoot location",
      },
    ],
    paperInfo: defaultPaperInfo,
    disclaimers: defaultDisclaimers,
    cta: { label: "Purchase" },
  },
  {
    slug: "redbull",
    title: "F1 Red Bull",
    collection: "Automotive Series",
    description: [
      "Shot trackside during a golden-hour test session, this print is all about motion, grit, and the glow of carbon fiber under dusk light.",
    ],
    edition: {
      intro: "Limited Edition Prints (50 Total)",
      sizes: [
        { id: "medium", label: "Medium", dimensions: "20″ × 13.4″", priceLabel: "$450", quantity: 25 },
        { id: "large", label: "Large", dimensions: "30″ × 20″", priceLabel: "$700", quantity: 25 },
      ],
      priceSummary: "Sold out",
    },
    features: defaultFeatures,
    notes: ["Every print was signed and numbered before selling out."],
    gallery: [
      {
        src: "/images/thumb-gallery/redbull/f1pm800pdb.jpg",
        thumb: "/images/thumb-gallery/redbull/f1pm800pds.jpg",
        alt: "Red Bull F1 limited print front view",
      },
      {
        src: "/images/thumb-gallery/redbull/f1-wideb.jpg",
        thumb: "/images/thumb-gallery/redbull/f1-wides.jpg",
        alt: "Wide panorama of the Red Bull F1 print",
      },
      {
        src: "/images/thumb-gallery/redbull/f1-wideb2.jpg",
        thumb: "/images/thumb-gallery/redbull/f1-wideb2.jpg",
        alt: "Alternate wall arrangement for the Red Bull F1 print",
      },
    ],
    supportingImages: [
      { src: "/images/thumb-gallery/redbull/f12k.jpg", alt: "Red Bull F1 print detail close-up" },
      { src: "/images/thumb-gallery/redbull/f1-wideb2.jpg", alt: "Red Bull F1 print hung in studio" },
      { src: "/images/thumb-gallery/redbull/pm2kf1.jpg", alt: "Red Bull F1 print packaging and certificate" },
    ],
    paperInfo: defaultPaperInfo,
    disclaimers: defaultDisclaimers,
    cta: {
      label: "Sold Out",
      disabled: true,
      note: "Join the waitlist to be notified if an edition returns.",
    },
  },
  {
    slug: "paris",
    title: "Paris",
    collection: "Travel Series",
    description: [
      "A moody sunrise over the Seine with the city still quiet. Soft light meets analog-inspired color for a timeless Parisian print.",
    ],
    edition: {
      intro: "Limited Edition Prints (23 Total)",
      sizes: [
        { id: "medium", label: "Medium", dimensions: "20″ × 13.4″", priceLabel: "$320", quantity: 12 },
        { id: "large", label: "Large", dimensions: "30″ × 20″", priceLabel: "$520", quantity: 11 },
      ],
      priceSummary: "M $320 / L $520",
    },
    features: defaultFeatures,
    notes: ["Printed on demand within 7 business days."],
    gallery: [
      {
        src: "/images/thumb-gallery/paris/parisproof.jpg",
        thumb: "/images/thumb-gallery/paris/parisproofs.jpg",
        alt: "Paris print proof on archival paper",
      },
      {
        src: "/images/thumb-gallery/paris/pariswallall25kb.jpg",
        thumb: "/images/thumb-gallery/paris/pariswallall25ks.jpg",
        alt: "Paris prints displayed as a gallery wall",
      },
      {
        src: "/images/thumb-gallery/paris/pariswallsmall21kb.jpg",
        thumb: "/images/thumb-gallery/paris/pariswallsmall21ks.jpg",
        alt: "Small Paris edition styled on wall",
      },
      {
        src: "/images/thumb-gallery/paris/pariswallmedium24kb.jpg",
        thumb: "/images/thumb-gallery/paris/pariswallmedium24ks.jpg",
        alt: "Medium Paris print above console table",
      },
      {
        src: "/images/thumb-gallery/paris/pariswalllarge25kb.jpg",
        thumb: "/images/thumb-gallery/paris/pariswalllarge25ks.jpg",
        alt: "Large Paris print anchoring living room",
      },
    ],
    supportingImages: [
      { src: "/images/thumb-gallery/paris/parissamplepreview.jpg", alt: "Paris print sample preview" },
      { src: "/images/thumb-gallery/paris/pariswallall25k2.jpg", alt: "Paris trio set in studio" },
      { src: "/images/thumb-gallery/paris/pmparistrio1k.jpg", alt: "Paris print trio packaging detail" },
    ],
    paperInfo: defaultPaperInfo,
    disclaimers: defaultDisclaimers,
    cta: { label: "Purchase" },
  },
  {
    slug: "morning-fog",
    title: "Morning Fog",
    collection: "Winter Series",
    description: [
      "Shot on a cold alpine morning, this piece balances cool blue tones with soft highlights drifting through the trees.",
    ],
    edition: {
      intro: "Limited Edition Prints (250 Total)",
      sizes: createBaseSizes(),
      priceSummary: "S $250 / M $450 / L $700",
    },
    features: defaultFeatures,
    notes: ["Ships with a signed authenticity card."],
    gallery: [
      {
        src: "/images/thumb-gallery/morning-fog/morningfog800.jpg",
        thumb: "/images/thumb-gallery/morning-fog/morningfog800s.jpg",
        alt: "Morning Fog limited edition print detail",
      },
      {
        src: "/images/thumb-gallery/morning-fog/morningfogsample.jpg",
        thumb: "/images/thumb-gallery/morning-fog/morningfogsample.jpg",
        alt: "Morning Fog print styled on shelving",
      },
      {
        src: "/images/thumb-gallery/morning-fog/morningfog3prints.jpg",
        thumb: "/images/thumb-gallery/morning-fog/morningfog3prints.jpg",
        alt: "Morning Fog editions shown side by side",
      },
      {
        src: "/images/thumb-gallery/morning-fog/374a07402k.jpg",
        thumb: "/images/thumb-gallery/morning-fog/374a07402k.jpg",
        alt: "Evergreen valley soaked in morning fog",
      },
    ],
    supportingImages: [
      { src: "/images/thumb-gallery/morning-fog/morningfogsample.jpg", alt: "Morning Fog print detail close-up" },
      { src: "/images/thumb-gallery/morning-fog/morningfog3prints.jpg", alt: "Morning Fog small, medium, large lineup" },
      { src: "/images/thumb-gallery/morning-fog/374a07402k.jpg", alt: "Behind the scenes from the Morning Fog capture" },
    ],
    paperInfo: defaultPaperInfo,
    disclaimers: defaultDisclaimers,
    cta: { label: "Purchase" },
  },
  {
    slug: "the-bucket-shot",
    title: "The Bucket Shot",
    collection: "Winter Series",
    description: [
      "An homage to the viral night in Banff that started the photographer’s winter obsession. Crisp stars, icy reflections, iconic canoe.",
    ],
    edition: {
      intro: "Limited Edition Prints (150 Total)",
      sizes: [
        { id: "small", label: "Small", dimensions: "16.5″ × 11″", priceLabel: "$260", quantity: 90 },
        { id: "medium", label: "Medium", dimensions: "20″ × 13.4″", priceLabel: "$480", quantity: 40 },
        { id: "large", label: "Large", dimensions: "30″ × 20″", priceLabel: "$720", quantity: 20 },
      ],
      priceSummary: "S $260 / M $480 / L $720",
    },
    features: defaultFeatures,
    notes: ["Includes a behind-the-scenes note from the original shoot."],
    gallery: [
      {
        src: "/images/thumb-gallery/the-bucket-shot/bucketshot800b.jpg",
        thumb: "/images/thumb-gallery/the-bucket-shot/bucketshot800b.jpg",
        alt: "The Bucket Shot hero print on display",
      },
      {
        src: "/images/thumb-gallery/the-bucket-shot/bucketshotcert2k72b.jpg",
        thumb: "/images/thumb-gallery/the-bucket-shot/bucketshotcert2k72b.jpg",
        alt: "Certificate and plaque accompanying The Bucket Shot",
      },
      {
        src: "/images/thumb-gallery/the-bucket-shot/c578234befcc595c15d71abfc60c3fbcb.jpg",
        thumb: "/images/thumb-gallery/the-bucket-shot/c578234befcc595c15d71abfc60c3fbcb.jpg",
        alt: "Detail of The Bucket Shot print texture",
      },
      {
        src: "/images/thumb-gallery/the-bucket-shot/small+bucket+shot+framedb.jpg",
        thumb: "/images/thumb-gallery/the-bucket-shot/small+bucket+shot+framedb.jpg",
        alt: "Small edition Bucket Shot framed on wall",
      },
      {
        src: "/images/thumb-gallery/the-bucket-shot/mediumprintonwallb.jpg",
        thumb: "/images/thumb-gallery/the-bucket-shot/mediumprintonwallb.jpg",
        alt: "Medium Bucket Shot print on gallery wall",
      },
      {
        src: "/images/thumb-gallery/the-bucket-shot/bucketshotlargeprintonwallb.jpg",
        thumb: "/images/thumb-gallery/the-bucket-shot/bucketshotlargeprintonwallb.jpg",
        alt: "Large Bucket Shot print styled in living room",
      },
      {
        src: "/images/thumb-gallery/the-bucket-shot/3printsb.jpg",
        thumb: "/images/thumb-gallery/the-bucket-shot/3printsb.jpg",
        alt: "Bucket Shot triptych showcasing three finishes",
      },
    ],
    supportingImages: [
      { src: "/images/thumb-gallery/the-bucket-shot/bucket+shot+sample.jpg", alt: "Bucket Shot print sample close-up" },
      { src: "/images/thumb-gallery/the-bucket-shot/bucketshot3sizeswide.jpg", alt: "Three Bucket Shot sizes side-by-side" },
      { src: "/images/thumb-gallery/the-bucket-shot/457a5629-2k.jpg", alt: "Night sky capture leading to The Bucket Shot" },
    ],
    paperInfo: defaultPaperInfo,
    disclaimers: defaultDisclaimers,
    cta: { label: "Purchase" },
  },
  {
    slug: "strength-in-numbers",
    title: "Strength In Numbers",
    collection: "Winter Series",
    description: [
      "An ode to the sled crew lined up in a perfect stagger under heavy snow. Momentum, teamwork, and texture in one frame.",
    ],
    edition: {
      intro: "Limited Edition Prints (250 Total)",
      sizes: createBaseSizes(),
      priceSummary: "S $250 / M $450 / L $700",
    },
    features: defaultFeatures,
    notes: ["Portion of proceeds donated to avalanche safety programs."],
    gallery: [
      {
        src: "/images/thumb-gallery/strength-in-numbers/strengthinnumbers800b.jpg",
        thumb: "/images/thumb-gallery/strength-in-numbers/strengthinnumbers800s.jpg",
        alt: "Strength In Numbers hero print on wall",
      },
      {
        src: "/images/thumb-gallery/strength-in-numbers/strength+in+numbers+3+on+wall.jpg",
        thumb: "/images/thumb-gallery/strength-in-numbers/strength+in+numbers+3+on+wall.jpg",
        alt: "Strength In Numbers trio displayed together",
      },
      {
        src: "/images/thumb-gallery/strength-in-numbers/strengthinnumberssample.jpg",
        thumb: "/images/thumb-gallery/strength-in-numbers/strengthinnumberssample.jpg",
        alt: "Close-up of the Strength In Numbers print texture",
      },
      {
        src: "/images/thumb-gallery/strength-in-numbers/457a57032k.jpg",
        thumb: "/images/thumb-gallery/strength-in-numbers/457a57032k.jpg",
        alt: "Snow-covered valley that inspired Strength In Numbers",
      },
    ],
    supportingImages: [
      { src: "/images/thumb-gallery/strength-in-numbers/strengthinnumberssample.jpg", alt: "Strength In Numbers print detail" },
      {
        src: "/images/thumb-gallery/strength-in-numbers/strength+in+numbers+3+on+wall.jpg",
        alt: "Strength In Numbers triptych presentation",
      },
      { src: "/images/thumb-gallery/strength-in-numbers/457a57032k.jpg", alt: "Aerial overview tied to the Strength In Numbers series" },
    ],
    paperInfo: defaultPaperInfo,
    disclaimers: defaultDisclaimers,
    cta: { label: "Purchase" },
  },
];
