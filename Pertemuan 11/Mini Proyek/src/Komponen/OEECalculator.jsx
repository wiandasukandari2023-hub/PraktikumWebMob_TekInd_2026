import React, { useState } from 'react';

function OEECalculator() {
  const [planTime, setPlanTime] = useState(0);
  const [runTime, setRunTime] = useState(0);
  const [totalParts, setTotalParts] = useState(0);
  const [goodParts, setGoodParts] = useState(0);

  // Perhitungan OEE
  const availability =
    planTime > 0 ? runTime / planTime : 0;

  const performance =
    runTime > 0 ? totalParts / runTime : 0;

  const quality =
    totalParts > 0 ? goodParts / totalParts : 0;

  const oee =
    availability * performance * quality * 100;

  // Warna hasil
  let warnaHasil = "black";

  if (oee < 50) {
    warnaHasil = "red";
  } else if (oee > 85) {
    warnaHasil = "green";
  }

  return (
    <div className="card p-4 shadow-sm">
      <h2 className="text-center mb-4">
        Kalkulator OEE
      </h2>

      <div className="mb-3">
        <label>Plan Time</label>
        <input
          type="number"
          className="form-control"
          value={planTime}
          onChange={(e) => setPlanTime(Number(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <label>Run Time</label>
        <input
          type="number"
          className="form-control"
          value={runTime}
          onChange={(e) => setRunTime(Number(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <label>Total Parts</label>
        <input
          type="number"
          className="form-control"
          value={totalParts}
          onChange={(e) => setTotalParts(Number(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <label>Good Parts</label>
        <input
          type="number"
          className="form-control"
          value={goodParts}
          onChange={(e) => setGoodParts(Number(e.target.value))}
        />
      </div>

      <hr />

      <h4 style={{ color: warnaHasil }}>
        Nilai OEE: {oee.toFixed(2)}%
      </h4>
    </div>
  );
}

export default OEECalculator;