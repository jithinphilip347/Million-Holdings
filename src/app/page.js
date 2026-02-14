import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HomeServices from "@/components/HomeServices";
import Contact from "@/components/Contact";

// import ComingSoon from "@/components/ComingSoon";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HomeAbout />
      <HomeServices />
      <Contact />

      {/* <ComingSoon /> */}
    </main>
  );
}
