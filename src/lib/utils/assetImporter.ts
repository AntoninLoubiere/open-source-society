export function importProjectLogo(name: string) {
    const extIndex = name.lastIndexOf('.');
    const ext = name.slice(extIndex);
    name = name.slice(0, extIndex);

    switch (ext) {
        case '.svg':
            return import(`../assets/projects/${name}.svg`);

        default:
            throw `Unknown filename ${name}`;
    }
}
