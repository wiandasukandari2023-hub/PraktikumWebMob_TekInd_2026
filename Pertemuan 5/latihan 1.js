// Function menghitung luas dan keliling
function hitungLingkaran(jariJari) {

    let luas = Math.PI * jariJari * jariJari;
    let keliling = 2 * Math.PI * jariJari;

    return { luas, keliling };

}

// Mengambil input dan menampilkan hasil
function prosesHitung() {

    let r = document.getElementById("jariJari").value;

    let hasil = hitungLingkaran(r);

    document.getElementById("luas").innerText =
        "Luas : " + hasil.luas.toFixed(2);

    document.getElementById("keliling").innerText =
        "Keliling : " + hasil.keliling.toFixed(2);

}