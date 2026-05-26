export default function RiwayatData({ reports, onDeleteReport, onDeleteAll }) {

    const handleDelete = (id) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus data laporan ini?")) {
            onDeleteReport(id);
        }
    };

    const handleDeleteAll = () => {
        if (window.confirm("PERINGATAN: Apakah Anda yakin ingin menghapus SEMUA data laporan?")) {
            onDeleteAll();
        }
    };

    return (
        <div className="card shadow-sm border-0 text-start">
            <div className="card-header bg-white border-0 pt-4 pb-0 d-flex justify-content-between align-items-center">
                <h5 className="mb-0 fw-bold text-dark">Riwayat Laporan</h5>
                {reports.length > 0 && (
                    <button className="btn btn-danger btn-sm fw-bold shadow-sm" onClick={handleDeleteAll}>
                        Hapus Semua
                    </button>
                )}
            </div>

            <div className="card-body p-0 pt-3">
                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0 text-nowrap">
                        <thead className="table-secondary text-uppercase small">
                            <tr>
                                <th>No</th>
                                <th>Tanggal</th>
                                <th>Shift</th>
                                <th>Mesin</th>
                                <th>Produksi</th>
                                <th>Reject</th>
                                <th>Netto</th>
                                <th>Yield</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.length === 0 ? (
                                <tr>
                                    <td colSpan="9" className="text-center py-4 text-muted">Belum ada data laporan.</td>
                                </tr>
                            ) : (
                                reports.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.tanggal}</td>
                                        <td>{item.shift}</td>
                                        <td>{item.mesin}</td>
                                        <td>{item.produksi}</td>
                                        <td>{item.reject}</td>
                                        <td>{item.netto}</td>
                                        <td><span className="badge bg-success">{item.yield}%</span></td>
                                        <td>
                                            <button className="btn btn-danger btn-sm fw-bold shadow-sm" onClick={() => handleDelete(item.id)}>
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>    
                    </table>
                </div>
            </div>
        </div>
    );
}