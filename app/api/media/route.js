import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl) {
    return NextResponse.json({ error: "Missing 'url' query parameter" }, { status: 400 });
  }

  // Security check: validate host to prevent open proxy vulnerability
  let parsedUrl;
  try {
    parsedUrl = new URL(targetUrl);
  } catch {
    return NextResponse.json({ error: "Invalid target URL" }, { status: 400 });
  }

  if (
    parsedUrl.hostname !== "server.redmun.com" &&
    parsedUrl.hostname !== "www.server.redmun.com"
  ) {
    return NextResponse.json(
      { error: "Forbidden target domain. Only server.redmun.com is permitted." },
      { status: 403 }
    );
  }

  try {
    // Perform server-to-server fetch to server.redmun.com
    const upstreamRes = await fetch(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
      },
      next: { revalidate: 86400 },
    });

    if (!upstreamRes.ok) {
      console.error(
        `Upstream media fetch failed for ${targetUrl} with status ${upstreamRes.status}`
      );
      return NextResponse.json(
        {
          error: `Upstream media server returned HTTP ${upstreamRes.status} ${upstreamRes.statusText}`,
          targetUrl,
        },
        { status: upstreamRes.status }
      );
    }

    const contentType = upstreamRes.headers.get("content-type") || "image/jpeg";
    const arrayBuffer = await upstreamRes.arrayBuffer();

    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable, stale-while-revalidate=86400",
      },
    });
  } catch (err) {
    console.error(`Error proxying media from ${targetUrl}:`, err);
    return NextResponse.json(
      { error: "Failed to connect to upstream media server", message: err.message },
      { status: 502 }
    );
  }
}
