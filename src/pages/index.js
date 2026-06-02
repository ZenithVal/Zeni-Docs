import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const sectionLinks = [
  {
    label: 'Creations',
    to: '/creations',
  },
  {
    label: 'Updates',
    to: '/updates',
  },
  {
    label: 'Support & Patreon',
    to: '/support',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img className={styles.heroMascot} src="/img/zeni-excite.png" alt="Zeni" />
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function SectionButtons() {
  return (
    <section className={styles.sectionButtons} aria-label="Site sections">
      <div className="container">
        <div className={styles.buttonGrid}>
          {sectionLinks.map((link) => (
            <Link key={link.label} className={styles.sectionButton} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="ZenithVal's place for activities.">
      <HomepageHeader />
      <main>
        <SectionButtons />
      </main>
    </Layout>
  );
}
