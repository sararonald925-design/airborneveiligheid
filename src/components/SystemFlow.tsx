import type { SystemNode } from "@/types/research";
import styles from "./shared.module.css";

export function SystemFlow({ nodes }: { nodes: SystemNode[] }) {
  return (
    <div className={styles.systemFlow}>
      {nodes.map((node, index) => (
        <div className={styles.systemFlowRow} key={node.id}>
          <article id={node.id}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{node.label}</h3>
            <p>{node.description}</p>
          </article>
          {index < nodes.length - 1 ? <div className={styles.flowArrow}>↓</div> : null}
        </div>
      ))}
    </div>
  );
}
