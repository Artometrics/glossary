/** Shared shapes for encyclopedia entries and style boards. */

export type EntryKind = "person" | "event" | "context";

export type Related = {
  href: string;
  label: string;
  note: string;
};

export type Entry = {
  slug: string;
  title: string;
  /** Alphabetical filing name. Display title stays the common one. */
  sortName: string;
  letter: string;
  kind: EntryKind;
  dates: string;
  /** One sentence. Also the card blurb. */
  dek: string;
  description: string;
  tags: string[];
  /** One dense paragraph, as HTML. */
  body: string;
  /** How the record is known, as HTML. */
  sources: string;
  related: Related[];
};

export type Plate = {
  label: string;
  caption: string;
};

export type DownloadFile = {
  href: string;
  filename: string;
  note: string;
  /** Save-as for the text stubs. The HTML starter opens in the browser. */
  download: boolean;
};

export type StyleBoard = {
  slug: string;
  title: string;
  dates: string;
  dek: string;
  description: string;
  tags: string[];
  history: string;
  figures: string;
  plates: Plate[];
  downloads: DownloadFile[];
  related: Related[];
};

export const KIND_LABEL: Record<EntryKind, string> = {
  person: "Person",
  event: "Event",
  context: "Context",
};

export const ENTRY_KINDS: EntryKind[] = ["person", "event", "context"];
