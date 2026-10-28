import type { Metadata } from "next";
import { cookies } from "next/headers";
import "@pimolu/web-styles/styles.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Project Workspace | Work moves better together",
  description: "A project management landing page template built with Pimolu UI. Explore a clearer way to plan, collaborate, and track work.",
  openGraph: { title: "Project Workspace", description: "A project management landing page template built with Pimolu UI.", type: "website" },
  twitter: { card: "summary_large_image", title: "Project Workspace", description: "A project management landing page template built with Pimolu UI." },
};
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const saved = (await cookies()).get("workspace-theme")?.value;
  const theme = saved === "dark" ? "dark" : "light";
  return <html lang="en" data-theme={theme}><body><ThemeProvider initialTheme={theme}>{children}</ThemeProvider></body></html>;
}

