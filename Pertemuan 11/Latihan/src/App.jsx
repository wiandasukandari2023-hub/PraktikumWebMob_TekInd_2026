import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Dashboard from './Halaman/Dashboard';
import Inventory from './Halaman/Inventory';
import NotFound from './Halaman/NotFound';
import DetailItem from './Halaman/DetailItem';

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
        </div>

      </div>
    </nav>
  )
}

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<Dashboard />} />

        {/* Halaman inventory */}
        <Route path="/inventory" element={<Inventory />} />

        {/* Dynamic Route detail item */}
        <Route path="/inventory/:id" element={<DetailItem />} />

        {/* Halaman 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;