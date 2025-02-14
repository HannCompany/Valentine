// Fungsi untuk menampilkan teks kejutan
function showSurpriseText() {
    const surpriseText = document.getElementById('surprise-text');
    surpriseText.style.display = 'block'; // Menampilkan teks kejutan
}

// Menambahkan event listener ke tombol
document.getElementById('surprise-button').addEventListener('click', showSurpriseText);
