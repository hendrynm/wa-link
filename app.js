function buatLink() {
    let data = $("form").serializeArray();
    nomorWhatsApp = data[0]["value"];
    isiPesan = data[1]["value"];
    link = "https://api.whatsapp.com/send?phone="
    link += nomorWhatsApp;
    isiPesan = isiPesan.split(" ");
    isiPesan = isiPesan.join("%20");
    isiPesan = isiPesan.split("\n")
    isiPesan = isiPesan.join("%0A")
    link += ("&text=" + isiPesan);
    document.getElementById("link").innerHTML = link;
}