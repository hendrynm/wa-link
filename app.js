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
    document.getElementById("link").innerHTML = link;
}

function validasi() {
    let nomorWhatsApp = document.getElementById("nomor").value;
    if(nomorWhatsApp===""){
        document.getElementById("link").innerHTML = "Nomor WhatsApp tidak boleh kosong";
    } else if(!(nomorWhatsApp.includes("+628"))){
        document.getElementById("link").innerHTML = "Nomor WhatsApp yang kamu masukkan tidak diawali dengan \"+628\"";
    } else if(nomorWhatsApp.length<12){
        document.getElementById("link").innerHTML = "Nomor WhatsApp yang kamu masukkan kurang dari 10 digit.";
    } else if(nomorWhatsApp.length>15){
        document.getElementById("link").innerHTML = "Nomor WhatsApp yang kamu masukkan lebih dari 13 digit.";
    } else{
        buatLink();
    }
}

function hapus(){
    document.getElementById("nomor").value = "";
    document.getElementById("content").value = "";
}