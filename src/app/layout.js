import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import GlobalGrid from "@/components/GlobalGrid";

const objectSans = localFont({
  src: "../assets/fonts/object-sans/Object-Sans-Regular.otf",
  display: "swap",
});

export const metadata = {
  title: "Million Holding International",
  description:
    "Premier consultancy services for global business growth and strategic development.",
  icons: {
    icon: "/fav-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={objectSans.className}>
        <Preloader />
        <Cursor />
        <GlobalGrid />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
