import React from 'react';

import { Doughnut } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    ChartDataLabels
);

function DonatCacat() {

    const data = {
        labels: ['Scratch', 'Dent', 'Lainnya'],

        datasets: [
            {
                label: 'Proporsi Cacat',

                data: [50, 30, 20],

                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                ],

                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,

        plugins: {

            legend: {
                position: 'bottom',
            },

            title: {
                display: true,
                text: 'Proporsi Cacat Produksi',
            },

            // Persentase di chart
            datalabels: {
                color: '#fff',
                font: {
                    weight: 'bold',
                    size: 16,
                },

                formatter: (value) => {
                    return value + '%';
                },
            },
        },
    };

    return <Doughnut data={data} options={options} />;
}

export default DonatCacat;