import tagColors from './tagColors.json';

export function getColor(tag: string) {
    return (tagColors as Record<string, string>)[tag] || tagColors.project;
}
