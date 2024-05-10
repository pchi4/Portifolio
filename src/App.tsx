import "./App.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./screens/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
