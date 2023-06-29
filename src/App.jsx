import { Header, About, Projects } from "./containers";
import { Navbar, CTA, Contact } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <CTA />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
