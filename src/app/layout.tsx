import { redirectData } from "~/redirect-data";
import "./globals.css";

export const metadata = {
  title: `Rediction : ${redirectData.name}`,
  description: `Redirecting to ${redirectData.link}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
