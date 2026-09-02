import type { EvidenceStatus } from "@/types/research";
import styles from "./shared.module.css";

const labels: Record<EvidenceStatus, string> = {
  established: "Feitelijk vastgesteld",
  supported: "Sterk onderbouwd",
  interpretation: "Interpretatie",
  disputed: "Betwist",
  unknown: "Onbekend",
};

export function EvidenceBadge({ status }: { status: EvidenceStatus }) {
  return <span className={`${styles.evidenceBadge} ${styles[status]}`}>{labels[status]}</span>;
}
