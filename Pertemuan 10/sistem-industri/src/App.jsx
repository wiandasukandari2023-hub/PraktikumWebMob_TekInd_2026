import React from 'react';
import Latihan1 from './Latihan/Latihan1';
import Latihan2 from './Latihan/Latihan2';
import KartuKaryawan from './Latihan/KartuKaryawan';
import CounterProduksi from './Komponen/CounterProduksi';
import JamDigital from './Komponen/JamDigital';
import OEECalculator from './Komponen/OEECalculator';

function App() {
  return (
    <div className="container mt-4">

      {/* HEADER */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Monitoring Lini Produksi</h1>
        <p className="text-muted mb-1">
          Praktikum Aplikasi Web & Mobile
        </p>
        <small className="text-muted">
          Wianda Sukandari (23051430002)
        </small>
      </div>

      {/* JAM DIGITAL */}
      <div className="mb-4">
        <JamDigital />
      </div>

      {/* LATIHAN 1 */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <Latihan1 />
        </div>
      </div>

      {/* LATIHAN 2 */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <Latihan2 />
        </div>
      </div>

      {/* MINI PROJECT */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h2 className="mb-4 text-center">
            Mini Project - Kartu Karyawan
          </h2>

          <KartuKaryawan
            nama="Andi Saputra"
            jabatan="Manager"
            bagian="Produksi"
          />

          <KartuKaryawan
            nama="Budi Santoso"
            jabatan="Operator"
            bagian="Mesin CNC"
          />

          <KartuKaryawan
            nama="Citra Dewi"
            jabatan="QC"
            bagian="Quality Control"
          />
        </div>
      </div>

      {/* COUNTER PRODUKSI */}
      <div className="card shadow-sm mb-5">
        <div className="card-body">
          <h2 className="text-center mb-4">
            Monitoring Counter Produksi
          </h2>

          <CounterProduksi />
          <OEECalculator />
        </div>
      </div>

    </div>
  );
}

export default App;