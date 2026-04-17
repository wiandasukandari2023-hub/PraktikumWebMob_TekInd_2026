// 🔥 KODE LENGKAP (Copy semua, termasuk yang lama + yang baru)
const btnLoad = document.getElementById('btnLoad');
const container = document.getElementById('containerKaryawan');
const loading = document.getElementById('loading');
const formKaryawan = document.getElementById('formKaryawan'); 

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Event Load Data 
btnLoad.addEventListener('click', function () {
    loading.classList.remove('d-none');
    container.innerHTML = '';
    
    fetch(API_URL)
        .then(function (response) {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: Gagal mengambil data`);
            }
            return response.json();
        })
        .then(function (dataKaryawan) {
            console.log('✅ Data Karyawan:', dataKaryawan); 
            renderData(dataKaryawan);
        })
        .catch(function (error) {
            console.error('❌ Error:', error);
            container.innerHTML = `
                <div class="alert alert-danger">
                    <strong>Error:</strong> ${error.message}
                </div>
            `;
        })
        .finally(function () {
            loading.classList.add('d-none');
        });
});

function renderData(data) {
    if (!data || data.length === 0) {
        container.innerHTML = '<div class="alert alert-warning">Data kosong!</div>';
        return;
    }
    
    data.forEach(function (karyawan) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';

        col.innerHTML = ` 
            <div class="card h-100 shadow-sm"> 
                <div class="card-body"> 
                    <h5 class="card-title">${karyawan.name}</h5> 
                    <p class="card-text text-muted">Email: ${karyawan.email}</p> 
                    <p class="card-text">Perusahaan: ${karyawan.company.name}</p> 
                    <p class="card-text"><small>Kota: ${karyawan.address.city}</small></p> 
                    <button class="btn btn-sm btn-outline-primary" onclick="cariKaryawan(${karyawan.id})">
                        Detail Profil
                    </button> 
                </div> 
            </div> 
        `;
        container.appendChild(col);
    });
}

async function cariKaryawan(id) {
    try {
        console.log(`Mencari data ID: ${id}...`);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        if (!response.ok) {
            throw new Error(`Data ID ${id} tidak ditemukan`);
        }
        
        const data = await response.json();
        console.log("✅ Ditemukan:", data);
        alert(`Ditemukan:\n\nNama: ${data.name}\nEmail: ${data.email}\nPerusahaan: ${data.company.name}`);
        
    } catch (error) {
        console.error('❌ Error:', error);
        alert(`❌ ${error.message}`);
    }
}

// POST KARYAWAN BARU
formKaryawan.addEventListener('submit', async function(e) {
    e.preventDefault(); // Cegah reload halaman
    
    // Ambil data dari form
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const perusahaan = document.getElementById('perusahaan').value;
    
    // Data dummy untuk POST (sesuai struktur JSONPlaceholder)
    const dataBaru = {
        name: nama,
        email: email,
        company: {
            name: perusahaan
        },
        address: {
            city: 'Jakarta' // Default
        }
    };
    
    console.log('Mengirim data:', dataBaru);
    
    try {
        // FETCH POST REQUEST
        const response = await fetch(API_URL, {
            method: 'POST', // METHOD POST
            headers: {
                'Content-Type': 'application/json', // HEADER JSON
            },
            body: JSON.stringify(dataBaru) // BODY DATA
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: Gagal menyimpan`);
        }
        
        const result = await response.json();
        console.log('✅ POST SUCCESS!', result);
        
        // Tampilkan notifikasi sukses
        alert(`Karyawan berhasil ditambahkan!\nID: ${result.id}\nNama: ${result.name}`);
        
        // Reset form
        formKaryawan.reset();
        
        // Auto reload data
        btnLoad.click();
        
    } catch (error) {
        console.error('❌ POST Error:', error);
        alert(`❌ Gagal menyimpan: ${error.message}`);
    }
});

window.addEventListener('load', function() {
    console.log('Halaman dimuat - Siap POST data!');
});