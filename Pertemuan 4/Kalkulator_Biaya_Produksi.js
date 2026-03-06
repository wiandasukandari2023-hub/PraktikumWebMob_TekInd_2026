function hitungBiaya() {

    let biayaBahanBaku = parseInt(document.getElementById("bahanBaku").value)
    let biayaTenagaKerja = parseInt(document.getElementById("tenagaKerja").value)
    let biayaOverhead = parseInt(document.getElementById("overhead").value)
    let jumlahProduksi = parseInt(document.getElementById("jumlahProduksi").value)

    let totalPerUnit = (biayaBahanBaku + biayaTenagaKerja + biayaOverhead) / jumlahProduksi

    console.log("=== KALKULATOR BIAYA PRODUKSI ===")
    console.log("Biaya Bahan Baku:", biayaBahanBaku)
    console.log("Biaya Tenaga Kerja:", biayaTenagaKerja)
    console.log("Biaya Overhead:", biayaOverhead)
    console.log("Jumlah Produksi:", jumlahProduksi)
    console.log("Total Biaya per Unit:", totalPerUnit)

    document.getElementById("hasilBiaya").innerText =
        "Total Biaya per Unit: Rp " + Math.round(totalPerUnit).toLocaleString()

    if (jumlahProduksi < 100) {
        document.getElementById("kategoriBiaya").innerText =
            "Kategori: Biaya Tinggi (Ekonomi Skala Kecil)"

        console.log("Kategori: Biaya Tinggi")
    }
    else {
        document.getElementById("kategoriBiaya").innerText =
            "Kategori: Biaya Efisien"

        console.log("Kategori: Biaya Efisien")
    }

}