import "./globals.css";

export const metadata = {
  title: "Million Holding International",
  description:
    "Premier consultancy services for global business growth and strategic development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
