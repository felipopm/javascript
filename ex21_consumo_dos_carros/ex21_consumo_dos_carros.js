function clicou(){
    let res = document.getElementById('res')

    let car = []
    let cons = []
    for (let i = 0; i <= car.length; i++) {
        car[i] = window.prompt('Digite o nome do carro')
        if (car[i] == 0) {
            i++
//res.innerHTML += `<br>car = ${car}` //conferindo dados (TEMPORÁRIO)
//res.innerHTML += `<br>cons = ${cons}` //conferindo dados (TEMPORÁRIO)
        }
        else {
            cons[i] = Number(window.prompt('Digite o consumo de combustível do'+car[i]+'.'))
        }
    }

    let car_s0 = []
    for (let i2 = 0; i2 < car.length - 1; i2++) {
        car_s0[i2] = car[i2] 
    }
    car = car_s0
//res.innerHTML += `<br>car_s0 = ${car_s0}` //conferindo dados (TEMPORÁRIO)
//res.innerHTML += `<br>car = ${car}` //conferindo dados (TEMPORÁRIO)

    res.innerHTML += `<br>Comparativo de Consumo de Combustível<br>`
    for (let i3 = 0; i3 < car.length; i3++) {
        res.innerHTML += `<br>Veículo ${i3 + 1}`
        res.innerHTML += `<br>Nome: ${car[i3]}`
        res.innerHTML += `<br>Km por litro: ${cons[i3]}`
    }
    
    res.innerHTML += `<br><br>Relatório final`
    for (let i4 = 0; i4 < car.length; i4++) {
        res.innerHTML += `<br>${i4 + 1} - ${car[i4]} - ${cons[i4]} - ${(1000 / cons[i4]).toFixed(2)} litros - R$ ${(1000 / cons[i4] * 2.25).toFixed(2)}`        
    }

    let M_km_p_l = []
    M_km_p_l[0] = cons[0]
    M_km_p_l[2] = car[0]
    for (let i5 = 0; i5 < car.length; i5++) {
        M_km_p_l[1] = cons[i5 + 1]
        if(M_km_p_l[1] > M_km_p_l[0]){
            M_km_p_l[0] = M_km_p_l[1]
            M_km_p_l[2] = car[i5 + 1]
        }
//res.innerHTML += `<br>M_km_p_l = ${M_km_p_l}` //conferindo dados (TEMPORÁRIO)
    }
    res.innerHTML += `<br>O menor consumo é do <strong>${M_km_p_l[2]}</strong> que consome <strong>${M_km_p_l[0]} km/l</strong>.`
}