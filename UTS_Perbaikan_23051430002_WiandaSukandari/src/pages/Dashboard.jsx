export default function Dashboard({ reports = [] }) {

    const totalProduksi = reports.reduce((sum, item) => sum + item.produksi, 0);
    const totalReject = reports.reduce((sum, item) => sum + item.reject, 0);
    const totalNetto = reports.reduce((sum, item) => sum + item.netto, 0);

    const yieldEfisiensi = totalProduksi > 0
        ? (((totalProduksi - totalReject) / totalProduksi) * 100).toFixed(2)
        : '0.00';

    const avgYield = reports.length > 0
    ? reports.reduce((s, d) => s + Number(d.yield), 0) / reports.length
    : 0;

    return (
        <div>
            <h2 className="mb-4 fw-bold text-dark">Dashboard Produksi</h2>
            <div className="row g-3">
                
                <div className="col-md-4">
                    <div className="card bg-primary text-white p-4 border-0 shadow-sm">
                        <p className="mb-1 small text-uppercase">Total Produksi</p>
                        <h2 className="mb-0 fw-bold">{totalProduksi}</h2>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="card bg-danger text-white p-4 border-0 shadow-sm">
                        <p className="mb-1 small text-uppercase">Total Reject</p>
                        <h2 className="mb-0 fw-bold">{totalReject}</h2>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="card bg-light text-dark p-4 border-0 shadow-sm">
                        <p className="mb-1 small text-uppercase">Yield (Efisiensi)</p>
                        <h2 className="mb-0 fw-bold" style={{ color: Number(yieldEfisiensi) < 85 ? "#B91C1C" : "#15803D"}}>
                            {yieldEfisiensi}%</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}