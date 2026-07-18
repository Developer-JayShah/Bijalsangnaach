import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          background: "#0b0a08",
          borderRadius: "50%",
          border: "2px solid #d4af6a",
          color: "#f2e4c4",
          fontSize: 15,
          fontWeight: 700,
          fontFamily: "serif",
          letterSpacing: 0.5,
        }}
      >
        BS
      </div>
    ),
    { ...size }
  );
}
