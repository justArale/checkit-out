import { Routes, Route } from "react-router-dom";
import DashboradPage from "./pages/DashboradPage";

function App() {
  return (
    <>
      <h4>Checkit Out!</h4>
      <Routes>
        <Route path="/" element={<DashboradPage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </>
  );
}

export default App;
