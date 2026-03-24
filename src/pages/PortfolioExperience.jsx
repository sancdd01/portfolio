import HeroExperience from "../portfolio-experience/components/HeroExperience";
import IntroPanel from "../portfolio-experience/components/IntroPanel";
import "../portfolio-experience/styles/portfolio-experience.css";

function PortfolioExperience() {
  return (
    <main className="portfolio-experience">
      <HeroExperience />
      <IntroPanel />
    </main>
  );
}

export default PortfolioExperience;