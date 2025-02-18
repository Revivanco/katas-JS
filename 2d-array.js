const arraytridimentional = [
    [
        [
            0, 1, 2
        ],
        [
            0, 1, 2
        ],
        [
            0, 1, 2
        ]
    ],
    [
        [
            0, 1, 2
        ],
        [
            0, 1, 2
        ],
        [
            0, 1, 2
        ]
    ],
    [
        [
            0, 1, 2
        ],
        [
            0, 1, 2
        ],
        [
            0, 1, 2
        ]
    ]
]


const arrayBidimentional = [
    [0, 0, 0],
    [0, 0, 1],
    [0, 0, 0]
]


const findTheMine = (squared) => {
    const mine = 1
    for (let i = 0; i < squared.length; i++) {
        const arregloInterno = squared[i]
        for (let r = 0; r < arregloInterno.length; r++) {
            if (arregloInterno[r] === mine) {
                console.log("encontre la mina")
                console.log(`estoy en Elemento ${i} del primer arreglo, yyyyyyyyy estoy en el Elemento interno No ${r}`)
                console.log([i, r])
                return [i, r]
            }
        }
    }
}

findTheMine(arrayBidimentional) 