import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Dashboard from './Halaman/Dashboard';
import Inventory from './Halaman/Inventory';
import DetailItem from './Halaman/DetailItem';
import LaporanKualitas from './Halaman/LaporanKualitas';
import NotFound from './Halaman/NotFound';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">

      <div className="container">

        <Link className="navbar-brand" to="/">
          Sistem Pabrik
        </Link>
        <div className="navbar-nav">

          <Link className="nav-link" to="/">
            Dashboard
          </Link>

          <Link className="nav-link" to="/inventory">
            Inventory
          </Link>

          <Link className="nav-link" to="/laporan-kualitas">
            Laporan Kualitas
          </Link>

        </div>

      </div>

    </nav>
  );
}

function App() {

  return (
    <div>

      <Navbar />

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/inventory" element={<Inventory />} />

        <Route path="/inventory/:id" element={<DetailItem />} />

        <Route
          path="/laporan-kualitas"
          element={<LaporanKualitas />}
        />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>
  );
}

export default App;