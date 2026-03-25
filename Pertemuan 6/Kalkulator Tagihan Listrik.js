const dayaInput = document.getElementById("daya");
const jamInput = document.getElementById("jam");
const hasil = document.getElementById("hasil");

function hitungListrik() {
    let daya = parseFloat(dayaInput.value);
    let jam = parseFloat(jamInput.value);

    if (!daya || !jam) {
        hasil.innerText = "";
        return;
    }

    // Hitung kWh
    let kWh = (daya * jam) / 1000;

    // Tarif listrik
    let biaya = kWh * 1500;

    hasil.innerText =
        "Total kWh: " + kWh.toFixed(2) + " kWh\n" +
        "Estimasi Biaya: Rp " + biaya.toLocaleString();
}

// Event real-time (tanpa tombol)
dayaInput.addEventListener("input", hitungListrik);
jamInput.addEventListener("input", hitungListrik);