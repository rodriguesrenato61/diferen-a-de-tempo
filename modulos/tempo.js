

	export default function Tempo(){
	
		this.converterHora = function(horario){
			
			let tempo = horario.split(':');
	
			let hora = parseInt(tempo[0]);
			
			let minuto = parseInt(tempo[1]);
		
			let segundo = parseInt(tempo[2]);
		
			let retorno = (hora * 3600) + (minuto * 60) + segundo;
		 
			return retorno;
		}
		
		this.data_diff = function(dt1, dt2){
	
			let dt_criacao = dt1.split('-');
			let dt_expiracao = dt2.split('-');
			let ano1 = parseInt(dt_criacao[0]);
			let ano2 = parseInt(dt_expiracao[0]);
			let mes1 = parseInt(dt_criacao[1]);
			let mes2 = parseInt(dt_expiracao[1]);
			let dia1 = parseInt(dt_criacao[2]);
			let dia2 = parseInt(dt_expiracao[2]);
			
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
							if(cont_mes == 1){
								if((cont_ano % 4) == 0){
									mes[cont_mes] = 29;
								}else{
									mes[cont_mes] = 28;
								} 
							}
							dias_acumulados += mes[cont_mes];
						}
					}else{
						
						for(cont_mes = mes_atual; cont_mes < mes_final; cont_mes++){
							if(cont_mes == 1){
								if((cont_ano % 4) == 0){
									mes[cont_mes] = 29;
								}else{
									mes[cont_mes] = 28;
								} 
							}
							dias_acumulados += mes[cont_mes];
						}
						
					}
					
				}else{
					
					if(cont_ano < ano2){
					
						for(cont_mes = 0; cont_mes < 12; cont_mes++){
							if(cont_mes == 1){
								if((cont_ano % 4) == 0){
									mes[cont_mes] = 29;
								}else{
									mes[cont_mes] = 28;
								} 
							}
							dias_acumulados += mes[cont_mes];
						}
					
					}else{
						
						
						for(cont_mes = 0; cont_mes < mes_final; cont_mes++){
							if(cont_mes == 1){
								if((cont_ano % 4) == 0){
									mes[cont_mes] = 29;
								}else{
									mes[cont_mes] = 28;
								} 
							}
							dias_acumulados += mes[cont_mes];
						}
						
					}
					
				}
			}
			
			let retorno = dias_acumulados - dia1 + dia2;
			
			if(!flag){
			
				retorno = retorno * (-1);
				
			}
			
			return retorno;
			
		}
		
		this.datetime_sub_seconds = function(dt_criacao, dt_expiracao){
			
			let dt1 = dt_criacao.split(' ');
			let dt2 = dt_expiracao.split(' ');
			
			let hora1, hora2, retorno;
			
			if(dt1[0] == dt2[0]){
				
				hora1 = this.converterHora(dt1[1]);
				hora2 = this.converterHora(dt2[1]);
				retorno = hora2 - hora1;
				
			}else{
				
				hora1 = this.converterHora(dt1[1]);
				hora2 = this.converterHora(dt2[1]);
				
				let dias_acumulados = this.data_diff(dt1[0], dt2[0]);
				retorno = (((dias_acumulados * 24) * 60) * 60) - hora1 + hora2;
				
			}
			return retorno;
		}
		
		
	}



