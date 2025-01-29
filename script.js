document.addEventListener("DOMContentLoaded", function () {
    const kandidat = [
        { nama: "Ahmad", foto: "images/ahmad.jpg", suara: 0 },
        { nama: "Budi", foto: "images/budi.jpg", suara: 0 },
        { nama: "Citra", foto: "images/citra.jpg", suara: 0 }
    ];

    // Cek apakah ada data suara yang tersimpan di Local Storage
    if (localStorage.getItem("hasilSuara")) {
        kandidat.forEach((k, i) => {
            kandidat[i].suara = JSON.parse(localStorage.getItem("hasilSuara"))[i].suara;
        });
    }

    const kandidatList = document.getElementById("kandidat-list");
    const hasilSuaraList = document.getElementById("hasil-suara");

    function updateHasil() {
        hasilSuaraList.innerHTML = "";
        kandidat.forEach(k => {
            let li = document.createElement("li");
            li.textContent = `${k.nama}: ${k.suara} suara`;
            hasilSuaraList.appendChild(li);
        });

        // Simpan hasil suara ke Local Storage
        localStorage.setItem("hasilSuara", JSON.stringify(kandidat));
    }

    kandidat.forEach((k, index) => {
        let div = document.createElement("div");
        div.classList.add("kandidat");

        div.innerHTML = `
            <img src="${k.foto}" alt="${k.nama}">
            <h3>${k.nama}</h3>
            <button onclick="pilih(${index})">Pilih</button>
        `;

        kandidatList.appendChild(div);
    });

    window.pilih = function (index) {
        kandidat[index].suara++;
        updateHasil();
    };

    updateHasil();
});
