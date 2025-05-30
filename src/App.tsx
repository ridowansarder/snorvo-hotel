import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const isDashboard = useLocation().pathname.includes("dashboard");

  return (
    <div>
      {!isDashboard && <Navbar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
