import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllSongsPage from "./pages/AllSongsPage";
import AllAlbumsPage from "./pages/AllAlbumsPage";
import SubmissionPage from "./pages/SubmissionPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/songs" element={<AllSongsPage />} />
        <Route path="/albums" element={<AllAlbumsPage />} />
        <Route path="/submit" element={<SubmissionPage />} />
      </Routes>
    </Router>
  );
}
export default App;
