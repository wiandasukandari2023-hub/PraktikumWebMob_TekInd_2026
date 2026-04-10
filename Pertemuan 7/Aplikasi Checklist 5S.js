const form = document.getElementById('form5S');
const tabelBody = document.getElementById('tabelBody');
const operatorSelect = document.getElementById('operator');
const searchRiwayat = document.getElementById('searchRiwayat');
const operatorError = document.getElementById('operatorError');
const submitBtn = document.getElementById('submitBtn');
const clearSearch = document.getElementById('clearSearch');

const STORAGE_KEY = 'DATA_AUDIT_5S';

// 25 Karyawan dengan ID unik
const OPERATORS = [
    { id: 'EMP001', nama: 'Ahmad Santoso' },
    { id: 'EMP002', nama: 'Budi Hartono' },
    { id: 'EMP003', nama: 'Citra Dewi Lestari' },
    { id: 'EMP004', nama: 'Dedi Supriyanto' },
    { id: 'EMP005', nama: 'Eka Putri Andini' },
    { id: 'EMP006', nama: 'Fajar Nugroho' },
    { id: 'EMP007', nama: 'Gina Maharani' },
    { id: 'EMP008', nama: 'Hendra Wijaya' },
    { id: 'EMP009', nama: 'Indah Sari' },
    { id: 'EMP010', nama: 'Joko Widodo' },
    { id: 'EMP011', nama: 'Kartika Ayu Permata' },
    { id: 'EMP012', nama: 'Larasati Dewi' },
    { id: 'EMP013', nama: 'Muhammad Ali' },
    { id: 'EMP014', nama: 'Nita Permata Sari' },
    { id: 'EMP015', nama: 'Oscar Pratama' },
    { id: 'EMP016', nama: 'Putri Ayu' },
    { id: 'EMP017', nama: 'Qori Gustama' },
    { id: 'EMP018', nama: 'Rina Kartika' },
    { id: 'EMP019', nama: 'Surya Pratama' },
    { id: 'EMP020', nama: 'Tina Maharani' },
    { id: 'EMP021', nama: 'Umar Faruq' },
    { id: 'EMP022', nama: 'Vina Safitri' },
    { id: 'EMP023', nama: 'Wahyu Setiawan' },
    { id: 'EMP024', nama: 'Xena Putri' },
    { id: 'EMP025', nama: 'Yudi Kurniawan' }
];

// Inisialisasi dropdown operator
function initOperatorDropdown() {
    operatorSelect.innerHTML = '<option value="">-- Pilih Operator --</option>';
    OPERATORS.forEach(emp => {
        const option = document.createElement('option');
        option.value = emp.id;
        option.textContent = `${emp.nama} (${emp.id})`;
        option.dataset.nama = emp.nama;
        operatorSelect.appendChild(option);
    });
}

// Validasi operator sudah kerja di shift yang sama pada tanggal yang sama
function isOperatorAvailable(operatorId, shift, tanggal) {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return !data.some(item => 
        item.operatorId === operatorId && 
        item.shift === shift && 
        item.tanggal === tanggal
    );
}

// Submit form
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const operatorId = document.getElementById('operator').value;
    const operatorNama = OPERATORS.find(emp => emp.id === operatorId)?.nama || '';
    const shift = document.getElementById('shift').value;
    const tanggalInspeksi = document.getElementById('tanggalInspeksi').value;

    // Konversi tanggal ke format lokal
    const tanggalFormat = new Date(tanggalInspeksi).toLocaleDateString();

    // Validasi
    if (!isOperatorAvailable(operatorId, shift, tanggalFormat)) {
        operatorError.textContent = `Operator ${operatorNama} sudah melakukan audit di shift ${shift} pada tanggal ${tanggalFormat}!`;
        operatorError.style.display = 'block';
        return;
    }

    // Checkbox 5S
    const checklist = {
        seiri: document.getElementById('seiri').checked,
        seiton: document.getElementById('seiton').checked,
        seiso: document.getElementById('seiso').checked,
        seiketsu: document.getElementById('seiketsu').checked,
        shitsuke: document.getElementById('shitsuke').checked
    };

    // Hitung skor
    const totalChecked = Object.values(checklist).filter(v => v).length;
    const skor = (totalChecked / 5) * 100;

    const data = {
        id: Date.now(),
        tanggal: tanggalFormat,
        operatorId: operatorId,
        operator: operatorNama,
        shift: shift,
        skor: skor,
        detail5S: checklist
    };

    saveData(data);
    form.reset();
    operatorError.style.display = 'none';
    loadData();
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Saved!';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.innerHTML = 'Simpan Audit';
        submitBtn.disabled = false;
    }, 2000);
});

// Simpan data
function saveData(data) {
    let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    dataLama.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
}

// Load dan tampilkan tabel
function loadData(filter = '') {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    
    // Filter berdasarkan nama operator
    if (filter) {
        data = data.filter(item => 
            item.operator.toLowerCase().includes(filter.toLowerCase())
        );
    }

    tabelBody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');
        
        // Detail 5S sebagai badge
        const detail5S = Object.entries(item.detail5S)
            .map(([key, value]) => value ? key.charAt(0).toUpperCase() : '')
            .filter(v => v)
            .join(', ');

        row.innerHTML = `
            <td>${item.tanggal}</td>
            <td>${item.shift}</td>
            <td>${item.operator}</td>
            <td><span class="badge ${getSkorBadgeClass(item.skor)} fs-6">${item.skor}%</span></td>
            <td>
                <span class="badge bg-secondary">${detail5S || 'None'}</span>
            </td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="hapusData(${item.id})">
                    <i class="bi bi-trash"></i> Hapus
                </button>
            </td>
        `;
        tabelBody.appendChild(row);
    });
}

// Badge class berdasarkan skor
function getSkorBadgeClass(skor) {
    if (skor === 100) return 'bg-success';
    if (skor >= 80) return 'bg-info';
    if (skor >= 60) return 'bg-warning';
    return 'bg-danger';
}

// Hapus data
window.hapusData = function (id) {
    if (confirm('Hapus data ini?')) {
        let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        let dataBaru = data.filter(item => item.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));
        loadData(searchRiwayat.value);
    }
}

// Search riwayat
searchRiwayat.addEventListener('input', function() {
    loadData(this.value);
});

clearSearch.addEventListener('click', function() {
    searchRiwayat.value = '';
    loadData();
});

// Set tanggal default ke hari ini
document.getElementById('tanggalInspeksi').valueAsDate = new Date();

// Load awal
document.addEventListener('DOMContentLoaded', function() {
    initOperatorDropdown();
    loadData();
});