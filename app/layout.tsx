import type { Metadata } from "next";
import { cookies } from "next/headers";
import "@pimolu/web-styles/styles.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const siteUrl = new URL("https://saas-landing.pimolu.com");
const pageTitle = "Project Workspace | Work moves better together";
const pageDescription =
  "A project management landing page template built with Pimolu UI. Explore a clearer way to plan, collaborate, and track work.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/",
    siteName: "Project Workspace",
    type: "website",
    images: [
      {
        url: "/preview.png",
        alt: "Preview of the Project Workspace landing page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/preview.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const saved = (await cookies()).get("workspace-theme")?.value;
  const theme = saved === "dark" ? "dark" : "light";
  return (
    <html lang="en" data-theme={theme}>
      <body>
        <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
