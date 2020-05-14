

	export default function Tempo(){
		
		//array para armazenar a quandidate de dias de cada mês
		let mes = new Array();
		mes[0] = 31;
		mes[2] = 31;
		mes[3] = 30;
		mes[4] = 31;
		mes[5] = 30;
		mes[6] = 31;
		mes[7] = 31;
		mes[8] = 30;
		mes[9] = 31;
		mes[10] = 30;
		mes[11] = 31;
		
		//função que retorna a quantidade de dias de determinado mês
		this.getDiasMes = function(indice, ano){
			
			let dias;
			
			if(ano >= 0){
			
				if(indice >= 0 && indice <= 12){
				
					//se o ano for bissexto fevereiro terá 29 dias senão terá 28
					if(indice == 1){
						if((ano % 4) == 0){
							dias = 29;
						}else{
							dias = 28;
						}
					}else{
						dias = mes[indice];
					}
					
				}else{
				
					dias = false;
					
				}
				
			}else{
			
				dias = false;
				
			}
			
			return dias;
		}
		
		//função para verificar se uma determinada hora é válida ou não
		this.validaHora = function(horario){
			
			let retorno;
			
			let hr = horario.split(':');
			let hora = parseInt(hr[0]);
			let minuto = parseInt(hr[1]);
			let segundo = parseInt(hr[2]);
			
			if(hora >= 0 && hora <= 23){
				if(minuto >= 0 && minuto <= 59){
					if(segundo >= 0 && segundo <= 59){
						retorno = true;
					}else{
						console.log('Segundo inválido!');
						retorno = false;
					}
				}else{
					
					console.log('Minuto inválido!');
					retorno = false;
					
				}
			}else{
				console.log('Hora inválida!');
				retorno = false;
			}
			
			return retorno;
		}
		
		//função para verificar se uma determinada data é válida ou não
		this.validaData = function(dt){
			
			let retorno;
		
			let dt_dados = dt.split('-');
			let day = parseInt(dt_dados[2]);
			let mounth = parseInt(dt_dados[1]);
			let year = parseInt(dt_dados[0]);
			
			if(year >= 0){
				
				if(mounth >= 1 && mounth <= 12){
					
					let dias_mes = this.getDiasMes(mounth - 1, year);
					
					if(day >= 1 && day <= dias_mes){
					
						retorno = true;
						
					}else{
						
						console.log('Dia inválido!');
						retorno = false;
						
					}
					
				}else{
					
					console.log('Mês inválido!');
					retorno = false;
					
				} 
				
			}else{
				console.log('Ano inválido!');
				retorno = false;
			}
			
			return retorno;
			
		}
	
		//função para converter uma determinada hora em sua quantidade de segundos
		this.convertHorasSegundos = function(horario){
			
			let retorno;
			
			if(this.validaHora(horario)){
			
				let tempo = horario.split(':');
		
				let hora = parseInt(tempo[0]);
				
				let minuto = parseInt(tempo[1]);
			
				let segundo = parseInt(tempo[2]);
			
				retorno = (hora * 3600) + (minuto * 60) + segundo;
				
			}else{
				
				retorno = false;
				
			}
		 
			return retorno;
		}
		
		//converte quantidade de segundos em horas
		this.convertSegundosHoras = function(segundos){
			
			segundos = parseInt(segundos);
			
			let retorno;
			
			if(segundos < 0){
			
				retorno = "-";
				segundos = segundos * (-1);
				
			}else{
			
				retorno = "";
				
			}
			
			if(segundos >= 0){
			
				let hora = Math.floor(segundos / 3600);
				let restante1 = segundos - (hora * 3600);
				let minuto = Math.floor(restante1 / 60);
				let segundo = segundos - ((hora * 3600) + (minuto * 60));
				
				
				if(hora < 10){
					retorno += "0"+hora;
				}else{
					retorno += hora;
				}
				
				if(minuto < 10){
					retorno += ":0"+minuto;
				}else{
					retorno += ":"+minuto;
				}
				
				if(segundo < 10){
					retorno += ":0"+segundo;
				}else{
					retorno += ":"+segundo;
				}
				
			}else{
				
				retorno = false;
				
			}
			
			return retorno;
			l			
		}
		
		//converte quantidade de segundos em minutos
		this.convertSegundosMinutos = function(segundos){
			
			segundos = parseInt(segundos);
			
			let retorno;
			
			if(segundos < 0){
			
				retorno = "-";
				segundos = segundos * (-1);
				
			}else{
			
				retorno = "";
				
			}
			
			if(segundos >= 0){
			
				let minuto = Math.floor(segundos / 60);
				let segundo = segundos - (minuto * 60);
				
				
				if(minuto < 10){
					retorno += "0"+minuto;
				}else{
					retorno += minuto;
				}
				
				if(segundo < 10){
					retorno += ":0"+segundo;
				}else{
					retorno += ":"+segundo;
				}
				
			}else{
				
				retorno = false;
				
			}
			
			return retorno;
			l			
		}
		
		//converte quantidade de segundos em dias
		this.convertSegundosDias = function(segundos){
			
			segundos = parseInt(segundos);
			
			
			let retorno;
			
			if(segundos < 0){
			
				retorno = "-";
				segundos = segundos * (-1);
				
			}else{
			
				retorno = "";
				
			}
			
			if(segundos >= 0){
			
				let dias = Math.floor(segundos / 86400);
				let restante = segundos - (dias * 86400);
				let horas = this.convertSegundosHoras(restante);
				retorno += dias+" dias "+horas;
				
			}else{
				
				retorno = false;
				
			}
			
			return retorno;
			l			
		}
		
		//função para calcular a quantidade de dias entre uma data e outra
		this.data_diff = function(dt1, dt2){
			
			let retorno;
			
			if(this.validaData(dt1) && this.validaData(dt2)){
	
				let dt_criacao = dt1.split('-');
				let dt_expiracao = dt2.split('-');
				let ano1 = parseInt(dt_criacao[0]);
				let ano2 = parseInt(dt_expiracao[0]);
				let mes1 = parseInt(dt_criacao[1]);
				let mes2 = parseInt(dt_expiracao[1]);
				let dia1 = parseInt(dt_criacao[2]);
				let dia2 = parseInt(dt_expiracao[2]);
				
				let mes_atual = mes1 - 1; 
				let mes_final = mes2 - 1;
				let dias_acumulados = 0;
				let flag = true;
				
				if(ano1 > ano2){
				
					tmp_ano;
					tmp_ano = ano1;
					ano1 = ano2;
					ano2 = tmp_ano;
					flag = false;
				}
				
				let cont_ano, cont_mes;
				
				for(cont_ano = ano1; cont_ano <= ano2; cont_ano++){
					
					if(cont_ano == ano1){
						
						if(ano1 < ano2){
						
							for(cont_mes = mes_atual; cont_mes < 12; cont_mes++){
								
								dias_acumulados += this.getDiasMes(cont_mes, cont_ano);
								
							}
						}else{
							
							for(cont_mes = mes_atual; cont_mes < mes_final; cont_mes++){
								
								dias_acumulados += this.getDiasMes(cont_mes, cont_ano);
								
							}
							
						}
						
					}else{
						
						if(cont_ano < ano2){
						
							for(cont_mes = 0; cont_mes < 12; cont_mes++){
								
								dias_acumulados += this.getDiasMes(cont_mes, cont_ano);
							}
						
						}else{
							
							
							for(cont_mes = 0; cont_mes < mes_final; cont_mes++){
								
								dias_acumulados += this.getDiasMes(cont_mes, cont_ano);
							}
							
						}
						
					}
				}
				
				retorno = dias_acumulados - dia1 + dia2;
				
				if(!flag){
				
					retorno = retorno * (-1);
					
				}
				
			}else{
				
				retorno = false;
				
			}
			
			return retorno;
			
		}
		
		//função para calcular a quantidade de segundos entre um datetime e outro
		this.datetime_diff_seconds = function(dt_criacao, dt_expiracao){
			
			let dt1 = dt_criacao.split(' ');
			let dt2 = dt_expiracao.split(' ');
			
			let hora1, hora2, retorno;
			
			
			if(dt1[0] == dt2[0]){
				
				hora1 = this.convertHorasSegundos(dt1[1]);
				hora2 = this.convertHorasSegundos(dt2[1]);
				
				if(hora1 !== false  && hora2 !== false){
					console.log("Diferença de dias: 0");
					console.log("Hora 1: "+hora1+" segundos");
					console.log("Hora 2: "+hora2+" segundos");
					retorno = hora2 - hora1;
				}else{
					
					retorno = false;
				}
				
			}else{
				
				hora1 = this.convertHorasSegundos(dt1[1]);
				hora2 = this.convertHorasSegundos(dt2[1]);
				
				
				if(hora1 !== false && hora2 !== false){
					
					console.log("Hora 1: "+hora1+" segundos");
					console.log("Hora 2: "+hora2+" segundos");
					
					let dias_acumulados = this.data_diff(dt1[0], dt2[0]);
					
					if(dias_acumulados !== false){
						
						console.log("Diferença de dias: "+dias_acumulados);
						retorno = (((dias_acumulados * 24) * 60) * 60) - hora1 + hora2;
						
					}else{
						
						retorno = false;
					}
					
				}else{

					retorno = false;
				}
				
				
				
			}
			return retorno;
		}
		
		//converte data no formato d/m/y para y-m-d e junta com o horário para formar um datetime
		this.convertDataHoraDatetime = function(data, horario){
		
			let dt = data.split('/');
			
			let retorno = dt[2]+"-"+dt[1]+"-"+dt[0]+" "+horario;
			
			return retorno;
			
		}
		
		//função que calcula a diferença entre dois datetimes em determinada medida
		this.datetime_diff = function(inicio, fim, medida){
			
			let retorno = new Array(); 
			let horas, segundos, dias;
		
			switch(medida){
				
				case 'd':
				
					segundos = this.datetime_diff_seconds(inicio, fim);
					
					retorno[1] = this.convertSegundosDias(segundos);
					
				break;
				
				case 'h':
				
					segundos = this.datetime_diff_seconds(inicio, fim);
					
					retorno[1] = this.convertSegundosHoras(segundos);
				
				break;
				
				case 'm':
				
					segundos = this.datetime_diff_seconds(inicio, fim);
					
					retorno[1] = this.convertSegundosMinutos(segundos);
					
				break;
				
				case 's':
					
					retorno[1] = this.datetime_diff_seconds(inicio, fim);
				
				break;
				
				default:
				
					retorno[0] = false;
				
				break;
				
			}
			
			if(retorno[1] !== false){
				retorno[0] = true;
			}else{
				retorno[0] = false;
			}
			
			return retorno;
			
		}
		
		
	}



