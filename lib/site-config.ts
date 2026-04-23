/**
 * Single source of truth for the Zerox marketing site.
 * All copy, navigation, social links, and SEO metadata live here.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://zerox.com.bd";

export const siteConfig = {
  name: "Zerox",
  legalName: "Zerox Ltd.",
  url: SITE_URL,
  locale: "en_US",
  alternateLocale: "bn_BD",
  tagline: "eCommerce Growth Partner",
  description:
    "Zerox is Bangladesh's end-to-end eCommerce growth partner — a SaaS platform for multi-store order management, real-time tech, video production, content writing, landing pages, and China sourcing via Import Genius.",
  shortDescription:
    "End-to-end eCommerce growth — SaaS platform, video, content, and landing pages that guarantee growth.",
  keywords: [
    "ecommerce growth partner Bangladesh",
    "ecommerce SaaS platform",
    "order management system Bangladesh",
    "multi-courier integration",
    "real-time order streaming",
    "multi-website ecommerce management",
    "video production ecommerce",
    "ecommerce content writing",
    "landing page design",
    "Canton Fair tours",
    "China sourcing Bangladesh",
    "Import Genius",
    "Dhaka ecommerce agency",
    "multi-tenant ecommerce",
    "ecommerce return ratio",
  ],
  location: {
    addressLocality: "Dhaka",
    addressCountry: "BD",
    country: "Bangladesh",
  },
  contact: {
    email: "hello@zerox.com.bd",
    phone: "+880-0000-000000",
  },
  foundingDate: "2024-01-01",
  authorHandle: "@zerox",
  // TODO: replace with real social URLs when available
  socials: {
    x: { url: "#", label: "X (Twitter)", icon: "x" as const },
    linkedin: { url: "#", label: "LinkedIn", icon: "globe" as const },
    facebook: { url: "#", label: "Facebook", icon: "message-circle" as const },
  },
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Platform", href: "#platform" },
  { label: "Import Genius", href: "#import-genius" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  badge: "Trusted ecommerce growth partner",
  headline:
    "We don't just support your ecommerce — we guarantee growth",
  underlineWord: "guarantee",
  subhead:
    "End-to-end support: SaaS platform, video, content, and landing pages built to grow your store — and your profit.",
  ctaPrimary: { label: "Explore services", href: "#services" },
  ctaSecondary: { label: "Book a free call", href: "#contact" },
  stats: [
    { value: "50+", label: "Clients" },
    { value: "Real-time", label: "Tech stack" },
    { value: "Multi-courier", label: "Integrated" },
    { value: "99%", label: "Uptime" },
  ],
};

export const services = [
  {
    icon: "layout-dashboard" as const,
    title: "eCommerce SaaS Platform",
    desc: "Multi-website control, real-time orders, and smart distribution — all from one dashboard.",
  },
  {
    icon: "video" as const,
    title: "Video Production",
    desc: "Full-cycle commercial video: concept, shoot, and delivery that converts browsers to buyers.",
  },
  {
    icon: "film" as const,
    title: "Video Editing",
    desc: "Post-production that transforms raw footage into polished, high-converting ecommerce content.",
  },
  {
    icon: "pen-line" as const,
    title: "Content Writing",
    desc: "SEO-optimised product copy and long-form content engineered to rank and convert.",
  },
  {
    icon: "panel-top" as const,
    title: "Landing Page Design",
    desc: "Conversion-first landing pages — fast, premium, and built to sell.",
  },
];

export const platformTiles = [
  {
    icon: "layout-grid" as const,
    title: "Multi-website management",
    desc: "All your stores. One unified view. No tab chaos.",
    large: true,
  },
  {
    icon: "zap" as const,
    title: "Real-time order streaming",
    desc: "Live updates via Socket — no reload, no lag.",
  },
  {
    icon: "shuffle" as const,
    title: "Round-robin distribution",
    desc: "Smart order routing across your fulfilment network.",
  },
  {
    icon: "trending-down" as const,
    title: "Return-ratio engine",
    desc: "Built-in tools to minimise returns and protect margins.",
  },
  {
    icon: "truck" as const,
    title: "Multi-courier integration",
    desc: "Every major courier in Bangladesh — connected.",
  },
  {
    icon: "users" as const,
    title: "Multi-tenant architecture",
    desc: "Enterprise SaaS infra built to scale without breaking.",
  },
];

export const importGenius = {
  eyebrow: "Sister Concern",
  title: "Import Genius —",
  titleAccent: "your China business partner.",
  body:
    "We help Bangladeshi businesses navigate China trade end-to-end — Canton Fair visits, visa processing, product sourcing, logistics, and everything in between.",
  cta: { label: "Explore Import Genius", href: "#contact" },
  services: [
    { icon: "credit-card" as const, label: "China visa processing" },
    { icon: "map-pin" as const, label: "Canton Fair guided tours" },
    { icon: "search" as const, label: "Product sourcing" },
    { icon: "plane" as const, label: "Tickets & stays" },
    { icon: "package" as const, label: "End-to-end import assistance" },
  ],
};

export const whyZerox = [
  {
    n: "01",
    icon: "dollar-sign" as const,
    title: "Profit-first approach",
    desc: "We only win when you win. Our model is built around your revenue growth — no retainers, no fluff, no vanity metrics.",
  },
  {
    n: "02",
    icon: "layers" as const,
    title: "End-to-end support",
    desc: "From product sourcing to last-mile delivery, we own every step of the growth journey alongside you.",
  },
  {
    n: "03",
    icon: "activity" as const,
    title: "Built for scale",
    desc: "Real-time Socket architecture, multi-tenant infrastructure, and systems that handle 100 or 10,000 orders without breaking.",
  },
];

export const faq = [
  {
    q: "Do you work with stores outside Bangladesh?",
    a: "Yes. While our operations, multi-courier integrations, and Import Genius sourcing are headquartered in Dhaka, our SaaS platform, content writing, video, and landing page services are available globally. We work with ecommerce brands across South and Southeast Asia.",
  },
  {
    q: "How is Zerox's pricing structured?",
    a: "We use a profit-first model: flexible packages tied to growth outcomes rather than flat retainers. Book a free 30-minute strategy call and we will scope a plan around your current store and revenue goals.",
  },
  {
    q: "Which couriers does the SaaS platform integrate with?",
    a: "Every major courier in Bangladesh — including Pathao, Steadfast, RedX, Paperfly, eCourier, and others — is connected to the platform with round-robin distribution and live tracking.",
  },
  {
    q: "What is Import Genius?",
    a: "Import Genius is our sister concern focused on the Bangladesh–China trade corridor. We handle visa processing, Canton Fair guided tours, product sourcing, tickets and stays, and end-to-end import logistics so you can source at the best cost without ever leaving your desk (unless you want to).",
  },
  {
    q: "How fast is onboarding?",
    a: "Most stores are live on the Zerox platform within 5–7 business days — including courier integrations, multi-website setup, and data migration. Complex multi-tenant rollouts take 2–3 weeks.",
  },
];

export const tickerItems = [
  "eCommerce Growth",
  "SaaS Platform",
  "Video Production",
  "Content Writing",
  "Landing Pages",
  "Import Genius",
  "Order Management",
  "Multi-Courier",
  "Real-time Tech",
];

export const cta = {
  eyebrow: "Limited onboarding spots — Q2 2026",
  headline: "Ready to scale your ecommerce?",
  subhead:
    "Book a free 30-minute strategy call. Honest analysis, no pitch decks.",
  placeholder: "your@email.com",
  buttonLabel: "Book free strategy call",
  note: "No commitment · 30-minute call · Free audit included",
  success: "We'll reach out within 24 hours.",
};

export const footer = {
  blurb:
    "Bangladesh's end-to-end ecommerce growth partner — technology, content, and operations in one.",
  columns: [
    {
      title: "Services",
      links: [
        { label: "SaaS Platform", href: "#platform" },
        { label: "Video Production", href: "#services" },
        { label: "Video Editing", href: "#services" },
        { label: "Content Writing", href: "#services" },
        { label: "Landing Pages", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#why-us" },
        { label: "Import Genius", href: "#import-genius" },
        { label: "Why Us", href: "#why-us" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  copyright: "© 2026 Zerox · Dhaka, Bangladesh",
};
