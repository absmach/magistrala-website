const isProd = process.env.NODE_ENV === 'production';

export function getImageUrl(imageUrl: string): string {
  const placeholderImage = '/crashed-error.svg';

  if (!imageUrl) {
    return isProd ? `/mg-website${placeholderImage}` : placeholderImage;
  }
  return isProd ? `/mg-website/${imageUrl}` : `/${imageUrl}`;
}
