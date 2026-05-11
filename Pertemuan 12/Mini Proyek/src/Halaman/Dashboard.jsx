import React from 'react';

import GrafikProduksi from '../Komponen/GrafikProduksi';
import KartuMesin from '../Komponen/KartuMesin';
import DonatCacat from '../Komponen/DonatCacat';
import Sidebar from '../Komponen/Sidebar';

function Dashboard() {
    return (

        <div className="container-fluid">

            <div className="row">

                {/* Sidebar */}
                <div className="col-12 col-md-3 col-lg-2 p-0">
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="col-12 col-md-9 col-lg-10 p-4">

                    {/* Header */}
                    <div className="d-flex justify-content-between align-items-center mb-4">

                        <div>
                            <h2 className="fw-bold">
                                Dashboard Pintar 4.0
                            </h2>

                            <p className="text-muted mb-0">
                                Monitoring Produksi Industri
                            </p>
                        </div>

                        {/* User */}
                        <div className="text-end">
                            <h6 className="mb-0">Wianda Sukandari</h6>
                            <small className="text-muted">
                                Teknik Industri
                            </small>
                        </div>

                    </div>

                    {/* Grafik + KPI */}
                    <div className="row g-4 mb-4">

                        {/* Grafik */}
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

                                    <h5>Total Output</h5>
                                    <h2>1,030 Unit</h2>

                                </div>
                            </div>

                            <div className="card bg-success text-white shadow-sm">
                                <div className="card-body">

                                    <h5>Efficiency</h5>
                                    <h2>92.4%</h2>

                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Donut + Tabel */}
                    <div className="row g-4 mb-4">

                        {/* Donut */}
                        <div className="col-12 col-lg-5">

                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <DonatCacat />
                                </div>
                            </div>

                        </div>

                        {/* Tabel */}
                        <div className="col-12 col-lg-7">

                            <div className="card shadow-sm h-100">

                                <div className="card-body">

                                    <h5 className="mb-3">
                                        Data Produksi Hari Ini
                                    </h5>

                                    <table className="table table-striped">

                                        <thead className="table-dark">
                                            <tr>
                                                <th>Jam</th>
                                                <th>Output</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>08:00</td>
                                                <td>120</td>
                                                <td>
                                                    <span className="badge bg-success">
                                                        Normal
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>10:00</td>
                                                <td>180</td>
                                                <td>
                                                    <span className="badge bg-primary">
                                                        Tinggi
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>13:00</td>
                                                <td>210</td>
                                                <td>
                                                    <span className="badge bg-warning text-dark">
                                                        Overload
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Mesin */}
                    <div className="row mb-3">
                        <div className="col-12">
                            <h4>Status Mesin</h4>
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

            </div>

        </div>
    );
}

export default Dashboard;