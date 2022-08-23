export function importProjectLogo(name: string) {
    const extIndex = name.lastIndexOf('.');
    const ext = name.slice(extIndex);
    name = name.slice(0, extIndex);

    try {
        switch (ext) {
            case '.svg':
                return import(`../assets/projects/${name}.svg`);

            default:
                console.error(`Unknown filename ${name}`);
        }
    } catch (error) {
        console.error(error);
    }
    return '';
}
