import Tempo from './modulos/tempo.js';

const inicio = document.querySelector('#inicio');

const fim = document.querySelector('#fim');

const hora1 = document.querySelector('#hora1');

const hora2 = document.querySelector('#hora2');

const medida = document.querySelector('#medida');

const btnCalcular = document.querySelector('#btn-calcular');

const resultado = document.querySelector('#resultado');

const objetoTempo = new Tempo();

inicio.value = "03/02/2020";
fim.value = "03/02/2020";
hora1.value = "00:00:00";
hora2.value = "00:05:00";



function calcular(){
	
	let opcao = medida.value;

	if(inicio.value != "" && fim.value != "" && hora1.value != "" && hora2.value != ""){
		
		if(medida.value != '0'){
		
			let diferenca;
			
			let dt1 = objetoTempo.convertDataDatetime(inicio.value, hora1.value);
			
			console.log("dt1: "+dt1);
			
			let dt2 = objetoTempo.convertDataDatetime(fim.value, hora2.value);
			
			console.log("dt2: "+dt2);
				
			diferenca = objetoTempo.datetime_diff(dt1, dt2, medida.value);
			
			if(diferenca[0] !== false){
				
				switch(medida.value){
				
					case 'd':
						resultado.innerHTML = "<p>Diferença: "+diferenca[1]+" horas</p>";
					break;
					
					case 'h':
						resultado.innerHTML = "<p>Diferença: "+diferenca[1]+" horas</p>";
					break;
					
					case 'm':
						resultado.innerHTML = "<p>Diferença: "+diferenca[1]+" minutos</p>";
					break;
					
					case 's':
						resultado.innerHTML = "<p>Diferença: "+diferenca[1]+" segundos</p>";
					break;
					
					
				}
			
				
				
			}else{
			
				alert("Coloque os valores corretamente!");
				
				resultado.innerHTML = "<p>Diferença: </p>";
				
			}
			
			
		}else{
		
			alert("Escolha a medida!");
			
		}
			
		
	}else{
	
		alert("Digite os valores!");
		
	}
	
}

btnCalcular.addEventListener('click', function(){
	calcular();
});
