const form = document.getElementById('form5S');
const tabelBody = document.getElementById('tabelBody');

const STORAGE_KEY = 'DATA_AUDIT_5S';

// Load awal
document.addEventListener('DOMContentLoaded', loadData);

// Submit
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const auditor = document.getElementById('auditor').value;

    // ambil checkbox
    const checklist = [
        document.getElementById('seiri').checked,
        document.getElementById('seiton').checked,
        document.getElementById('seiso').checked,
        document.getElementById('seiketsu').checked,
        document.getElementById('shitsuke').checked
    ];

    // hitung skor
    const total = checklist.filter(item => item).length;
    const skor = (total / 5) * 100;

    const data = {
        id: Date.now(),
        tanggal: new Date().toLocaleDateString(),
        auditor: auditor,
        skor: skor
    };

    saveData(data);
    form.reset();
    loadData();
});

// Simpan
function saveData(data) {
    let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    dataLama.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
}

// Load & tampil
function loadData() {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    tabelBody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.tanggal}</td>
            <td>${item.auditor}</td>
            <td>${item.skor}%</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="hapusData(${item.id})">
                    Hapus
                </button>
            </td>
        `;
        tabelBody.appendChild(row);
    });
}

// Hapus
window.hapusData = function (id) {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    let dataBaru = data.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));
    loadData();
}