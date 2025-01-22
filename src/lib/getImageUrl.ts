const isProd = process.env.NODE_ENV === 'production';

export function getImageUrl(imageUrl: string): string {
    return isProd ? `/mg-website/${imageUrl}` : `/${imageUrl}`;
}
