import Link from "next/link";
import styles from "./shared.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.siteFooter}>
      <div>
        <strong>AIRBORNEVEILIGHEID</strong>
        <span>Onderzoeks- en educatieplatform in ontwikkeling</span>
      </div>
      <nav>
        <Link href="/sources">Bronnenbeleid</Link>
        <Link href="/about">Over het platform</Link>
        <a href="https://github.com/sararonald925-design/airborneveiligheid">GitHub</a>
      </nav>
    </footer>
  );
}
