// 1. Seleksi Elemen 
const formProduksi = document.getElementById('formProduksi');
const tabelBody = document.getElementById('tabelBody');
const btnHapusSemua = document.getElementById('btnHapusSemua');
const searchOperator = document.getElementById('searchOperator');
const btnSortJumlah = document.getElementById('btnSortJumlah');

const STORAGE_KEY = 'DATA_PRODUKSI_INDUSTRI';

// Load awal
document.addEventListener('DOMContentLoaded', function () {
    loadDataFromStorage();
});

// 2. Submit Form
formProduksi.addEventListener('submit', function (event) {
    event.preventDefault();

    const tanggal = document.getElementById('tanggal').value;
    const operator = document.getElementById('operator').value;
    const shift = document.getElementById('shift').value;
    const jumlah = document.getElementById('jumlah').value;

    if (jumlah <= 0) {
        alert("Jumlah produksi harus lebih dari 0!");
        return;
    }

    const dataBaru = {
        id: Date.now(),
        tanggal: tanggal,
        operator: operator,
        shift: shift,
        jumlah: parseInt(jumlah)
    };

    saveData(dataBaru);
    formProduksi.reset();
    loadDataFromStorage();
});

// 3. Simpan ke LocalStorage
function saveData(data) {
    let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    dataLama.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
}

// 4. Render Tabel
function renderTable(data) {
    tabelBody.innerHTML = '';

    data.forEach(function (item) {
        const row = document.createElement('tr');
        row.innerHTML = ` 
            <td>${item.tanggal}</td> 
            <td>${item.operator}</td> 
            <td>${item.shift}</td> 
            <td>${item.jumlah}</td> 
            <td> 
                <button class="btn btn-sm btn-danger" onclick="hapusData(${item.id})">
                    Hapus
                </button> 
            </td> 
        `;
        tabelBody.appendChild(row);
    });
}

// 5. Load + Filter
function loadDataFromStorage(keyword = '') {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    if (keyword) {
        data = data.filter(item =>
            item.operator.toLowerCase().includes(keyword.toLowerCase())
        );
    }

    renderTable(data);
}

// 6. Hapus satu data
window.hapusData = function (id) {
    if (confirm('Yakin ingin menghapus log ini?')) {
        let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        let dataBaru = data.filter(item => item.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));
        loadDataFromStorage();
    }
};

// 7. Hapus semua
btnHapusSemua.addEventListener('click', function () {
    if (confirm('PERINGATAN: Semua data akan dihapus permanen!')) {
        localStorage.removeItem(STORAGE_KEY);
        loadDataFromStorage();
    }
});

// 8. Search
searchOperator.addEventListener('input', function () {
    loadDataFromStorage(this.value);
});

// 9. Sort (Jumlah terbesar)
btnSortJumlah.addEventListener('click', function () {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    data.sort((a, b) => b.jumlah - a.jumlah);

    renderTable(data);
});