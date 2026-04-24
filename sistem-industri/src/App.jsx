import { useState } from 'react';
import Latihan1 from './Latihan/Latihan1';
import Latihan2 from './Latihan/Latihan2';
import KartuKaryawan from './Latihan/KartuKaryawan';

function App() {
  const [halaman, setHalaman] = useState('latihan1');

  return (
    <div className="container mt-3">

      <h1>Monitoring Lini Produksi</h1>
      <small className="text-muted d-block mb-3">
        Wianda Sukandari (23051430002)
      </small>

      <button onClick={() => setHalaman('latihan1')}>Latihan 1</button>
      <button onClick={() => setHalaman('latihan2')}>Latihan 2</button>
      <button onClick={() => setHalaman('mini')}>Mini Project</button>

      <hr />

      {halaman === 'latihan1' && <Latihan1 />}
      {halaman === 'latihan2' && <Latihan2 />}

      {halaman === 'mini' && (
        <div>
          <h2>Mini Project - Kartu Karyawan</h2>

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
      )}

    </div>
  );
}

export default App;