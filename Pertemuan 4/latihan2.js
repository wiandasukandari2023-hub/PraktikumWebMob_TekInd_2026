// Latihan 1 - Perhitungan Gaji

let gajiPokok = 5000000
let jamLembur = 10

// rumus lembur
let upahLemburPerJam = (gajiPokok / 173) * 1.5

// total lembur
let totalLembur = jamLembur * upahLemburPerJam

// total gaji
let totalGaji = gajiPokok + totalLembur

// menampilkan ke dashboard html
document.getElementById("gajiPokok").innerText = "Rp " + gajiPokok.toLocaleString()
document.getElementById("jamLembur").innerText = jamLembur + " Jam"
document.getElementById("totalLembur").innerText = "Rp " + Math.round(totalLembur).toLocaleString()
document.getElementById("totalGaji").innerText = "Rp " + Math.round(totalGaji).toLocaleString()

// tampilkan juga di console (sesuai soal)

console.log("=== PERHITUNGAN GAJI ===")
console.log("Gaji Pokok:", gajiPokok)
console.log("Jam Lembur:", jamLembur)
console.log("Upah Lembur per Jam:", upahLemburPerJam)
console.log("Total Gaji:", totalGaji)

let namaOperator = prompt("Masukkan Nama Operator:")
let kodeShift = prompt("Masukkan Kode Shift (1=Pagi, 2=Siang, 3=Malam):")

switch (kodeShift) {

    case "1":
        alert("Halo " + namaOperator + ", Anda bekerja di Shift Pagi")
        break

    case "2":
        alert("Halo " + namaOperator + ", Anda bekerja di Shift Siang")
        break

    case "3":
        alert("Halo " + namaOperator + ", Anda bekerja di Shift Malam")
        break

    default:
        alert("Shift Tidak Valid")
}