import HeroSection from "./components/hero-section";
import NavigationBar from "./components/nav-bar";

export default function Home() {
  return (
    <div className="bg-grey-900 text-white min-h-screen">
    
      <NavigationBar />
      <HeroSection />

    </div>
  );
}
