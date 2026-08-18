import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

type SectionProps = {
    id?: string;
    title?: ReactNode;
    lead?: ReactNode;
    /** Renders on a tinted background with hairline rules. */
    sunken?: boolean;
    /** Optional element pinned to the right of the heading (e.g. a link). */
    action?: ReactNode;
    className?: string;
    children: ReactNode;
};

/**
 * Page section with the standard MLCIL heading block.
 */
export default function Section({
    id,
    title,
    lead,
    sunken,
    action,
    className,
    children,
}: SectionProps): ReactNode {
    const hasHead = Boolean(title || lead || action);
    return (
        <section
            id={id}
            className={clsx('mlcil-section', sunken && 'mlcil-section--sunken', className)}
        >
            <div className="mlcil-container">
                {hasHead && (
                    <div className="mlcil-section-head">
                        <div className="mlcil-section-head-row">
                            <div>
                                <span className="mlcil-accent-bar" aria-hidden="true" />
                                {title && (
                                    <Heading as="h2" className="mlcil-section-title">
                                        {title}
                                    </Heading>
                                )}
                            </div>
                            {action && <div className="mlcil-section-action">{action}</div>}
                        </div>
                        {lead && <p className="mlcil-section-lead">{lead}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
