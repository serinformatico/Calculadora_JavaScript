

//CALCULADORA: EVENTO DE MOUSE POR TECLA
var imgTecla = "";
document.getElementById("on").addEventListener("click", function(){
	resetearPantalla();
	imgTecla = this;
	efectoImgTecla(); });
document.getElementById("sign").addEventListener("click", function(){
	mostrarNumero("-");
	imgTecla = this;
	efectoImgTecla(); })
document.getElementById("raiz").addEventListener("click", function(){
	imgTecla = this;
	efectoImgTecla(); });
document.getElementById("dividido").addEventListener("click", function(){
	imgTecla = this;
	efectoImgTecla();
	fnOperar("/"); });
document.getElementById("por").addEventListener("click", function(){
	imgTecla = this;
	efectoImgTecla();
	fnOperar("*"); });
document.getElementById("menos").addEventListener("click", function(){
	imgTecla = this;
	efectoImgTecla();
	fnOperar("-"); });
document.getElementById("mas").addEventListener("click", function(){
	imgTecla = this;
	efectoImgTecla(); 
	fnOperar("+"); });
document.getElementById("0").addEventListener("click", function(){
	mostrarNumero("0");
	imgTecla = this;
	efectoImgTecla(); });
document.getElementById("1").addEventListener("click", function(){
	mostrarNumero("1");
	imgTecla = this;
	efectoImgTecla(); });
document.getElementById("2").addEventListener("click", function(){
	mostrarNumero("2");
	imgTecla = this;
	efectoImgTecla(); });
document.getElementById("3").addEventListener("click", function(){
	mostrarNumero("3");
	imgTecla = this;
	efectoImgTecla(); });
document.getElementById("4").addEventListener("click", function(){
	mostrarNumero("4");
	imgTecla = this;
	efectoImgTecla(); });
document.getElementById("5").addEventListener("click", function(){
	mostrarNumero("5");
	imgTecla = this; 
	efectoImgTecla(); });
document.getElementById("6").addEventListener("click", function(){
	mostrarNumero("6");
	imgTecla = this;
	efectoImgTecla(); });
document.getElementById("7").addEventListener("click", function(){
	mostrarNumero("7");
	imgTecla = this;
	efectoImgTecla(); });
document.getElementById("8").addEventListener("click", function(){
	mostrarNumero("8");
	imgTecla = this;
	efectoImgTecla(); });
document.getElementById("9").addEventListener("click", function(){
	mostrarNumero("9");
	imgTecla = this;
	efectoImgTecla(); });
document.getElementById("punto").addEventListener("click", function(){
	mostrarNumero(".");
	imgTecla = this;
	efectoImgTecla(); });
document.getElementById("igual").addEventListener("click", function(){
	imgTecla = this;
	efectoImgTecla(); 
	fnResultado(); });
		
	
//CALCULADORA: EVENTO DE TECLADO POR TECLA
window.onload = function(){
	document.onkeypress = mostrarCaracterTecla;
	function mostrarCaracterTecla(evObject){
		var codigoTecla = evObject.keyCode;
		var caracterTecla = String.fromCharCode(evObject.which);
		if(caracterTecla=="/"){
			imgTecla = document.getElementById("dividido");
			efectoImgTecla();
			fnOperar("/"); }
		if(caracterTecla=="*"){
			imgTecla = document.getElementById("por");
			efectoImgTecla();
			fnOperar("*"); }
		if(caracterTecla=="-"){
			imgTecla = document.getElementById("menos");
			efectoImgTecla();
			fnOperar("-"); }
		if(caracterTecla=="+"){
			imgTecla = document.getElementById("mas");
			efectoImgTecla();
			fnOperar("+"); }
		if(caracterTecla=="0"){
			mostrarNumero(caracterTecla);
			imgTecla = document.getElementById("0");
			efectoImgTecla();}
		if(caracterTecla=="1"){
			mostrarNumero(caracterTecla);
			imgTecla = document.getElementById("1");
			efectoImgTecla();}
		if(caracterTecla=="2"){
			mostrarNumero(caracterTecla);
			imgTecla = document.getElementById("2");
			efectoImgTecla();}
		if(caracterTecla=="3"){
			mostrarNumero(caracterTecla);
			imgTecla = document.getElementById("3");
			efectoImgTecla();}
		if(caracterTecla=="4"){
			mostrarNumero(caracterTecla);
			imgTecla = document.getElementById("4");
			efectoImgTecla();}
		if(caracterTecla=="5"){
			mostrarNumero(caracterTecla);
			imgTecla = document.getElementById("5");
			efectoImgTecla();}
		if(caracterTecla=="6"){
			mostrarNumero(caracterTecla);
			imgTecla = document.getElementById("6");
			efectoImgTecla();}
		if(caracterTecla=="7"){
			mostrarNumero(caracterTecla);
			imgTecla = document.getElementById("7");
			efectoImgTecla();}
		if(caracterTecla=="8"){
			mostrarNumero(caracterTecla);
			imgTecla = document.getElementById("8");
			efectoImgTecla();}
		if(caracterTecla=="9"){
			mostrarNumero(caracterTecla);
			imgTecla = document.getElementById("9");
			efectoImgTecla();}
		if(caracterTecla=="."){
			mostrarNumero(caracterTecla);
			imgTecla = document.getElementById("punto");
			efectoImgTecla();}
		if(codigoTecla==13){
			imgTecla = document.getElementById("igual");
			efectoImgTecla();
			fnResultado(); }
	}
}


//CALCULADORA: EFECTO AL ORPIMIR UNA TECLA
function efectoImgTecla(){
	imgTecla.style.transform = "scale(0.95)";
		imgTecla.style.webkitTransform = "scale(0.95)";
		imgTecla.style.mozTransform = "scale(0.95)";
		imgTecla.style.oTransform = "scale(0.95)";
	timer = setTimeout("restaurarImgTecla()", 250);
}
function restaurarImgTecla(){
	imgTecla.style.transform = "scale(1)";
		imgTecla.style.webkitTransform = "scale(1)";
		imgTecla.style.mozTransform = "scale(1)";
		imgTecla.style.oTransform = "scale(1)";
}


//CALCULADORA: INSERTAR EL VALOR DE LA TECLA EN LA PANTALLA
function mostrarNumero(numero){
	var enPantalla = document.getElementById("display").innerText;
	if(enPantalla.length<=7){
		if(enPantalla=="0" && numero!="."){enPantalla="";}			//Borrar el Cero inicial al oprimir un numero
		if(enPantalla.indexOf("-")>=0 && numero=="-"){numero="";}	//Borrar cuando hay mas de un "-"
		if(enPantalla.indexOf(".")>=0 || enPantalla=="-"){
			if(numero=="."){numero="";}}							//Borrar cuando hay mas de un "."
		var concatenarPantalla = enPantalla+numero;
		mostrarPantalla = document.getElementById("display").innerHTML = concatenarPantalla;
	}
}
	  
	  
var	calculadora = {"valor":[], "operacion":""};
//CALCULADORA: CALCULAR OPERACIONES
function fnOperar(operador){
	var enPantalla = document.getElementById("display").innerText;
	calculadora.valor.push(enPantalla);
	calculadora.operacion = operador;
	document.getElementById("display").innerHTML = "0";
}

function fnResultado(){
	var enPantalla = document.getElementById("display").innerText;
	calculadora.valor.push(enPantalla);
		var valor1 = parseInt(calculadora.valor[0]);
		var valor2 = parseInt(calculadora.valor[1]);
		var operacion = calculadora.operacion;
		switch(operacion){
   			case "/":
				document.getElementById("display").innerHTML = valor1/valor2;
				break;
  			case "*":
				document.getElementById("display").innerHTML = valor1*valor2;
				break;			
			case "-":
				document.getElementById("display").innerHTML = valor1-valor2;
				break;
  			case "+":
				document.getElementById("display").innerHTML = valor1+valor2;
				break;
		}
		calculadora.valor.splice(calculadora.valor);	//Vaciar Array
}


//CALCULADORA: RESTAURAR LA PANTALLA
function resetearPantalla(){
	document.getElementById("display").innerHTML = "0";
	calculadora.valor.splice(calculadora.valor);	//Vaciar Array
}