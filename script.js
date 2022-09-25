const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".text-mensaje");
const sinTexto = document.querySelector(".sinTexto");
const mensajeCon = document.querySelector(".mensajeCon");
const mensajeSin = document.querySelector(".mensajeSin");

const main = document.querySelector("main");

function btnEncriptar(){
	const textoEncriptado = encriptar(inputTexto.value);
	mensaje.value = textoEncriptado;
	mensajeSin.style.visibility = "hidden";
	inputTexto.value = "";
	mensajeCon.style.visibility = "visible";
	main.style.overflow = "visible";
}

function encriptar(stringEncriptar){
	let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	stringEncriptar = stringEncriptar.toLowerCase();

	for(let i = 0; i < matrizCodigo.length; i++){
		if(stringEncriptar.includes(matrizCodigo[i][0])){
			stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
		}
	}
	return stringEncriptar;
}


function btnDesencriptar(){
	const textoDesencriptado = desencriptar(inputTexto.value);
	mensaje.value = textoDesencriptado;
	mensajeSin.style.visibility = "hidden";
	inputTexto.value = "";
	mensajeCon.style.visibility = "visible";
	main.style.overflow = "visible";
}

function desencriptar(stringDesencriptar){
	let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	stringDesencriptar = stringDesencriptar.toLowerCase();

	for(let i = 0; i < matrizCodigo.length; i++){
		if(stringDesencriptar.includes(matrizCodigo[i][1])){
			stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
		}
	}

	return stringDesencriptar;
}

function copiar(){
	mensaje.select();
	navigator.clipboard.writeText(mensaje.value);
	mensaje.value = "";
}
