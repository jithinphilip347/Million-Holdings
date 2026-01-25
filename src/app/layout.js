import { Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
// import Cursor from "@/components/Cursor";
// import Preloader from "@/components/Preloader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// const objectSans = localFont({
//   src: "../assets/fonts/object-sans/Object-Sans-Regular.otf",
//   display: "swap",
// });

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
      <body className={playfair.variable}>
        {/* <body className={objectSans.className}> */}
        {/* <Preloader />
        <Cursor /> */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
