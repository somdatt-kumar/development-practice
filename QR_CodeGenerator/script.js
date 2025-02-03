let qrimage =document.getElementById('qrimage');
let qrtext = document.getElementById('qrtext');
let boximage =document.getElementById('boximage');

function generateqr(){
    qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value ;

    boximage.classList.add("qrshow")
}



