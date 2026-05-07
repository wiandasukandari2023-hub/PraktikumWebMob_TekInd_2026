import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="p-5">
            <h1>Dashboard Utama Pabrik</h1>

            <p>
                Selamat datang di sistem monitoring terpadu.
            </p>

            <Link to="/inventory" className="btn btn-primary">
                Ke Halaman Inventory
            </Link>
        </div>
    );
}

export default Dashboard;