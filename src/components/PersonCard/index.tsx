import type { ReactNode } from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import type { Person } from '@site/src/data/people';

import styles from './styles.module.css';

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

/**
 * Hexagonal portrait frame: shows the photo when there is one, and a monogram
 * in the lab gradient when there is not.
 */
function Portrait({
  person,
  size,
}: {
  person: Person;
  size: 'sm' | 'lg';
}): ReactNode {
  const photoUrl = useBaseUrl(person.photo ?? '');
  return (
    <div className={clsx(styles.portrait, size === 'lg' && styles.portraitLg)}>
      {person.photo ? (
        <img src={photoUrl} alt={person.name} loading="lazy" />
      ) : (
        <span className={styles.monogram} aria-hidden="true">
          {initials(person.name)}
        </span>
      )}
    </div>
  );
}

function PersonLinks({ person }: { person: Person }): ReactNode {
  if (!person.links?.length) {
    return null;
  }
  return (
    <div className={styles.links}>
      {person.links.map((link) => (
        <a
          key={link.href}
          className={styles.linkChip}
          href={link.href}
          target={link.href.startsWith('mailto:') ? undefined : '_blank'}
          rel="noreferrer">
          {link.label}
        </a>
      ))}
    </div>
  );
}

/** Wide, two-column card used for the lab lead. */
export function PersonFeature({ person }: { person: Person }): ReactNode {
  return (
    <div className={clsx('mlcil-card', styles.feature)}>
      <div className={styles.featureAside}>
        <Portrait person={person} size="lg" />
      </div>
      <div className={styles.featureBody}>
        <Heading as="h3" className={styles.featureName}>
          {person.name}
        </Heading>
        <p className={styles.role}>{person.role}</p>
        {person.bio && <p className={styles.bio}>{person.bio}</p>}
        {person.interests && person.interests.length > 0 && (
          <div className="mlcil-tag-row">
            {person.interests.map((interest) => (
              <span key={interest} className="mlcil-tag">
                {interest}
              </span>
            ))}
          </div>
        )}
        <PersonLinks person={person} />
      </div>
    </div>
  );
}

export default function PersonCard({ person }: { person: Person }): ReactNode {
  return (
    <div className={clsx('mlcil-card', 'mlcil-card--interactive', styles.card)}>
      <Portrait person={person} size="sm" />
      <Heading as="h3" className={styles.name}>
        {person.name}
      </Heading>
      <p className={styles.role}>{person.role}</p>
      {person.bio && <p className={styles.bio}>{person.bio}</p>}
      {person.interests && person.interests.length > 0 && (
        <div className={clsx('mlcil-tag-row', styles.cardTags)}>
          {person.interests.slice(0, 4).map((interest) => (
            <span key={interest} className="mlcil-tag">
              {interest}
            </span>
          ))}
        </div>
      )}
      <PersonLinks person={person} />
    </div>
  );
}
