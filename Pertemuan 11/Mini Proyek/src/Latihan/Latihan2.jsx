import React from 'react';
import KartuMesin from '../Komponen/KartuMesin';

function Latihan2() {
    return (
        <div className="container mt-3">

            <h2>Latihan 2 - Default Props</h2>
            <small className="text-muted d-block mb-3">
                Wianda Sukandari (23051430002)
            </small>

            {/* Lengkap */}
            <KartuMesin
                nama="CNC-Turning-01"
                status="Running"
                produksi={150}
            />

            {/* TANPA produksi → harus jadi 0 */}
            <KartuMesin
                nama="CNC-Drilling-03"
                status="Running"
            />

            {/* TANPA produksi → harus jadi 0 */}
            <KartuMesin
                nama="Laser-Cutting-04"
                status="Maintenance"
            />

        </div>
    );
}

export default Latihan2;