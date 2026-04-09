import { Rubik } from "next/font/google";
import { Provider } from "@/components/provider";
import "./global.css";
import { baseUrl, createMetadata } from "@/lib/metadata";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export const metadata = createMetadata({
  title: {
    template: "%s | Magistrala",
    default: "Magistrala — Open-Source IoT Platform for Cloud & Edge",
  },
  description:
    "Magistrala is an open-source IoT platform with multi-protocol support (MQTT, CoAP, HTTP, WebSocket), device management, and RBAC — built for cloud and edge.",
  metadataBase: baseUrl,
  openGraph: { url: `${baseUrl}/` },
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={rubik.variable} suppressHydrationWarning>
      <head>
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        />
      </head>
      <body className="flex flex-col min-h-screen font-(family-name:--font-rubik)">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
