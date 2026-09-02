import styles from "./shared.module.css";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  meta?: string;
};

export function PageHero({ eyebrow, title, intro, meta }: Props) {
  return (
    <section className={styles.pageHero}>
      <div className={styles.pageHeroInner}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
        {meta ? <small>{meta}</small> : null}
      </div>
    </section>
  );
}
