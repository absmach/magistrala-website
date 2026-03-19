import { Rubik } from "next/font/google";
import { Provider } from "@/components/provider";
import "./global.css";
import { baseUrl, createMetadata } from "@/lib/metadata";
import { homepageSchemas } from "@/lib/schema";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export const metadata = createMetadata({
  title: {
    template: "%s | Magistrala",
    default: "Magistrala — Open-Source IoT Platform for Cloud & Edge",
  },
  description:
    "Magistrala is an open-source IoT platform with multi-protocol support (MQTT, CoAP, HTTP, WebSocket), device management, and RBAC — built for cloud and edge.",
  metadataBase: baseUrl,
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={rubik.variable} suppressHydrationWarning>
      <head>
        {homepageSchemas.map((schema) => (
          <script
            key={schema["@type"] as string}
            type="application/ld+json"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static JSON-LD
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="flex flex-col min-h-screen font-(family-name:--font-rubik)">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
