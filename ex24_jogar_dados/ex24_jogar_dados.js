function clicou() {
//__________________________CRIAÇÃO DE VARIÁVEIS GLOBAIS_______________________________________________   
    let res = document.getElementById("res")

    let dado = [1,2,3,4,5,6]
    let val = []
    let soma_val = []

//__________________________ENTRADA DE VALORES QUE SAIRAM NO DADO_______________________________________
//res.innerHTML += `<br><br>dado = ${dado}<br>n _ = ` //Verificação da variável (TEMPORÁRIO)

    /*for (let i = 0; i <= val.length; i++) {
        val[i] = Number(window.prompt('Digite o valor que caiu no dado:'))
        if (val[i] == 0) {
            i++
        }
    }*/
    let n = 0
    for (let i = 0; i < 100; i++) {
        n = Math.floor(Math.random() * 6) + 1
        val[i] = n
//res.innerHTML += `${n},` //Verificação da variável (TEMPORÁRIO)
    }
    res.innerHTML += `<br><br>val = ${val}`

//__________________________SOMA DOS VALORES QUE SAIRAM NO DADO_________________________________________
    for (let i1 = 1; i1 <= dado.length; i1++) {
        let soma = 0
        
        for (let i2 = 0; i2 <= val.length; i2++) {
            if (val[i2] == i1) {
                soma = soma + 1
            }
            soma_val[i1 - 1] = soma
        }
    }

//__________________________EXIBINDO NA TELA____________________________________________________________
    res.innerHTML += `<br><br>O quantidade de cada número que saiu no dado foram:`
    res.innerHTML += `<br>1: ${soma_val[0]} vezes, 2: ${soma_val[1]} vezes, 3: ${soma_val[2]} vezes, 4: ${soma_val[3]} vezes, 5: ${soma_val[4]} vezes, 6: ${soma_val[5]} vezes.`

//______________________________________________________________________________________________________
}