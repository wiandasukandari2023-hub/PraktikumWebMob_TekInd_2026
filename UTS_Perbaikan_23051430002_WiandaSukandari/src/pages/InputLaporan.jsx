import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InputLaporan({ onAddReport }) {
    const navigate = useNavigate();

    const [tanggal, setTanggal] = useState('');
    const [shift, setShift] = useState('Pagi');
    const [mesin, setMesin] = useState('');
    const [produksi, setProduksi] = useState('');
    const [reject, setReject] = useState('');

    const prodNum = Number(produksi) || 0;
    const rejNum = Number(reject) || 0;

    const netto = prodNum - rejNum;
    const yieldEfisiensi = prodNum > 0 ? ((netto / prodNum) * 100).toFixed(2) : '0.00';

    const isRejectInvalid = rejNum > prodNum;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!tanggal || !mesin || !produksi || !reject) {
            alert("GAGAL MENYIMPAN: Pastikan Tanggal, Nama Mesin, Jumlah Produksi, dan Reject sudah diisi semua! (Jika tidak ada reject, ketik angka 0)");
            return; 
        }

        if (isRejectInvalid) {
            alert("GAGAL MENYIMPAN: Jumlah Reject tidak boleh lebih besar dari Produksi!");
            return;
        }

        const newReport = {
            id: Date.now(),
            tanggal,
            shift,
            mesin,
            produksi: prodNum,
            reject: rejNum,
            netto,
            yield: yieldEfisiensi
        };

        onAddReport(newReport);

        setTanggal('');
        setShift('Pagi');
        setMesin('');
        setProduksi('');
        setReject('');

        navigate('/riwayat');
    };

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm border-0 text-start">
                        <div className="card-body p-4 p-md-5">
                            <h4 className="fw-bold mb-4 text-dark border-bottom pb-3">Form Input Laporan</h4>
                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold text-secondary">Tanggal</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={tanggal}
                                        onChange={(e) => setTanggal(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold text-secondary">Shift Kerja</label>
                                    <select
                                        className="form-select"
                                        value={shift}
                                        onChange={(e) => setShift(e.target.value)}
                                    >
                                        <option value="Pagi">Pagi</option>
                                        <option value="Siang">Siang</option>
                                        <option value="Malam">Malam</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold text-secondary">Nama Mesin</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Masukkan tipe/nama mesin"
                                        value={mesin}
                                        onChange={(e) => setMesin(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold text-secondary">Jumlah Produksi</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Contoh: 200"
                                        value={produksi}
                                        onChange={(e) => setProduksi(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-semibold text-secondary">Jumlah Reject</label>
                                    <input
                                        type="number"
                                        className={`form-control ${isRejectInvalid ? 'is-invalid' : ''}`}
                                        placeholder="Contoh: 15"
                                        value={reject}
                                        onChange={(e) => setReject(e.target.value)}
                                    />
                                    {isRejectInvalid && <div className="invalid-feedback">Jumlah reject tidak boleh melebihi jumlah produksi!</div>}
                                </div>

                                <div className="p-3 bg-light rounded mb-4">
                                    <div className="d-flex justify-content-between small mb-1">
                                        <span className="text-muted">Netto (Real-time):</span>
                                        <span className="fw-bold">{netto} pcs</span>
                                    </div>
                                    <div className="d-flex justify-content-between small">
                                        <span className="text-muted">Yield / Efisiensi:</span>
                                        <span className="fw-bold text-success">{yieldEfisiensi}%</span>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary w-100 py-2 fw-bold shadow-sm">
                                    Simpan Laporan
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}