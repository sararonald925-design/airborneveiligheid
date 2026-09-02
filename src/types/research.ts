export type EvidenceStatus = "established" | "supported" | "interpretation" | "disputed" | "unknown";

export type ResearchSource = {
  id: string;
  title: string;
  type: "primary" | "secondary" | "research-model";
  institution?: string;
  year?: string;
  status: EvidenceStatus;
  supports: string[];
  limitations: string[];
};

export type Place = {
  slug: string;
  name: string;
  role: string;
  summary: string;
  functions: string[];
  connections: string[];
};

export type SystemNode = {
  id: string;
  label: string;
  description: string;
  next?: string[];
};

export type PersonRecord = {
  slug: string;
  name: string;
  role: string;
  location: string;
  summary: string;
};
