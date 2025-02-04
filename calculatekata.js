const calculate = (...parametros) => {
    let sumaParametros = 0
    for (let i = 0; i < parametros.length; i++) {
        sumaParametros += parametros[i]
        console.log(sumaParametros)
    }
    return (...b) => {
        console.log(parametros, 'estoy en parametro')
        console.log(b, 'estoy en b')
        for (let r = 0; r < b.length; r++) {
            sumaParametros += b[r]
        }
        console.log(sumaParametros)
        return sumaParametros
    }

}

const suma = calculate(5, 6, 7, 8)(6, 7, 8)
console.log(suma)