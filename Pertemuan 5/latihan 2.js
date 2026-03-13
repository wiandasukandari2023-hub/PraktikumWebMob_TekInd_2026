let daftarCacat = ["C-001", "C-005", "C-012", "C-001", "C-020"];

// tampilkan data array di halaman
document.getElementById("dataCacat").innerHTML = daftarCacat.join(", ");

function hitungCacat() {

    let jumlahC001 = 0;

    for (let i = 0; i < daftarCacat.length; i++) {

        if (daftarCacat[i] === "C-001") {
            jumlahC001++;
        }

    }

    document.getElementById("hasil").innerHTML =
        "Jumlah cacat C-001 muncul sebanyak <b>" + jumlahC001 + "</b> kali";

}