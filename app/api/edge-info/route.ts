import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const colo = request.headers.get("cf-ray")?.split("-")[1] || "DEV-LOCAL";
  const ipCountry = request.headers.get("cf-ipcountry") || "ID";

  return NextResponse.json({
    edge: true,
    datacenter: colo,
    country: ipCountry,
    timestamp: new Date().toISOString(),
    runtime: "Cloudflare Pages Edge Runtime",
  });
}
