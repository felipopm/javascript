function clicou() {
    let res = document.getElementById("res")        //Referência 'res' para o HTML.
//________________________ENTRADA DE DADOS________________________________________________
    let mouse = []                                  //Variáveis para 
    let situ = []                                   //contabilização 
    let soma = 0                                    //dos mouses e 
    let soma_situ = [0,0,0,0]                       //situações.
    
    for (let i = 0; i <= mouse.length; i++) {       //Looping para entrada de dados.
        
        mouse[i] = Number(window.prompt('Digite o número de contagem de quantidade do mouse:'))
        if (mouse[i] == 0) {                        //Se o número do mouse for "0" encerrar entrada de dados.
            i++
        }
        else{                                       //Se o número da situação for "0" encerrar entrada de dados.
            situ[i] = Number(window.prompt('Digite o número referente a situação do mouse: <br>1- necessita da esfera<br>2- necessita de limpeza<br>3- necessita troca do cabo ou conector<br>4- quebrado ou inutilizado'))
            if (situ[i] == 0) {
                i++
            }
        }   
//___________________________________________________________________________________________

//___________________SOMANDO AS SITUAÇÕES DOS MOUSES_________________________________________
        switch (situ[i]) {                          //Se o número da situação for:
            case 1:
                soma_situ[0] = soma_situ[0] + 1     //"1" soma mais "1" na posição 0 do array 'soma_situ'.
                break;
            case 2:
                soma_situ[1] = soma_situ[1] + 1     //"2" soma mais "1" na posição 1 do array 'soma_situ'.
                break;
            case 3:
                soma_situ[2]++                      //"3" soma mais "1" na posição 2 do array 'soma_situ'.
                break;
            case 4:
                soma_situ[3]++                      //"4" soma mais "1" na posição 3 do array 'soma_situ'.
                break;
            default:
                break;
        }
    }
//___________________________________________________________________________________________

//res.innerHTML += `<br>soma_situ = ${soma_situ}`  //Verificação (TEMPORÁRIO).
//res.innerHTML += `<br>mouse = ${mouse}`            //Verificação (TEMPORÁRIO).
//res.innerHTML += `<br>situ = ${situ}`              //Verificação (TEMPORÁRIO).

//_TIRA O ÚLTIMO NÚMERO DOS ARRAYS 'mouse' e 'situ' QUANDO O USUÁRIO COLOCA "0" AN ENTRADA DE DADOS__
    let mouse_s0 = []
    let situ_s0 = []
    let pos_m = mouse.length

//res.innerHTML += `<br>pos_m = ${pos_m}`                //Verificação (TEMPORÁRIO).

    if (mouse[pos_m - 1] == 0) {                         //Se o último número do mouse for "0".
        for (let i = 0; i < mouse.length - 1; i++) {
            mouse_s0[i] = mouse[i]
        }
        mouse = mouse_s0
    }

    let pos_s = situ.length

//res.innerHTML += `<br>pos_s = ${pos_s}`               //Verificação (TEMPORÁRIO).

    if (situ[pos_s - 1] == 0) {                         //Se o último número da situação for "0".
        for (let i = 0; i < situ.length - 1; i++) {
            situ_s0[i] = situ[i] 
        }
        situ = situ_s0
    }

    if (mouse.length > situ.length) {
        for (let i = 0; i < mouse.length - 1; i++) {   //Se o último número da situação for "0" 
            mouse_s0[i] = mouse[i]                     //precisa retirar o último número do 
        }                                              //mouse que foi adicionado.
        mouse = mouse_s0
    }
//___________________________________________________________________________________________

//res.innerHTML += `<br>mouse_s0 = ${mouse_s0}`      //Verificação (TEMPORÁRIO).
//res.innerHTML += `<br>situ_s0 = ${situ_s0}`        //Verificação (TEMPORÁRIO).
//res.innerHTML += `<br>mouse = ${mouse}`            //Verificação (TEMPORÁRIO).
//res.innerHTML += `<br>situ = ${situ}`              //Verificação (TEMPORÁRIO).

//_________________________________EXIBE NA TELA______________________________________________
    res.innerHTML += `<br>Quantidade de mouses: ${mouse.length}`
    res.innerHTML += `<br><br>Situação Quantidade Percentual`
    res.innerHTML += `<br>1- necessita da esfera ${soma_situ[0]} ${(soma_situ[0] / mouse.length * 100).toFixed(2)}%`
    res.innerHTML += `<br>2- necessita de limpeza ${soma_situ[1]} ${(soma_situ[1] / mouse.length * 100).toFixed(2)}%`
    res.innerHTML += `<br>3- necessita troca do cabo ou conector ${soma_situ[2]} ${(soma_situ[2] / mouse.length * 100).toFixed(2)}%`
    res.innerHTML += `<br>4- quebrado ou inutilizado ${soma_situ[3]} ${(soma_situ[3] / mouse.length * 100).toFixed(2)}%`
//____________________________________________________________________________________________
}