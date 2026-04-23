import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(160deg, #FAFAFA 0%, #E9EEF6 55%, #D7E6F4 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(135,206,235,0.55) 0%, rgba(135,206,235,0) 70%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#0A0A0A",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#00AEF7",
              marginTop: 6,
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 700,
              color: "#4A5568",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
            }}
          >
            {siteConfig.tagline}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 82,
              fontWeight: 800,
              color: "#0A0A0A",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: 1000,
            }}
          >
            We don{"'"}t just support your ecommerce —{" "}
            <span style={{ color: "#00AEF7" }}>we guarantee growth.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#4A5568",
            fontWeight: 600,
          }}
        >
          <span>
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </span>
          <span>Dhaka · Bangladesh</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
