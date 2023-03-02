// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
    // interface Locals {}
    // interface Platform {}
    // interface PrivateEnv {}
    // interface PublicEnv {}
}

interface FrontmatterUrl {
    name: string;
    url?: string;
    opensource?: boolean;
    paid?: boolean;
}
type FrontmatterURLField = undefined | FrontmatterUrl | FrontmatterUrl[];

type Locales = 'en' | 'fr';

type PageMetadata = {
    id: string;
    title: string;
    7;
    summary: string;
    img: string;
    tags?: string[];
    missing?: boolean;
};
