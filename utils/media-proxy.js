/**
 * Wraps external WordPress media URLs to route through /api/media proxy
 */
export function getProxiedImageUrl(originalUrl) {
  if (!originalUrl || typeof originalUrl !== "string") {
    return null;
  }

  const cleanUrl = originalUrl.trim();

  // Route server.redmun.com images through Next.js /api/media proxy
  if (
    cleanUrl.startsWith("http://server.redmun.com") ||
    cleanUrl.startsWith("https://server.redmun.com")
  ) {
    const httpsUrl = cleanUrl.replace(/^http:\/\//i, "https://");
    return `/api/media?url=${encodeURIComponent(httpsUrl)}`;
  }

  // Return static local asset or relative path as-is
  return cleanUrl;
}
