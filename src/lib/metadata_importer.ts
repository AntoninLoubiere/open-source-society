import { browser } from '$app/environment';

const cache: Record<string, PageMetadata> = {};
export async function getPageMetadata(id: string) {
    if (id in cache) {
        return cache[id];
    }
    const glob_import = import.meta.glob<PageMetadata>('/src/routes/*/**/metadata.json', {
        import: 'default',
    });
    const metadata = await glob_import[`/src/routes/${id}/metadata.json`]();
    metadata.id = id;
    return (cache[id] = metadata);
}

export function addToCache(id: string, metadata: PageMetadata | undefined) {
    if (metadata) cache[id] = metadata;
}

export function getMetadataFromCache(id: string): PageMetadata | undefined {
    return cache[id];
}

if (!browser) {
    const glob_import = import.meta.glob<PageMetadata>('/src/routes/*/**/metadata.json', {
        import: 'default',
    });
    const ids = Object.keys(glob_import);
    const modules = await Promise.all(ids.map((id) => glob_import[id]()));
    modules.forEach(
        (mod, i) => (cache[/\/src\/routes\/(.*)\/metadata.json/.exec(ids[i])?.[1] || ''] = mod)
    );
}
