function temperatureCtoF(){
	var tempC =  document.getElementById("tempC");	
	var tempF= tempC.value *9/5 + 32	
	document.getElementById('tempF').value = tempF;
}

function kgToPounds(){
	var wkg = document.getElementById("wgtK");
	var wLb = wkg.value * 2.205;
	document.getElementById("wgtL").value = wLb; 
}

function kmToMi(){
	var dkm = document.getElementById("dstK");
	var dMi = dkm.value * 0.62137;
	document.getElementById("dstM").value = dMi;
}