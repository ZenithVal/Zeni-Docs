import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const socialLinks = [
  {
    label: 'Bluesky',
    icon: '/img/socials/bluesky.svg',
    href: 'https://bsky.app/profile/zenithval.com',
  },
  {
    label: 'Twitter',
    icon: '/img/socials/twitter.svg',
    href: 'https://twitter.com/ZenithVal',
  },
  {
    label: 'Twitch',
    icon: '/img/socials/twitch.svg',
    href: 'https://www.twitch.tv/zenithval',
  },
  {
    label: 'YouTube',
    icon: '/img/socials/youtube.svg',
    href: 'https://www.youtube.com/@ZenithVal.',
  },
  {
    label: 'Discord',
    icon: '/img/socials/discord.svg',
    href: 'https://discord.gg/Dpzkz4j4WW',
  }
];

const workLinks = [
  {
    label: 'Patreon',
    icon: '/img/socials/patreon.svg',
    href: 'https://www.patreon.com/zenithval',
  },
  {
    label: 'Booth',
    icon: '/img/socials/booth.svg',
    href: 'https://zenithval.booth.pm/',
  },
  {
    label: 'Trello',
    icon: '/img/socials/trello.svg',
    href: 'https://trello.com/b/pUzEF0SZ/zens-work',
  },
  {
    label: 'GitHub',
    icon: '/img/socials/github.svg',
    href: 'https://github.com/ZenithVal',
  },
];

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

function ExternalIconLink({label, icon, href}) {
  const iconElement = <img className={styles.socialIcon} src={icon} alt="" aria-hidden="true" />;

  if (!href) {
    return (
      <span className={clsx(styles.iconLink, styles.iconLinkMuted)} title={label} aria-label={label}>
        {iconElement}
      </span>
    );
  }

  return (
    <a
      className={styles.iconLink}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      {iconElement}
    </a>
  );
}

function IconSection({title, links}) {
  return (
    <div className={styles.linkSection}>
      <Heading as="h2" className={styles.linkHeading}>
        {title}
      </Heading>
      <div className={styles.iconGrid}>
        {links.map((link) => (
          <ExternalIconLink key={link.label} {...link} />
        ))}
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroTitleRow}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <img className={styles.heroMascot} src="/img/zeni-excite.png" alt="Zeni" />
        </div>
        <div className={styles.introCard}>
          <p className={styles.aboutText}>
            Technical artist, modeler, kitbasher, and gimmick creator for VR Avatars.
          </p>
          <IconSection title="Socials" links={socialLinks} />
          <IconSection title="Work & Store" links={workLinks} />
        </div>
        <SectionButtons /> 
        <br/>
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
    <Layout title="Home" description="ZenithVal's Site Woah" wrapperClassName="home-page">
      <HomepageHeader />
    </Layout>
  );
}