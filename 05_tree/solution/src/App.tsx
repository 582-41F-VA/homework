import { breadcrumbs, entries } from "./data.ts";

export default function App() {
    return (
        <>
            <TOC entries={entries} breadcrumbs={breadcrumbs} />
        </>
    );
}

type Entry = {
    name: string;
    slug: string;
    entries?: Array<Entry>;
};

type EntryProps = {
    name: string;
    slug: string;
    entries?: Array<Entry>;
    breadcrumbs: Array<Entry>;
};

type TOCProps = {
    entries: Array<Entry>;
    breadcrumbs: Array<Entry>;
};

function TOC({ entries, breadcrumbs }: TOCProps) {
    return (
        <ol>
            {entries.map(entry => (
                <li key={entry.slug}>
                    <Entry {...entry} breadcrumbs={breadcrumbs} />
                </li>
            ))}
        </ol>
    );
}

function Entry({ name, slug, entries, breadcrumbs }: EntryProps) {
    const isOpen = breadcrumbs.some(entry => entry.slug === slug);
    const lastBreadcrumb = breadcrumbs.at(-1);
    const isCurrent = lastBreadcrumb && lastBreadcrumb.slug === slug;

    const a = (
        <a href={slug} style={{ backgroundColor: isCurrent ? "yellow" : "" }}>
            {name}
        </a>
    );
    if (!entries) return a;
    return (
        <details open={isOpen}>
            <summary>{a}</summary>
            <ol>
                {entries.map(entry => (
                    <li key={entry.slug}>
                        <Entry {...entry} breadcrumbs={breadcrumbs} />
                    </li>
                ))}
            </ol>
        </details>
    );
}
