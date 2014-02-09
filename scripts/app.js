var nfcdom = window.navigator.mozNfc;
var nfc_status = document.getElementById("nfc_status");
 
document.getElementById('update_screen').onclick = function() {
    nfcdom = window.navigator.mozNfc;
    if(nfcdom){
	console.log("NFC AVAILABLE!!");
	nfc_status.innerHTML = "NFC AVAILABLE!!";
    }
    else{
	console.log("NO NFC");
	nfc_status.innerHTML = "NFC DISABLED!!";
    }
};
