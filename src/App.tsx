import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SeriesPage from './pages/SeriesPage';
import EpisodePage from './pages/EpisodePage';
import EpisodesListPage from './pages/EpisodesListPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-wite">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<SeriesPage />} />
            <Route path="/episodes" element={<EpisodesListPage />} />
            <Route path="/episode/:id" element={<EpisodePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;