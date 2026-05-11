import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function GrafikProduksi() {

  // State data produksi
  const [produksi, setProduksi] = useState([]);

  // State loading
  const [loading, setLoading] = useState(true);

  // Fetch data API
  useEffect(() => {

    setLoading(true);

    fetch('https://jsonplaceholder.typicode.com/posts')

      .then((res) => res.json())

      .then((data) => {

        // Ambil 6 data pertama lalu ubah jadi angka produksi
        const hasilProduksi = data.slice(0, 6).map((item) => {
          return item.id * 20;
        });

        setProduksi(hasilProduksi);

        setLoading(false);
      })

      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

  }, []);

  // Label jam produksi
  const labels = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'];

  // Data chart
  const data = {
    labels,
    datasets: [
      {
        label: 'Jumlah Produksi (Unit)',
        data: produksi,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Target',
        data: [150, 150, 150, 150, 150, 150],
        type: 'line',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
      },
    ],
  };

  // Opsi chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Grafik Produksi Harian - Lini 1',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>

      {loading ? (

        <div className="alert alert-info">
          Memuat grafik produksi...
        </div>

      ) : (

        <Bar data={data} options={options} />

      )}

    </div>
  );
}

export default GrafikProduksi;