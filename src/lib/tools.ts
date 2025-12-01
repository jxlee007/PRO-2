export interface ProductMedia {
    src: string;
    alt?: string;
    caption?: string;
}

export interface ProductSelectOption {
    value: string;
    label: string;
    priceLabel?: string;
}

export interface ProductCTA {
    label: string;
    href?: string;
    disabled?: boolean;
    note?: string;
}

export interface ProductInfoSection {
    heading?: string;
    body?: string[];
    list?: string[];
    align?: "left" | "center";
    variant?: "default" | "muted" | "card";
    accordion?: boolean;
    initiallyOpen?: boolean;
}

export interface ProductVideo {
    url: string;
    title?: string;
    aspectRatio?: string;
}

export interface ToolProduct {
    slug: string;
    category?: string;
    title: string;
    subtitle?: string;
    eyebrow?: string;
    descriptions: string[];
    heroImage: ProductMedia;
    heroList?: string[];
    heroHighlights?: string[];
    price?: string;
    cta?: ProductCTA;
    selectOptions?: ProductSelectOption[];
    gallery?: ProductMedia[];
    sections?: ProductInfoSection[];
    video?: ProductVideo;
    disclaimers?: string[];
    notes?: string[];
}

export const getToolProducts = (): ToolProduct[] => [
    {
        slug: "signature-lens-ids",
        category: "Gear",
        title: "Signature Lens IDs",
        descriptions: [
            "Quickly identify and organize your lenses.",
            "Waterproof and outdoor rated adhesive with UV and scratch resistant matte black stock and embossed gold markings.",
            "24 Lens ID’s perfectly fit the most common caps in the kit.",
        ],
        heroList: ["Canon RF Caps", "Sony E-Mount Caps"],
        price: "$15",
        cta: { label: "Purchase" },
        heroImage: {
            src: "/images/tools/5j0a9040-awide.jpg",
            alt: "Signature lens ID stickers arranged in a travel case",
        },
        gallery: [
            {
                src: "/images/tools/5j0a9056.jpg",
                alt: "Applying a lens ID sticker to a camera lens cap",
            },
            {
                src: "/images/tools/5j0a9033.jpg",
                alt: "Lens IDs organized in a camera case",
            },
            {
                src: "/images/tools/5j0a9028.jpg",
                alt: "Close up of Signature Lens IDs sheet",
            },
        ],
        sections: [
            {
                heading: "Includes 24 Lens Cap Stickers",
                body: [
                    "24, 35, 50, 85, 100, 15-35, 24-70, 70-200",
                    "Macro, Tele, Tilt, Wide, Zoom, Four RF’s, Four Blanks/Customs",
                ],
                align: "center",
                variant: "card",
            },
        ],
        disclaimers: [
            "Camera accessories shown not included.",
            "All sales final.",
        ],
    },
    {
        slug: "pm-camera-tool",
        category: "Gear",
        title: "PM Camera Tool",
        descriptions: [
            "The most adaptable camera tool, ever. Accepts standard 1/4” hex bits so you can make the tool carry exactly what your rig needs.",
            "The first camera tool to include internal SD card storage, engineered and built from scratch so nothing is left to chance.",
        ],
        heroHighlights: [
            "Now with fully enclosed and reinforced bit drivers.",
        ],
        heroList: [
            "Dual concentric extension arm / bit drivers",
            "Dedicated Phillips head screwdriver",
            "Dedicated tripod tool / flat head screwdriver",
            "SD card holder",
            "Carrying case",
            "8 hex bit storage container",
            "Lifetime warranty",
        ],
        price: "$95",
        cta: { label: "Purchase" },
        heroImage: {
            src: "/images/tools/pmct22kw.jpg",
            alt: "PM Camera Tool with included accessories",
        },
        gallery: [
            { src: "/images/tools/pmct2315kw.jpg", alt: "PM Camera Tool open with hex bits" },
            { src: "/images/tools/pmct2915kw.jpg", alt: "PM Camera Tool detail view" },
            { src: "/images/tools/0d3a0590nw.jpg", alt: "PM Camera Tool grip detail" },
            { src: "/images/tools/0d3a0586.jpg", alt: "PM Camera Tool standing upright" },
            { src: "/images/tools/0d3a0593.jpg", alt: "PM Camera Tool kit on desk" },
        ],
        video: {
            url: "https://www.youtube.com/embed/ZXZKr8HPqoA?rel=0",
            title: "See the tool in action",
            aspectRatio: "16/9",
        },
        sections: [
            {
                heading: "Materials",
                body: [
                    "Scratch resistant 6061 anodized aluminum scales.",
                    "Hardened 17-4 stainless steel internals.",
                    "S2 tool grade steel hex bits.",
                ],
                align: "center",
                variant: "card",
            },
        ],
        disclaimers: [
            "SD card and accessories shown not included.",
            "Patent-pending. All sales final.",
        ],
    },
    {
        slug: "glitch-mgfx-pack",
        category: "Motion GFX",
        title: "Glitch MFGX Pack",
        descriptions: [
            "A wide variety of custom glitch effects to spice up your edits.",
        ],
        heroList: ["8 glitch footage overlays", "Available in 4K and 1080p (sold separately)"],
        price: "1080p ($20) / 4K ($40)",
        cta: { label: "Purchase" },
        selectOptions: [
            { value: "1080p", label: "1080p", priceLabel: "$20" },
            { value: "4k", label: "4K", priceLabel: "$40" },
        ],
        heroImage: {
            src: "/images/motion-fx/glitchbox.jpg",
            alt: "Glitch effects pack artwork",
        },
        gallery: [
            { src: "/images/motion-fx/scratchbox.jpg", alt: "Film scratches overlay preview" },
            { src: "/images/motion-fx/leaksbox.jpg", alt: "Light leaks preview" },
            { src: "/images/motion-fx/mattebox.jpg", alt: "Film mattes preview" },
        ],
        video: {
            url: "https://www.youtube.com/embed/FEffie9IOUY?rel=0",
            title: "See them in action",
            aspectRatio: "16/9",
        },
        sections: [
            {
                heading: "Instructions",
                body: [
                    "Overlay the footage over your video clip and change the blending mode to taste.",
                ],
                accordion: true,
                initiallyOpen: true,
            },
            {
                heading: "Compatibility",
                body: ["Works with any video editor that offers blending modes."],
                accordion: true,
                initiallyOpen: true,
            },
        ],
        disclaimers: [
            "8 files included (.mov format). Download links arrive shortly after purchase.",
            "Purchased presets are not to be shared or resold in any manner.",
        ],
    },
    {
        slug: "pm-lightroom-presets-v4",
        category: "Lightroom Presets",
        title: "PM Lightroom",
        subtitle: "Presets V4 2021",
        descriptions: [
            "It has been two years since the release of the V3 presets pack. We’re finally back with our highly anticipated V4, pulling huge inspiration from the Pete’s Pirate Life aesthetic.",
            "Rich warm tones of Sand Trap or the slight vintage feel of Captain’s Reserve become instant go-tos for the Pete's Pirate Instagram account.",
            "Drift and Red Rum are staples across landscapes and automotive work alike, delivering versatile looks in seconds.",
            "Compatible with Lightroom CC, Lightroom Classic CC, Photoshop CC, and Adobe Camera Raw. Non refundable.",
        ],
        price: "$40",
        cta: { label: "Purchase" },
        heroImage: {
            src: "/images/photo-lr-presets/2021v4.jpg",
            alt: "PM Lightroom V4 Presets packaging",
        },
        gallery: [
            { src: "/images/photo-lr-presets/2019v3.jpg", alt: "PM Lightroom V3 presets" },
            { src: "/images/photo-lr-presets/2018fall.jpg", alt: "PM Lightroom V2 presets" },
            { src: "/images/photo-lr-presets/2017v1.jpg", alt: "PM Lightroom V1 presets" },
        ],
        sections: [
            {
                heading: "Install Instructions",
                body: [
                    "Extract the ZIP file on your desktop computer (not your phone).",
                    "Open Lightroom and go to the Presets panel.",
                    "Choose File → Import Profiles & Presets and select the ZIP file.",
                    "Restart Lightroom and your presets will appear in the Presets list.",
                ],
                accordion: true,
                initiallyOpen: true,
            },
            {
                heading: "Mobile FAQ",
                body: [
                    "Install the presets on the desktop version of Lightroom CC first, then they will auto-sync into the Lightroom CC Mobile app.",
                ],
                accordion: true,
                initiallyOpen: false,
            },
        ],
        disclaimers: [
            "24 presets included (.xmp format). Zip file delivered shortly after purchase.",
            "Download to your desktop first—Lightroom will sync to mobile automatically.",
            "Purchased presets are not to be shared or resold in any manner.",
        ],
    },
    {
        slug: "cine-luts-v1",
        category: "Video LUTs",
        title: "Cine LUTS V1",
        descriptions: [
            "Seven custom LUTs used across b-roll, YouTube videos, and cinematic edits.",
            "Designed for video workflows. Not intended for Lightroom. Non-refundable.",
        ],
        price: "$15",
        cta: { label: "Purchase" },
        heroImage: {
            src: "/images/cineluts/cinelutsv1.jpg",
            alt: "Cine LUTS V1 pack artwork",
        },
        sections: [
            {
                heading: "What’s a LUT?",
                body: [
                    "Think of it like a filter for your video footage. Apply a LUT to instantly color correct a clip to a crafted look.",
                ],
            },
            {
                heading: "Included LUTs",
                list: [
                    "Fade Out",
                    "Black Eye",
                    "Clean & Tidy",
                    "Noir",
                    "Kodak Killer",
                    "Arctic Circle",
                    "That Orange & Teal Though!",
                ],
                variant: "card",
            },
            {
                heading: "Workflow & Tutorials",
                body: [
                    "Follow the YouTube tutorial at https://www.youtube.com/watch?v=-fKDb4JnUmc to install and start grading right away.",
                    "Works in Premiere Pro CC, DaVinci Resolve, Final Cut Pro X (with LUT loader), After Effects, and Photoshop CC.",
                    "For Photoshop setup instructions, watch https://www.youtube.com/watch?v=2xzt4aQEgP0.",
                ],
            },
            {
                heading: "Helpful Notes",
                body: [
                    "Do not download on mobile—use a desktop or laptop computer.",
                    "If using Final Cut Pro X, install a LUT loader or plugin such as Color Finale.",
                ],
            },
        ],
        disclaimers: [
            "Zip file delivered shortly after purchase.",
            "Purchased presets are not to be shared or resold in any manner.",
            "All digital products are non-refundable.",
        ],
    },
    {
        slug: "sound-pack-v1",
        category: "Sound Packs",
        title: "Sound Pack V1",
        descriptions: [
            "Over 50 sound effects and variations to enhance your edits, crafted and mastered with Andrew Huang.",
            "Every sound originated from my mouth, then polished for immediate drop-ins to your timeline.",
        ],
        price: "$15",
        cta: { label: "Purchase" },
        heroImage: {
            src: "/images/pm-sound-pack-v1.jpg",
            alt: "PM Sound Pack V1 cover art",
        },
        sections: [
            {
                heading: "What’s Inside",
                list: [
                    "Hits",
                    "Pops",
                    "Impacts",
                    "Whooshes",
                    "Undertones",
                    "Fight sounds",
                    "And more",
                ],
                variant: "card",
            },
            {
                heading: "Production Notes",
                body: [
                    "Apply sounds in any editing software to enhance motion, transitions, and moments.",
                    "Files are delivered in a single ZIP immediately after purchase (check for pending e-checks if delayed).",
                ],
            },
        ],
        disclaimers: [
            "Download on laptop or desktop only.",
            "Zip file is sent shortly after purchase. Non refundable.",
            "Purchased packs are not to be shared or resold in any manner.",
        ],
    },
];

export const getToolProductBySlug = (slug: string): ToolProduct | undefined =>
    getToolProducts().find((product) => product.slug === slug);