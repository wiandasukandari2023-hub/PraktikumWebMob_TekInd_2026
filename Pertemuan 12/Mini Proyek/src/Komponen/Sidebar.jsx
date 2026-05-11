import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div
            className="bg-dark text-white p-3 h-100"
            style={{ minHeight: "100vh" }}
        >
            <h3 className="mb-4">🏭 Smart Factory</h3>

            <ul className="nav flex-column">

                <li className="nav-item mb-2">
                    <Link to="/" className="nav-link text-white">
                        Dashboard
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link to="/inventory" className="nav-link text-white">
                        Inventory
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link to="/laporan-kualitas" className="nav-link text-white">
                        Laporan
                    </Link>
                </li>

            </ul>
        </div>
    );
}

export default Sidebar;