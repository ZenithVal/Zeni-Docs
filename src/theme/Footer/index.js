import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import externalLinks from '@site/src/data/externalLinks';
import styles from './styles.module.css';

function FooterLink({label, href}) {
  if (!href) {
    return <span className={styles.mutedLink}>{label}</span>;
  }

  return (
    <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

export default function Footer() {
  const {siteConfig} = useDocusaurusContext();
  const copyright = siteConfig.themeConfig.footer?.copyright;
  const links = Object.values(externalLinks);

  return (
    <footer className="footer">
      <div className="container">
        <nav className={styles.links} aria-label="External links">
          {links.map((link, index) => (
            <React.Fragment key={link.label}>
              {index > 0 && <span className={styles.separator}>·</span>}
              <FooterLink {...link} />
            </React.Fragment>
          ))}
        </nav>

        {copyright && <div className="footer__copyright">{copyright}</div>}
      </div>
    </footer>
  );
}