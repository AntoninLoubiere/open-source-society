import { browser } from '$app/env';
import { base } from '$app/paths';
import routes from '../routes/en/ids.json';

export function isAppLink(pageUrl: URL, url: string) {
    return new URL(url, pageUrl).hostname == pageUrl.hostname;
}

export function getLocaliseURL(pageUrl: string, locale: string) {
    if (pageUrl.startsWith('/')) pageUrl = pageUrl.slice(1);

    if (pageUrl in routes) {
        const trans = (routes as Record<string, Record<string, string>>)[pageUrl];
        if (locale in trans) return base + '/' + trans[locale];
    }

    const sep = pageUrl.lastIndexOf('/');
    if (sep >= 0) {
        const basePath = pageUrl.slice(0, sep);
        if (basePath in routes) {
            const trans = (routes as Record<string, Record<string, string>>)[basePath];
            if (locale in trans) {
                return base + '/' + trans[locale] + pageUrl.slice(sep);
            }
        }
    }

    return base + '/' + locale;
}

export function convertRemToPixels(rem: string) {
    if (rem.endsWith('rem')) rem = rem.slice(0, -3);
    const remInt = Number(rem);
    if (!browser) return remInt * 16;

    return remInt * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
