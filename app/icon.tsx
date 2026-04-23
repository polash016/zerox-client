import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          color: "#FFFFFF",
          fontSize: 40,
          fontWeight: 800,
          fontFamily: "sans-serif",
          letterSpacing: "-0.04em",
          borderRadius: 12,
        }}
      >
        Z
      </div>
    ),
    { ...size },
  );
}
