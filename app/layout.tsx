import { Rubik } from "next/font/google";
import { Provider } from "@/components/provider";
import "./global.css";
import { baseUrl, createMetadata } from "@/lib/metadata";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export const metadata = createMetadata({
  title: {
    template: "%s | Magistrala",
    default: "Magistrala",
  },
  description: "Open-source IoT platform for cloud and edge.",
  metadataBase: baseUrl,
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={rubik.variable} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-(family-name:--font-rubik)">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
