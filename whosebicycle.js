

const qualificationsRegina = {
    math: 8,
    spanish: 6,
    history: 10,
    etics: 6,
    biology: 9
}

const qualificationsAndre = {
    math: 7,
    spanish: 7,
    history: 18,
    etics: 8,
    biology: 10
}


const qualificationsSofia = {
    math: 5,
    spanish: 10,
    history: 9,
    etics: 10,
    biology: 7
}



let datoUno =
    { algebra: 6, history: 7, physics: 8, geography: 9, chemistry: 10 }
let daroDos =
    { algebra: 8, history: 7, physics: 8, geography: 9, chemistry: 10 }
let datoTres =
    { algebra: 6, history: 5, physics: 5, geography: 9, chemistry: 10 }


const getscore = (object) => {
    let array = Object.keys(object)

    let scoreTotal = 0;
    for (let i = 0; i < array.length; i++) {
        scoreTotal = object[array[i]] + scoreTotal

    }
    return scoreTotal
};

const whoseBicycle = (regina, andre, sofia) => {

    const ageTable = {
        'firstSonAge': 14,
        'secondSonAge': 9,
        'thirdSonAge': 8
    }
    let reginaScore = getscore(regina);
    let andreScore = getscore(andre);
    let sofiaScore = getscore(sofia);

    console.log(reginaScore)
    console.log(andreScore)
    console.log(sofiaScore)

    if (reginaScore > andreScore) {
        if (reginaScore > sofiaScore) {
            return 'I need to buy a bicycle for my first son.'
        }
        if (reginaScore === sofiaScore) {
            return 'I need to buy a bicycle for my third son.'
        }
    }

    if (andreScore > sofiaScore) {
        if (andreScore > reginaScore) {
            return 'I need to buy a bicycle for my second son.'
        }
        if (andreScore === reginaScore) {
            return 'I need to buy a bicycle for my second son.'
        }
    }

    if (sofiaScore > reginaScore) {
        if (sofiaScore > andreScore) {
            return 'I need to buy a bicycle for my third son.'
        }
        if (sofiaScore === reginaScore) {
            return 'I need to buy a bicycle for my third son.'
        }
    }

    if (sofiaScore === reginaScore) {
        return 'I need to buy a bicycle for my third son.'
    }

    if (andreScore === sofiaScore) {
        return 'I need to buy a bicycle for my third son.'
    }

    if (andreScore === reginaScore) {
        return 'I need to buy a bicycle for my second son.'
    }
}





/*let primerResultado = whoseBicycle(qualificationsRegina, qualificationsSofia, qualificationsAndre);
let result = whoseBicycle({ algebra: 6, history: 7, physics: 8, geography: 9, chemistry: 10 }, { algebra: 8, history: 7, physics: 8, geography: 9, chemistry: 10 }, { algebra: 6, history: 5, physics: 5, geography: 9, chemistry: 10 });
console.log(primerResultado)
console.log(result)
*/
console.log(
    whoseBicycle(
        {
            'algebra': 6,
            'history': 7,
            'physics': 8,
            'geography': 9,
            'chemistry': 10
        },
        {
            'algebra': 6,
            'history': 7,
            'physics': 8,
            'geography': 9,
            'chemistry': 5
        },
        {
            'algebra': 6,
            'history': 7,
            'physics': 8,
            'geography': 9,
            'chemistry': 10
        }
    )
)




const diary1 = {
    "algebra": 4,
    "history": 3,
    "physics": 4,
    "geography": 7,
    "chemistry": 4
}
const diary2 = {
    "algebra": 3,
    "history": 7,
    "physics": 9,
    "geography": 1,
    "chemistry": 2
}
const diary3 = {
    "algebra": 8,
    "history": 4,
    "physics": 1,
    "geography": 1,
    "chemistry": 6
}
console.log(whoseBicycle(diary1, diary2, diary3))