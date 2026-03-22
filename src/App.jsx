import PortfolioCurrent from "./pages/PortfolioCurrent";
import PortfolioV2 from "./pages/PortfolioV2";

function App() {
  const route = window.location.hash;

  return route === "#/v2" ? <PortfolioV2 /> : <PortfolioCurrent />;
}

export default App;