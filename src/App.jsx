import { Chart } from "./components/chart";
import { Footer } from "./components/footerDisplay";
import { Header } from "./components/header";
import "./global.css"

function App() {
  return (
    <div>
      <Header/>
      <Chart/>
      <Footer/>
    </div>
  );
}

export default App;
