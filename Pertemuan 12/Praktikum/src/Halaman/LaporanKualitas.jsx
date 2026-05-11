import React from 'react';
import { Link } from 'react-router-dom';

function LaporanKualitas() {

    // Mock data cacat
    const dataCacat = [
        {
            id: 1,
            nama: "Produk Retak",
            jumlah: 12
        },
        {
            id: 2,
            nama: "Warna Tidak Sesuai",
            jumlah: 7
        },
        {
            id: 3,
            nama: "Ukuran Tidak Presisi",
            jumlah: 5
        }
    ];

    return (
        <div className="container mt-4">

            <h1>Laporan Kualitas Produk</h1>

            <Link to="/" className="btn btn-secondary mb-3">
                Kembali ke Dashboard
            </Link>

            <table className="table table-bordered table-striped">

                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Jenis Cacat</th>
                        <th>Jumlah</th>
                    </tr>
                </thead>

                <tbody>

                    {dataCacat.map((item) => (

                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nama}</td>
                            <td>{item.jumlah}</td>
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default LaporanKualitas;