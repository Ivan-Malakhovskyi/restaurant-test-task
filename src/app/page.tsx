import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <main>
      <Hero />
      <MaxWidthWrapper>
        <AboutUs />
        <Menu />
      </MaxWidthWrapper>
    </main>
  );
}
