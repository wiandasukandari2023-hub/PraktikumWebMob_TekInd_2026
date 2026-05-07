import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Inventory() {

    // State data produk
    const [products, setProducts] = useState([]);

    // State loading
    const [loading, setLoading] = useState(true);

    // Fetch data
    useEffect(() => {

        // Aktifkan loading
        setLoading(true);

        // Delay 2 detik supaya loading terlihat
        setTimeout(() => {

            fetch('https://jsonplaceholder.typicode.com/posts')

                .then((res) => res.json())

                .then((data) => {

                    // Ambil 5 data pertama
                    setProducts(data.slice(0, 5));

                    // Loading selesai
                    setLoading(false);
                })

                .catch((err) => {

                    console.log(err);

                    // Jika error loading dimatikan
                    setLoading(false);
                });

        }, 2000);

    }, []);

    return (
        <div className="container mt-4">

            <h1>Data Inventory Bahan Baku</h1>

            <Link to="/" className="btn btn-secondary mb-3">
                Kembali ke Dashboard
            </Link>

            {/* Conditional Rendering Loading */}
            {loading ? (

                <div className="alert alert-info">
                    <h4>Memuat data...</h4>
                </div>

            ) : (

                <table className="table table-striped table-bordered">

                    <thead className="table-dark">
                        <tr>
                            <th>ID Item</th>
                            <th>Nama Bahan</th>
                            <th>Status Supplier</th>
                        </tr>
                    </thead>

                    <tbody>

                        {products.map((item) => (

                            <tr key={item.id}>

                                <td>{item.id}</td>

                                <td>
                                    <Link to={`/inventory/${item.id}`}>
                                        {item.title}
                                    </Link>
                                </td>

                                <td>
                                    <span className="badge bg-success">
                                        Available
                                    </span>
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            )}

        </div>
    );
}

export default Inventory;