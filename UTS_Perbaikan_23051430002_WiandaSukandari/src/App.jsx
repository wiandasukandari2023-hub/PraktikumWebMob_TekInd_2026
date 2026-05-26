import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import InputLaporan from './pages/InputLaporan';
import RiwayatData from './pages/RiwayatData';

function App() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('DATA_LAPORAN_PRODUKSI');
    if (savedData) {
      setReports(JSON.parse(savedData));
    }
  }, []); 

  const addReport = (newReport) => {
    const updatedReports = [newReport, ...reports];
    setReports(updatedReports);
    localStorage.setItem('DATA_LAPORAN_PRODUKSI', JSON.stringify(updatedReports));
  };

  const deleteReport = (id) => {
    const updatedReports = reports.filter(item => item.id !== id);
    setReports(updatedReports);
    localStorage.setItem('DATA_LAPORAN_PRODUKSI', JSON.stringify(updatedReports));
  };

  const deleteAllReports = () => {
    setReports([]);
    localStorage.removeItem('DATA_LAPORAN_PRODUKSI');
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard reports={reports} />} />
          <Route path="/input" element={<InputLaporan onAddReport={addReport} />} />
          <Route path="/riwayat" element={<RiwayatData reports={reports} onDeleteReport={deleteReport} onDeleteAll={deleteAllReports} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;