// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG — global company info used across header, footer, CTA, etc.
// ─────────────────────────────────────────────────────────────────────────────
export const SITE_CONFIG = {
  name: "SwiftHaul",
  tagline: "Dispatch & Logistics",
  phone: "1-800-555-1234",
  phoneHref: "tel:+18005551234",
  email: "info@swifthaul.com",
  emailHref: "mailto:info@swifthaul.com",
  availability: "Available 24/7, 365 days",
  social: [
    { name: "facebook", href: "#" },
    { name: "twitter", href: "#" },
    { name: "linkedin", href: "#" },
    { name: "instagram", href: "#" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// NAVIGATION — used in Header
// ─────────────────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Full Truckload (FTL)", href: "#services" },
      { label: "Less Than Truckload (LTL)", href: "#services" },
      { label: "Expedited Freight", href: "#services" },
      { label: "Intermodal Shipping", href: "#services" },
    ],
  },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

// ─────────────────────────────────────────────────────────────────────────────
// HERO — feature pills and live stat cards in the right panel
// ─────────────────────────────────────────────────────────────────────────────
export const HERO_FEATURE_PILLS = [
  "24/7 Dispatch Support",
  "100% Transparent Rates",
  "No Hidden Fees",
  "Dedicated Dispatcher",
];

export const HERO_LIVE_STATS = [
  { value: "2,400+", label: "Loads Booked" },
  { value: "98%", label: "On-Time Rate" },
  { value: "$0", label: "Hidden Fees" },
];

export const HERO_TRUST_BADGES = [
  { icon: "🛡️", title: "DOT Compliant", sub: "Fully regulated" },
  { icon: "⚡", title: "Fast Payments", sub: "Net 24-48 hrs" },
];

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES — color map + service list used in Services section
// ─────────────────────────────────────────────────────────────────────────────
export const SERVICES_COLOR_MAP = {
  primary: {
    icon: "bg-blue-500 text-white",
    badge: "bg-blue-100 text-blue-700",
    hover: "hover:border-blue-300",
  },
  indigo: {
    icon: "bg-indigo-500 text-white",
    badge: "bg-indigo-100 text-indigo-700",
    hover: "hover:border-indigo-300",
  },
  orange: {
    icon: "bg-orange-500 text-white",
    badge: "bg-orange-100 text-orange-700",
    hover: "hover:border-orange-300",
  },
  green: {
    icon: "bg-green-500 text-white",
    badge: "bg-green-100 text-green-700",
    hover: "hover:border-green-300",
  },
  purple: {
    icon: "bg-purple-500 text-white",
    badge: "bg-purple-100 text-purple-700",
    hover: "hover:border-purple-300",
  },
  red: {
    icon: "bg-red-500 text-white",
    badge: "bg-red-100 text-red-700",
    hover: "hover:border-red-300",
  },
};

export const SERVICES = [
  {
    iconPaths: [
      { tag: "path", d: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" },
      { tag: "circle", cx: "5.5", cy: "18.5", r: "2.5" },
      { tag: "circle", cx: "18.5", cy: "18.5", r: "2.5" },
    ],
    title: "Full Truckload (FTL)",
    description:
      "Dedicated truck capacity for large shipments with direct point-to-point delivery, faster transit times, and reduced handling.",
    features: ["48-state coverage", "Dedicated driver", "Real-time tracking"],
    color: "primary",
  },
  {
    iconPaths: [
      { tag: "path", d: "M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" },
      { tag: "path", d: "M16 3H8v4h8V3z" },
    ],
    title: "Less Than Truckload (LTL)",
    description:
      "Cost-effective freight shipping that consolidates your cargo with other shippers to maximize efficiency and minimize cost.",
    features: ["Cost sharing", "Flexible scheduling", "Nationwide network"],
    color: "indigo",
  },
  {
    iconPaths: [
      { tag: "path", d: "M13 10V3L4 14h7v7l9-11h-7z" },
    ],
    title: "Expedited Freight",
    description:
      "Time-critical freight solutions with guaranteed delivery windows, dedicated drivers, and priority routing.",
    features: ["Same-day available", "Priority routing", "24/7 monitoring"],
    color: "orange",
  },
  {
    iconPaths: [
      { tag: "path", d: "M9 17H5a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3" },
      { tag: "path", d: "M13 21l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" },
      { tag: "rect", x: "13", y: "13", width: "8", height: "8", rx: "1" },
    ],
    title: "Intermodal Shipping",
    description:
      "Multi-modal freight solutions combining rail, truck, and sea transport for the most economical long-haul routes.",
    features: ["Rail + truck combo", "Eco-friendly", "Cost optimized"],
    color: "green",
  },
  {
    iconPaths: [
      { tag: "path", d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" },
      { tag: "path", d: "M8 21V7m4 14V7m4 14V7" },
    ],
    title: "Refrigerated Freight",
    description:
      "Temperature-controlled logistics for perishable goods, pharmaceuticals, and sensitive cargo across all distances.",
    features: ["Temp monitoring", "FDA compliant", "HACCP certified"],
    color: "purple",
  },
  {
    iconPaths: [
      { tag: "path", d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    ],
    title: "Hazmat Transport",
    description:
      "Certified hazardous materials transport with fully licensed drivers, proper documentation, and strict safety compliance.",
    features: ["DOT certified", "Proper placarding", "Emergency response"],
    color: "red",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT — highlights grid used in About section
// ─────────────────────────────────────────────────────────────────────────────
export const ABOUT_HIGHLIGHTS = [
  {
    icon: "🗺️",
    title: "48-State Coverage",
    desc: "We dispatch loads across the continental US with a network of vetted carriers.",
  },
  {
    icon: "📋",
    title: "Rate Negotiation",
    desc: "Our dispatchers negotiate the best rates on every load to maximize your revenue.",
  },
  {
    icon: "📑",
    title: "Paperwork Handled",
    desc: "We handle all BOLs, invoicing, and documentation so you can focus on driving.",
  },
  {
    icon: "🔔",
    title: "24/7 Support",
    desc: "Round-the-clock dispatcher availability for emergencies, changes, and updates.",
  },
];

export const ABOUT_DRIVER_AVATARS = [
  { bg: "bg-blue-400", initial: "J" },
  { bg: "bg-green-400", initial: "M" },
  { bg: "bg-orange-400", initial: "R" },
  { bg: "bg-purple-400", initial: "K" },
];

// ─────────────────────────────────────────────────────────────────────────────
// STATS — stat band between About and HowItWorks
// ─────────────────────────────────────────────────────────────────────────────
export const STATS = [
  {
    value: "2,400+",
    label: "Loads Dispatched",
    sublabel: "Every month",
    iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    value: "98%",
    label: "On-Time Delivery",
    sublabel: "Across all routes",
    iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    value: "500+",
    label: "Active Drivers",
    sublabel: "Owner-operators & fleets",
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    value: "48",
    label: "States Covered",
    sublabel: "Continental US",
    iconPath: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HOW IT WORKS — 4-step process section
// ─────────────────────────────────────────────────────────────────────────────
export const HOW_IT_WORKS_STEPS = [
  {
    title: "Sign Up & Onboard",
    description:
      "Complete our simple onboarding form, share your MC/DOT numbers, equipment details, and preferred lanes. Takes less than 10 minutes.",
    iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "We Find Your Loads",
    description:
      "Your dedicated dispatcher searches load boards, direct shippers, and our broker network to find the highest-paying loads on your preferred lanes.",
    iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    title: "Rate Negotiation",
    description:
      "We negotiate aggressively on your behalf to get you the best rate per mile. We only win when you win — our fee is a small percentage of the load.",
    iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "You Deliver & Get Paid",
    description:
      "Pick up your load and deliver on time. We handle all the paperwork — BOLs, invoicing, and collections — so you get paid fast, typically net 24-48 hours.",
    iconPath: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "James Carter",
    role: "Owner-Operator, 3 years with SwiftHaul",
    initials: "JC",
    avatarColor: "bg-blue-500",
    rating: 5,
    text: "Before SwiftHaul I was spending 3-4 hours a day looking for loads myself. Now my dispatcher handles everything and I'm making 30% more per mile. Best investment I've made in my business.",
    stat: { value: "+30%", label: "Revenue increase" },
  },
  {
    name: "Maria Rodriguez",
    role: "Fleet Owner, 12 trucks",
    initials: "MR",
    avatarColor: "bg-green-500",
    rating: 5,
    text: "Managing a 12-truck fleet was overwhelming until we partnered with SwiftHaul. They keep all my drivers loaded, handle the paperwork, and I actually have time to grow the business now.",
    stat: { value: "12 trucks", label: "All consistently loaded" },
  },
  {
    name: "Robert Kim",
    role: "Flatbed Specialist, 2 years",
    initials: "RK",
    avatarColor: "bg-orange-500",
    rating: 5,
    text: "I was skeptical about paying a dispatch fee but the numbers don't lie. In the first month they negotiated rates I never could have gotten myself. The fee pays for itself 10x over.",
    stat: { value: "10x", label: "ROI in first month" },
  },
  {
    name: "David Thompson",
    role: "Reefer Driver, 18 months",
    initials: "DT",
    avatarColor: "bg-purple-500",
    rating: 5,
    text: "The 24/7 support is real. Had a breakdown at 2am and my dispatcher was on the phone within minutes helping coordinate. That kind of support is priceless when you're out on the road.",
    stat: { value: "24/7", label: "Genuine support" },
  },
];

export const TRUST_BAR_STATS = [
  { value: "4.9/5", label: "Average Rating" },
  { value: "500+", label: "5-Star Reviews" },
  { value: "97%", label: "Retention Rate" },
  { value: "10+", label: "Years Trusted" },
];

// ─────────────────────────────────────────────────────────────────────────────
// CTA — form dropdown options
// ─────────────────────────────────────────────────────────────────────────────
export const CTA_PERKS = [
  "No long-term contracts",
  "Cancel anytime",
];

export const EQUIPMENT_TYPES = [
  { value: "dry-van", label: "Dry Van" },
  { value: "reefer", label: "Reefer" },
  { value: "flatbed", label: "Flatbed" },
  { value: "step-deck", label: "Step Deck" },
  { value: "lowboy", label: "Lowboy" },
];

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER — link groups
// ─────────────────────────────────────────────────────────────────────────────
export const FOOTER_LINKS = {
  Services: [
    { label: "Full Truckload (FTL)", href: "#services" },
    { label: "Less Than Truckload (LTL)", href: "#services" },
    { label: "Expedited Freight", href: "#services" },
    { label: "Refrigerated Freight", href: "#services" },
    { label: "Hazmat Transport", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Contact: [
    { label: "Get a Quote", href: "#contact" },
    { label: "1-800-555-1234", href: "tel:+18005551234" },
    { label: "info@swifthaul.com", href: "mailto:info@swifthaul.com" },
    { label: "Support Center", href: "#" },
  ],
};
