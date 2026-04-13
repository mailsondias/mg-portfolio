import { AboutSection } from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import { HeroSection } from "@/components/HeroSection";

export default async function Home() {
  return (
    <div
      className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col bg-background font-sans transition-colors duration-200 ease-out dark:bg-background"
      suppressHydrationWarning
    >
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
    </div>
  );
}
