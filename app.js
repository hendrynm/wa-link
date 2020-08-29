function buatLink() {
    let data = $("form").serializeArray();
    let nomorWhatsApp = data[0]["value"];
    let isiPesan = data[1]["value"];
    let link = "https://api.whatsapp.com/send?phone="
    link += nomorWhatsApp;
    isiPesan = isiPesan.split(" ");
    isiPesan = isiPesan.join("%20");
    isiPesan = isiPesan.split("\n")
    isiPesan = isiPesan.join("%0A")
    link += ("&text=" + isiPesan);
    document.getElementById("link").innerHTML = "<a class='card alert alert-success' href='" +
        link + "' target='_blank'>" + link + "</a>";
}

function validasi() {
    let nomorWhatsApp = document.getElementById("nomor").value;
    if (nomorWhatsApp === "") {
        document.getElementById("link").innerHTML = "<div class='card alert alert-danger'>" +
            "Nomor WhatsApp tidak boleh kosong</div>";
    } else if (!(nomorWhatsApp.includes("+628"))) {
        document.getElementById("link").innerHTML = "<div class='card alert alert-danger'>" +
            "Nomor WhatsApp yang kamu masukkan tidak diawali dengan +628</div>";
    } else if (nomorWhatsApp.length < 12) {
        document.getElementById("link").innerHTML = "<div class='card alert alert-danger'>" +
            "Nomor WhatsApp yang kamu masukkan kurang dari 10 digit.</div>";
    } else if (nomorWhatsApp.length > 15) {
        document.getElementById("link").innerHTML = "<div class='card alert alert-danger'>" +
            "Nomor WhatsApp yang kamu masukkan lebih dari 13 digit.</div>";
    } else {
        buatLink();
    }
}

function hapus() {
    document.getElementById("nomor").value = "";
    document.getElementById("content").value = "";
}

// Dark Mode
{
    let i = 0;
    const tema = document.getElementById("tema");
    tema.addEventListener("click", function () {
        document.body.classList.toggle("dark");
        $("#tema").toggleClass("btn-dark btn-light")
        if (i % 2 === 0) {
            document.getElementById("tema").innerHTML = "Light mode";
        } else {
            document.getElementById("tema").innerHTML = "Dark mode";
        }
        i++;
        $(".jumbotron").toggleClass("dark");
        $(".form-control").toggleClass("dark");
        $(".card").toggleClass("dark");
    })
}