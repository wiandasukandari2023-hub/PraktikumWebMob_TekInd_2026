const btnLoad = document.getElementById('btnLoad');
const container = document.getElementById('containerLaporan');
const loading = document.getElementById('loading');

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

//  1. DATA SIMULASI 
const dataInsidenWianda = [
    { title: "Pompa Air Toren Rusak", body: "Pompa air toren utama berhenti berputar, tekanan air menurun drastis di seluruh lantai." },
    { title: "Kamera CCTV Pintu Depan Offline", body: "Kamera CCTV di pintu masuk utama tidak menampilkan gambar, kabel diduga longgar." },
    { title: "Door Lock Ruang Server Error", body: "Kunci pintu otomatis ruang server tidak merespon kartu akses, manual lock digunakan." },
    { title: "UPS Kantor Habis Baterai", body: "UPS ruang direksi mati mendadak saat listrik padam, data hilang tidak tersimpan." },
    { title: "Wireless AP Lantai 3 Mati", body: "Access Point WiFi lantai 3 tidak berfungsi, sinyal hilang di area meeting room." },
    { title: "Projector Ruang Training Rusak", body: "Proyektor ruang pelatihan menampilkan gambar buram dan tidak fokus setelah digunakan." },
    { title: "Telepon IP Reception Error", body: "Telepon IP di meja resepsionis tidak bisa menerima panggilan masuk, tombol dial tidak responsif." },
    { title: "Vending Machine Kantin Macet", body: "Mesin penjual otomatis kantin tidak mengeluarkan barang setelah pembayaran dilakukan." },
    { title: "Peralatan Fitness Gym Rusak", body: "Treadmill no.2 di gym karyawan berhenti tiba-tiba dan mengeluarkan bau gosong." },
    { title: "Audio System Aula Bermasalah", body: "Speaker utama aula tidak mengeluarkan suara saat pengujian soundcheck pagi ini." }
];

btnLoad.addEventListener('click', function () {
    loading.classList.remove('d-none');
    container.innerHTML = '';

    fetch(API_URL)
        .then(function (response) {
            if (!response.ok) throw new Error('Gagal mengambil data laporan insiden');
            return response.json();
        })
        .then(function (dataLaporan) {
            //  2. GANTI isi API 
            const sepuluhLaporanWianda = dataLaporan.slice(0, 10).map((item, index) => {
                return {
                    id: item.id,
                    title: dataInsidenWianda[index].title,
                    body: dataInsidenWianda[index].body,
                    userId: item.userId
                };
            });

            console.log(' 10 Laporan Wianda:', sepuluhLaporanWianda);
            renderData(sepuluhLaporanWianda);
        })
        .catch(function (error) {
            console.error('❌ Error:', error);
            container.innerHTML = `<div class="alert alert-danger w-100">Error: ${error.message}</div>`;
        })
        .finally(function () {
            loading.classList.add('d-none');
        });
});

function renderData(data) {
    data.forEach(function (laporan) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';

        col.innerHTML = `
            <div id="card-${laporan.id}" class="card h-100 shadow-sm border-0 bg-white transition-all">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold text-danger mb-2">${laporan.title}</h5>
                    <p class="card-text text-muted flex-grow-1 small">${laporan.body}</p>
                    <hr class="my-2">
                    <div class="d-flex gap-2">
                        <span class="badge bg-secondary"> #${laporan.id}</span>
                        <span class="badge bg-info"> User ${laporan.userId}</span>
                    </div>
                    <button id="btn-${laporan.id}" class="btn btn-warning mt-2 fw-bold w-100" onclick="tindakLanjut(${laporan.id}, '${laporan.title}')">
                         Tindak Lanjut
                    </button>
                </div>
            </div>
        `;

        container.appendChild(col);
    });
}

//  4. ALERT + EFEK VISUAL 
function tindakLanjut(id, judul) {
    // ALERT LENGKAP
    alert(`NOTIFIKASI SISTEM\n\n Tiket ID: #${id}\n Kendala: ${judul}\n\ Status: Sedang diproses oleh Tim Maintenance\n Mohon tunggu pembaruan status!`);

    // Update card & button
    const cardElement = document.getElementById(`card-${id}`);
    const btnElement = document.getElementById(`btn-${id}`);

    if (cardElement && btnElement) {
        // Card jadi kuning muda
        cardElement.classList.remove('bg-white');
        cardElement.classList.add('bg-warning', 'bg-opacity-10', 'border-warning');
        
        // Button jadi hijau
        btnElement.classList.remove('btn-warning');
        btnElement.classList.add('btn-success');
        btnElement.innerHTML = 'Sedang Diproses';
        btnElement.disabled = true;
    }
}

// Auto load
window.addEventListener('load', function() {
    console.log('Wianda - Sistem Laporan Insiden Siap!');
});