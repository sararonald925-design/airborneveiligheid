import Link from "next/link";
import styles from "./shared.module.css";

const links = [
  ["/", "Home"],
  ["/system", "Systeem"],
  ["/airborne-1944", "Airborne 1944"],
  ["/map", "Kaart"],
  ["/people", "Mensen"],
  ["/archive", "Archief"],
  ["/sources", "Bronnen"],
];

export function SiteHeader() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerInner}>
        <Link className={styles.brand} href="/">
          <strong>AIRBORNEVEILIGHEID</strong>
          <span>BEGRIJP HOE HET KON GEBEUREN</span>
        </Link>
        <nav className={styles.desktopNav} aria-label="Hoofdnavigatie">
          {links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <details className={styles.mobileNav}>
          <summary aria-label="Open navigatie">MENU</summary>
          <nav>
            {links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/about">Over het platform</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
