/** Site identity for Artometrics Glossary. */
export const SITE = "https://glossary.artometrics.com";
export const SITE_NAME = "Artometrics Glossary";
export const PRODUCT_LABEL = "Glossary";
export const PRODUCT = "glossary";
export const NAV = [
  { href: "/", label: "Index", descriptor: "Entries and styles" },
  { href: "/encyclopedia", label: "Encyclopedia", descriptor: "People, figures, events" },
  { href: "/questions", label: "Questions", descriptor: "What people ask" },
  { href: "/styles", label: "Style board", descriptor: "Histories and files" },
  { href: "https://academy.artometrics.com", label: "Academy", descriptor: "Beginner guides" },
  { href: "https://gotha.artometrics.com", label: "Gotha", descriptor: "Almanac of artifacts" },
  { href: "https://artometrics.com", label: "Artometrics", descriptor: "Magazine" }
];
export const FOOTER_PRIMARY = [
  ["/", "Index"],
  ["/encyclopedia", "Encyclopedia"],
  ["/questions", "Questions"],
  ["/styles", "Style board"],
  ["https://academy.artometrics.com", "Academy"]
];

/** Universe row: sibling Artometrics sites (matches artometrics.com's footer). */
export const UNIVERSE = [
  ["https://artometrics.com", "Magazine"],
  ["https://academy.artometrics.com", "Academy"],
  ["https://gotha.artometrics.com", "Gotha"]
];
