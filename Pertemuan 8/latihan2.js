const btnLoad = document.getElementById('btnLoad');
const container = document.getElementById('containerKaryawan');
const loading = document.getElementById('loading');
const formKaryawan = document.getElementById('formKaryawan'); 

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// 1. LOAD DATA DENGAN FETCH
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

// 2. LATIHAN 2: RENDER DENGAN FILTER KOTA "s"
function renderData(data) {
    if (!data || data.length === 0) {
        container.innerHTML = '<div class="alert alert-warning">Data kosong!</div>';
        return;
    }
    
    // FILTER: HANYA KOTA MENGANDUNG HURUF "s"
    const dataTerefiter = data.filter(function(karyawan) {
        const kota = karyawan.address.city.toLowerCase();
        return kota.includes('s');
    });
    
    console.log(`Total data: ${data.length}`);
    console.log(`Filter "s": ${dataTerefiter.length} karyawan`);
    console.log('Kota:', dataTerefiter.map(k => k.address.city));
    
    if (dataTerefiter.length === 0) {
        container.innerHTML = `
            <div class="alert alert-info text-center">
                <h5>Tidak ada karyawan</h5>
                <p>di kota yang mengandung huruf "s"</p>
            </div>
        `;
        return;
    }
    
    // Tampilkan info filter
    container.insertAdjacentHTML('beforebegin', `
        <div class="alert alert-success">
             Filter aktif: ${dataTerefiter.length}/${data.length} 
            karyawan dari kota dengan huruf "s"
        </div>
    `);
    
    // Render data terfilter
    dataTerefiter.forEach(function (karyawan) {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 mb-3';

        col.innerHTML = `
            <div class="card h-100 shadow-sm border-success">
                <div class="card-body">
                    <h5 class="card-title">${karyawan.name}</h5>
                    <p class="card-text text-muted">${karyawan.email}</p>
                    <p class="card-text">${karyawan.company.name}</p>
                    <p class="card-text">
                        <span class="badge bg-success fs-6">${karyawan.address.city}</span>
                    </p>
                    <button class="btn btn-sm btn-outline-primary" onclick="cariKaryawan(${karyawan.id})">
                        Detail
                    </button>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// 3. CARI KARYAWAN
async function cariKaryawan(id) {
    try {
        console.log(`Mencari ID: ${id}`);
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error(`ID ${id} tidak ditemukan`);
        
        const data = await response.json();
        console.log('✅ Ditemukan:', data);
        alert(`${data.name}\n📧 ${data.email}\n🏢 ${data.company.name}`);
    } catch (error) {
        console.error('❌', error);
        alert(`❌ ${error.message}`);
    }
}

// 4. POST KARYAWAN BARU
formKaryawan.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const perusahaan = document.getElementById('perusahaan').value;
    
    const dataBaru = {
        name: nama,
        email: email,
        company: { name: perusahaan },
        address: { city: 'Jakarta' }
    };
    
    console.log('POST:', dataBaru);
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataBaru)
        });
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const result = await response.json();
        console.log('✅ POST SUCCESS!', result);
        alert(`Berhasil! ID: ${result.id}`);
        
        formKaryawan.reset();
        btnLoad.click();
    } catch (error) {
        console.error('❌ POST Error:', error);
        alert(`❌ ${error.message}`);
    }
});

// 5. INIT
window.addEventListener('load', function() {
    console.log('Latihan 2 siap - Filter kota "s" aktif!');
});