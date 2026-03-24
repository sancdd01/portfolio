import PortfolioCurrent from "./pages/PortfolioCurrent";
import PortfolioExperience from "./pages/PortfolioExperience";

function App() {
  const route = window.location.hash;

  return route === "#/v2" ? <PortfolioExperience   /> : <PortfolioCurrent />;
}

export default App;