import React from 'react';
import GrafikProduksi from '../Komponen/GrafikProduksi';
import KartuMesin from '../Komponen/KartuMesin';
import DonatCacat from '../Komponen/DonatCacat';

function Dashboard() {
    return (
        <div className="container mt-4">

            {/* Judul */}
            <div className="row mb-4">
                <div className="col-12">
                    <h2 className="fw-bold text-center">
                        Dashboard Pintar 4.0
                    </h2>
                    <hr />
                </div>
            </div>

            {/* Bagian Atas */}
            <div className="row g-4 mb-4">

                {/* Grafik Produksi */}
                <div className="col-12 col-lg-8">

                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <GrafikProduksi />
                        </div>
                    </div>

                </div>

                {/* KPI */}
                <div className="col-12 col-lg-4">

                    <div className="card bg-primary text-white shadow-sm mb-3">
                        <div className="card-body">
                            <h5>Total Output Hari Ini</h5>
                            <h2>1,030 Unit</h2>
                            <small>Update terakhir: 13:00</small>
                        </div>
                    </div>

                    <div className="card bg-success text-white shadow-sm">
                        <div className="card-body">
                            <h5>Efficiency Rate</h5>
                            <h2>92.4%</h2>
                            <small>+1.2% dari kemarin</small>
                        </div>
                    </div>

                </div>
            </div>

            {/* Grafik Donut */}
            <div className="row g-4 mb-4">

                <div className="col-12 col-md-6 col-lg-5">

                    <div className="card shadow-sm h-100">
                        <div className="card-body">

                            <DonatCacat />

                        </div>
                    </div>

                </div>

            </div>

            {/* Status Mesin */}
            <div className="row mb-3">
                <div className="col-12">
                    <h4>Status Mesin Aktif</h4>
                </div>
            </div>

            <div className="row g-4">

                <div className="col-12 col-sm-6 col-lg-3">
                    <KartuMesin
                        nama="CNC-01"
                        status="Running"
                        produksi={320}
                    />
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <KartuMesin
                        nama="CNC-02"
                        status="Running"
                        produksi={310}
                    />
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <KartuMesin
                        nama="Press-01"
                        status="Stop"
                        produksi={150}
                    />
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <KartuMesin
                        nama="Weld-04"
                        status="Maintenance"
                        produksi={0}
                    />
                </div>

            </div>

        </div>
    );
}

export default Dashboard;