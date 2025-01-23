const isProd = process.env.NODE_ENV === 'production';

export function getImageUrl(imageUrl: string): string {
  const placeholderImage = 'crashed-error.svg';

  if (!imageUrl) {
    return placeholderImage;
  }
  return isProd ? `/mg-website/${imageUrl}` : `/${imageUrl}`;
}
