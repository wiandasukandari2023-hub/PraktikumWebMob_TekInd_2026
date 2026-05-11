import React from 'react';
import { useParams, Link } from 'react-router-dom';

function DetailItem() {
    const { id } = useParams();

    return (
        <div className="container mt-4">
            <h1>Detail Item Inventory</h1>

            <div className="card p-4 shadow-sm">
                <h3>ID Item: {id}</h3>

                <p>
                    Ini adalah halaman detail item inventory dengan ID {id}.
                </p>

                <Link to="/inventory" className="btn btn-secondary">
                    Kembali ke Inventory
                </Link>
            </div>
        </div>
    );
}

export default DetailItem;