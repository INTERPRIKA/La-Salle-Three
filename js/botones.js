//clicks de panel de abajo
var elementos = document.getElementsByClassName("boton-foto");
for (var i = 0; i < elementos.length; i++) {

	elementos[i].addEventListener("click",function(){
		triggerClickValue(window.billboObjects[this.dataset.idx]);
		/*window.globalVars[this.dataset.idx].mesh.actionManager.processTrigger(1, new BABYLON.ActionEvent(window.globalVars[this.dataset.idx].mesh,0,0,window.globalVars[this.dataset.idx].mesh));
		console.log(mapAbajo);*/
		if (mapAbajo) { subirMapa(); }
	});
}

//clicks de mapa
var elementosMapa = document.getElementsByClassName("ubicacionIcono");
for (var i = 0; i < elementosMapa.length; i++) {
	elementosMapa[i].addEventListener("click",function(){
		//console.log(window.billboObjects[this.id]);
		triggerClickValue(window.billboObjects[this.id]);
		/*window.billboObjects[this.id].mesh.actionManager.processTrigger(1, new BABYLON.ActionEvent(window.globalVars[this.id].mesh,0,0,window.globalVars[this.id].mesh));*/
		subirMapa();
	});
}
