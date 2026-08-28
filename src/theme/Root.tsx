/**
 * Docusaurus renders `theme/Root` around every page, so this is where site-wide
 * markup goes. The lab/PI structured data lives here rather than on individual
 * pages: crawlers and automated checks land on whichever page a search result
 * or a link points at, not necessarily the homepage.
 */
import type {ReactNode} from 'react';

import StructuredData from '@site/src/components/StructuredData';

export default function Root({children}: {children: ReactNode}): ReactNode {
    return (
        <>
            <StructuredData />
            {children}
        </>
    );
}
