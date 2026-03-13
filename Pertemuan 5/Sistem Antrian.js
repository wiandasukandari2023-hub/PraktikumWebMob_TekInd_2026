// Array of Objects (antrian mesin)

let antrianMesin = [
    { idJob: "J01", namaProses: "Drilling", durasi: 30 },
    { idJob: "J02", namaProses: "Milling", durasi: 25 },
    { idJob: "J03", namaProses: "Cutting", durasi: 20 }
];

// Function proses antrian

function prosesAntrian(antrian) {

    let hasil = "";

    for (let i = 0; i < antrian.length; i++) {

        hasil += "Memproses Job " +
            antrian[i].idJob + " - " +
            antrian[i].namaProses +
            " selama " +
            antrian[i].durasi +
            " menit <br>";

    }

    return hasil;

}

// Function untuk menjalankan simulasi

function jalankanSimulasi() {

    let output = document.getElementById("output");

    // proses awal
    let hasil1 = prosesAntrian(antrianMesin);

    // tambah job baru
    antrianMesin.push({
        idJob: "J04",
        namaProses: "Grinding",
        durasi: 15
    });

    // proses lagi
    let hasil2 = prosesAntrian(antrianMesin);

    output.innerHTML =
        "<b>Proses Antrian Awal:</b><br>" +
        hasil1 +
        "<br><b>Setelah ditambah Job baru:</b><br>" +
        hasil2;

}