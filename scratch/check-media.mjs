const testUrl = "https://server.redmun.com/wp-content/uploads/2026/07/pexels-thefullonmonet-17609313.jpg";

async function testFetch(label, headers = {}) {
  try {
    const res = await fetch(testUrl, { method: "HEAD", headers });
    console.log(`[${label}] Status:`, res.status, res.statusText);
    console.log(`[${label}] Content-Type:`, res.headers.get("content-type"));
  } catch (err) {
    console.log(`[${label}] Error:`, err.message);
  }
}

async function run() {
  console.log("--- TESTING MEDIA FETCH ---");
  await testFetch("No Referer (Browser default with no-referrer policy)");
  await testFetch("Vercel Referer", { "Referer": "https://redmin-digitech.vercel.app/" });
  await testFetch("Origin Header Vercel", { "Origin": "https://redmin-digitech.vercel.app" });
  await testFetch("Same Origin Referer", { "Referer": "https://server.redmun.com/" });
}

run();
