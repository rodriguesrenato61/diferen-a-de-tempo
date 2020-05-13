import Tempo from './modulos/tempo.js';

const inicio = document.querySelector('#inicio');

const fim = document.querySelector('#fim');

const btnCalcular = document.querySelector('#btn-calcular');

const resultado = document.querySelector('#resultado');

const objetoTempo = new Tempo();

inicio.value = "2020-03-02 00:00:00";
fim.value = "2020-03-03 00:00:00";

function calcular(){

	if(inicio.value != "" && fim.value != ""){
		
		let segundos;
		
		try{
			
			segundos = objetoTempo.datetime_sub_seconds(inicio.value, fim.value);
			
			resultado.innerHTML = "<p>Diferença: "+segundos+" segundos</p>";
			
		}catch(err){
		
			alert("Digite os valores corretamente! ");
			
			resultado.innerHTML = "<p>Diferença: </p>";
			
		}
		
	}else{
	
		alert("Digite os valores!");
		
	}
	
}

btnCalcular.addEventListener('click', function(){
	calcular();
});
