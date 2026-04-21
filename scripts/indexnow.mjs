const SITE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://magistrala.absmach.eu";
const KEY = process.env.INDEXNOW_KEY;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

if (!KEY) {
  console.error("INDEXNOW_KEY env var is not set; skipping submission.");
  process.exit(0);
}

async function fetchSitemapUrls() {
  const response = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap: ${response.status}`);
  }

  const xml = await response.text();
  const matches = xml.matchAll(/<loc>(.*?)<\/loc>/g);
  return [...matches].map((match) => match[1]);
}

async function submit(urls) {
  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE_URL).hostname,
      key: KEY,
      keyLocation: `${SITE_URL}/${KEY}.txt`,
      urlList: urls,
    }),
  });

  if (response.ok) {
    console.log(
      `IndexNow: submitted ${urls.length} URLs (status ${response.status})`,
    );
    return;
  }

  const text = await response.text();
  console.error(`IndexNow: submission failed (${response.status}): ${text}`);
  process.exit(1);
}

const urls = await fetchSitemapUrls();
if (urls.length === 0) {
  console.log("IndexNow: no URLs found in sitemap; skipping.");
  process.exit(0);
}

await submit(urls);
