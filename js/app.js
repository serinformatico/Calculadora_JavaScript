

window.onload = function(){
	document.onkeypress = mostrarCaracterTecla;
	function mostrarCaracterTecla(evObject){
		var caracterTecla = String.fromCharCode(evObject.which);
		if(caracterTecla=="0"){mostrarNumero(caracterTecla);}
		if(caracterTecla=="1"){mostrarNumero(caracterTecla);}
		if(caracterTecla=="2"){mostrarNumero(caracterTecla);}
		if(caracterTecla=="3"){mostrarNumero(caracterTecla);}
		if(caracterTecla=="4"){mostrarNumero(caracterTecla);}
		if(caracterTecla=="5"){mostrarNumero(caracterTecla);}
		if(caracterTecla=="6"){mostrarNumero(caracterTecla);}
		if(caracterTecla=="7"){mostrarNumero(caracterTecla);}
		if(caracterTecla=="8"){mostrarNumero(caracterTecla);}
		if(caracterTecla=="9"){mostrarNumero(caracterTecla);}
		if(caracterTecla=="."){mostrarNumero(caracterTecla);}
	}
}

document.getElementById("0").addEventListener("click", function(){mostrarNumero("0");});
document.getElementById("1").addEventListener("click", function(){mostrarNumero("1");});
document.getElementById("2").addEventListener("click", function(){mostrarNumero("2");});
document.getElementById("3").addEventListener("click", function(){mostrarNumero("3");});
document.getElementById("4").addEventListener("click", function(){mostrarNumero("4");});
document.getElementById("5").addEventListener("click", function(){mostrarNumero("5");});
document.getElementById("6").addEventListener("click", function(){mostrarNumero("6");});
document.getElementById("7").addEventListener("click", function(){mostrarNumero("7");});
document.getElementById("8").addEventListener("click", function(){mostrarNumero("8");});
document.getElementById("9").addEventListener("click", function(){mostrarNumero("9");});
document.getElementById("punto").addEventListener("click", function(){mostrarNumero(".");});
document.getElementById("on").addEventListener("click", function(){resetearPantalla();});


function efectoTecla(numero){
	var tecla = numero.trim();
	if(tecla=="."){
		tecla = "punto";
	}
}

function mostrarNumero(numero){
	var enPantalla = document.getElementById("display").innerText;
	if(enPantalla.length<=7){
		if(enPantalla=="0" && numero!="."){enPantalla="";}
		var concatenarPantalla = enPantalla+numero;
		mostrarPantalla = document.getElementById("display").innerHTML = concatenarPantalla;
	}
	efectoTecla(numero);
}

function resetearPantalla(){
	document.getElementById("display").innerHTML = "0";
}



/*
document.addEventListener("click", 0");
id="on"


var calculadora{
	
	
	
	}
	
	numero: ["0","1","2","3","4","5","6","7","8","9"],
	encendido: "true";
	polaridad: "",
	raiz: "math.sqrt",
	division: "/",
	potencia: "*",
	restar: "-",
	sumar: "+",
	
	pantalla*/