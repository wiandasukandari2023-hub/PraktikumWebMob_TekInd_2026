import React from 'react';
import KartuMesin from '../Komponen/KartuMesin';

function Latihan1() {
  return (
    <div>
      <h2>Latihan 1 - Destructuring Props</h2>

      <KartuMesin 
        nama="CNC-Turning-01"
        status="Running"
        produksi={150}
      />

      <KartuMesin 
        nama="CNC-Milling-02"
        status="Maintenance"
        produksi={0}
      />

      <KartuMesin 
        nama="Press-Hydraulic-05"
        status="Stop"
        produksi={85}
      />

    </div>
  );
}

export default Latihan1;