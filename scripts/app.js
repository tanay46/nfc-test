var nfcdom = window.navigator.mozNfc;
var nfc_status = document.getElementById("nfc_status");
NFCToggle(true);
 
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

function NFCToggle(enabled) {
	ok(settings instanceof SettingsManager, 'settings instanceof ' + settings.constructor + ', expected SettingsManager');
	let req = settings.createLock().get('nfc.enabled');
	if req.onsuccess = function() {
		if (req.result['nfc.enabled'] === enabled) {
			callback();
		} else {
	    	let req = settings.createLock().set({'nfc.enabled': enabled});
	    	req.onsuccess = function() {
		    	window.setTimeout(callback, 5000); // give emulator time to toggle NFC
			};
			req.onerror = function() {
		        ok(false,
		           'Setting \'nfc.enabled\' to \'' + enabled +
		           '\' failed, error ' + req.error.name);
		        finish();
		      };
		 }
	};
	req.onerror = function() {
	    ok(false, 'Getting \'nfc.enabled\' failed, error ' + req.error.name);
	    finish();
	  };
	}

function getDeviceStorage() {
	var appstorage = window.navigator.getDeviceStorage("apps");
}
