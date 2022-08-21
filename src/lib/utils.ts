export function isAppLink(pageUrl: URL, url: string) {
    return new URL(url, pageUrl).hostname == pageUrl.hostname;
}
