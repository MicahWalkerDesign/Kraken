const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/Kraken' : '';

export default function imageLoader({
    src,
    width,
    quality,
}: {
    src: string;
    width: number;
    quality?: number;
}): string {
    // For external URLs, return as-is
    if (src.startsWith('http://') || src.startsWith('https://')) {
        return src;
    }

    // For local images, prepend basePath
    const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
    return `${basePath}${normalizedSrc}`;
}
