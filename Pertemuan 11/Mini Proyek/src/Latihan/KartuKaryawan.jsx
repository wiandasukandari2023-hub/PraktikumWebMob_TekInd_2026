import React from 'react';

function KartuKaryawan({ nama, jabatan, bagian }) {
    return (
        <div className="card shadow-sm p-3 mb-3">
            <div className="card-body">
                <h5 className="card-title">{nama}</h5>
                <p className="mb-1"><strong>Jabatan:</strong> {jabatan}</p>
                <p className="mb-0"><strong>Bagian:</strong> {bagian}</p>
            </div>
        </div>
    );
}

export default KartuKaryawan;