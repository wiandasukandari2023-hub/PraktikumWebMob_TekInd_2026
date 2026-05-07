import React, { useState } from 'react';

function CounterProduksi() {
  const [jumlah, setJumlah] = useState(0);
  const [target, setTarget] = useState(100);
  const [status, setStatus] = useState("Produksi Berjalan");

  // Tambah produksi
  const tambahProduksi = () => {
    setJumlah(jumlah + 1);
  };

  // Reset
  const reset = () => {
    setJumlah(0);
    setStatus("Produksi Berjalan");
  };

  // Emergency Stop
  const emergencyStop = () => {
    setStatus("EMERGENCY");
  };

  return (
    <div className="text-center p-4 border rounded bg-light">

      <h3>Simulasi Hitung Produk</h3>

      <h1 className="display-4">{jumlah}</h1>

      <p>Target: {target} Unit</p>

      {/* Conditional Rendering */}
      {status === "EMERGENCY" ? (
        <div className="alert alert-danger d-inline-block">
          ⚠ EMERGENCY STOP! Produksi dihentikan
        </div>
      ) : jumlah >= target ? (
        <div className="alert alert-success d-inline-block">
          Target Tercapai!
        </div>
      ) : (
        <div className="alert alert-secondary d-inline-block">
          Produksi Berjalan...
        </div>
      )}

      <div className="mt-3">

        <button
          className="btn btn-primary me-2"
          onClick={tambahProduksi}
          disabled={status === "EMERGENCY"}
        >
          +1 Unit
        </button>

        <button
          className="btn btn-danger me-2"
          onClick={emergencyStop}
        >
          Emergency Stop
        </button>

        <button
          className="btn btn-warning"
          onClick={reset}
        >
          Reset Shift
        </button>

      </div>
    </div>
  );
}

export default CounterProduksi;