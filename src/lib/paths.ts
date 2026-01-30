// Base path for GitHub Pages deployment
const isProd = process.env.NODE_ENV === 'production';
export const basePath = isProd ? '/Kraken' : '';

// Helper to get full image path
export function getImagePath(src: string): string {
    if (src.startsWith('http://') || src.startsWith('https://')) {
        return src;
    }
    const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
    return `${basePath}${normalizedSrc}`;
}
