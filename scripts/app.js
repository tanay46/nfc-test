var nfcdom = window.navigator.mozNfc;
var nfc_status = document.getElementById("nfc_status");
 
if(nfcdom){
    console.log("NFC AVAILABLE!!");
    nfc_status.innerHTML = "NFC AVAILABLE!!";
    nfcdom.onpeerready = function(event) {
	var nfcPeer = nfcdom.getNFCPeer(event.detail);
	// Below is only an example to illustrate that sendfile accepts 'blob'.
	var fakeBlob = new Blob([], {type: 'image/png'});
	var sendfilereq = nfcPeer.sendFile(fakeBlob);
	sendfilereq.onsuccess = function(e) {
	    console.log("Successfully sent file");
	};
	sendfilereq.onerror = function(e) {
	    console.log("Send file failed!");
	};
    };
    
}
else{
    console.log("NO NFC");
    nfc_status.innerHTML = "NFC DISABLED!!";
}
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
