import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { personal } from "@/content/personal";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.shortRole}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Carte de partage 1200×630 (LinkedIn, X, Slack, etc.), générée au build.
export default async function OpengraphImage() {
  const portrait = await readFile(
    path.join(process.cwd(), "public", "media", "portrait.jpg"),
  );
  const src = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #031a2a 0%, #044477 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#38bdf8",
            }}
          >
            {`${personal.currentCompany} · Lyon`}
          </div>
          <div style={{ fontSize: 88, fontWeight: 700, marginTop: 24 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 38, marginTop: 20, color: "#d6e6f2" }}>
            {site.shortRole}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          width={380}
          height={380}
          alt=""
          style={{
            borderRadius: 40,
            border: "6px solid rgba(255,255,255,0.85)",
            objectFit: "cover",
          }}
        />
      </div>
    ),
    size,
  );
}
