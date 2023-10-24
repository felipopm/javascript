function clicou(){
    let res = document.getElementById('res')

    let sal = []
    let sal_sem0 = []

    for (let i = 0; i <= sal.length; i++) {                      //Looping de 
        sal[i] = window.prompt('Digite o valor do seu salário')  //entrada de valores.

        if (sal[i] == 0) {                                       //Condição para sair, 
            i++                                                  //digitou 0.
            for (let i1 = 0; i1 < sal.length - 1; i1++) {        //Looping para transferência  
                sal_sem0[i1] = sal[i1]                           //do valores do array sal para 
            }                                                    //o array sal_sem0 retirando
            sal = sal_sem0                                       //o último valor 0.
            
            /*res.innerHTML += `<br>sal_sem0 = ${sal_sem0}`*/    //Conferindo valor (TEMPORÁRIO).
        }    
        else{ res.innerHTML += `<br>Salário: ${sal[i]}` }        //Se não //apresenta valor de saída.

    }
    
    /*res.innerHTML += `<br>sal = ${sal}`*/                      //Conferindo valor (TEMPORÁRIO).

    res.innerHTML += `<br><br>Salário - Abono`                   //Texto

    let abono = []                                               //Cria algumas variáveis que para 
    let soma_abn = 0                                             //looping e condicionais para 
    let min_pg = 0                                               //apresentação na tela.
    for (let i2 = 0; i2 < sal.length; i2++) {                    //Looping de apresentação dos 
                                                                 //salários e seus respectivos abonos.
        if((sal[i2] * 0.2) < 100){                               //Se o abono de 20% do valor do salário for menos que 
            abono [i2]= 100                                      //100,00 o abono será de 100,00 reais.
            min_pg++
            res.innerHTML += `<br>R$ ${sal[i2]} - R$ ${abono[i2]}`//Aprensenta o abono mínimo
        }
        else{                                                    //Se não for menor de 100,00 
            abono[i2] = sal[i2] * 0.2
            res.innerHTML += `<br>R$ ${sal[i2]} - R$ ${abono[i2]}`//Apresenta o abono de 20% do salário
        }

        soma_abn += abono[i2]                                     //Soma-se todos os abonos
    
    }
    
    let sal_Mm = sal.sort((a, b) => a - b)                        //Organizar os valores do array 'sal' no 
                                                                  //array 'sal_Mm' do menor para o maior.
    /*res.innerHTML += `<br>sal_Mm = ${sal_Mm}<br>`*/               

    let pos_M_abn = sal.length - 1                                //Pega a posição do ultimo valor do array 'sal_Mm'.
    
    /*res.innerHTML += `<br>pos_M_abn = ${pos_M_abn}<br>`*/

    let Maior_abn = sal[pos_M_abn]                                //Pega o valor da ultima posição do
                                                                  //array 'sal', ou seja, o maior valor.

    res.innerHTML += `<br><br>Foram processados ${sal.length} colaboradores.` //Mostra quantos colaboradores que ganharam
                                                                              //abono.
    res.innerHTML += `<br>Total gasto com abonos: R$ ${soma_abn}`             //Mostra a soma dos abonos pagos.
    res.innerHTML += `<br>Valor mínimo pago a ${min_pg} colaboradores`        //Mostra quantos funcionários receberam 
                                                                              //abono minimo de 100,00. 
    res.innerHTML += `<br>Maior valor de abono pago: R$ ${abono[pos_M_abn]}`  //Mostra o maior valor de abono pago.
}