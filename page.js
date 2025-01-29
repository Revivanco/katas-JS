/*let arrayOne = [1, 1, 2, 3, 1, 3, 4, 2]

let values_list = [1,3]


const removeNumber = (integer_list, values_list) =>{
   const filterNumbers = arrayOne.filter((number) => !valuesToRemove.includes(number));
   console.log(filterNumbers)
    return filterNumbers
}*/

let arrayOne = [1, 1, 2, 3, 1, 3, 4, 2];

let valuesToRemove = [1,3];

const removeNumber = (integer_list, values_list) =>{
    let result = [];
    for(let i=0; i < integer_list.length; i++){
        let encontrado = false;
        for(let r = 0; r < values_list.length; r++){
            if(integer_list[i] === values_list[r]){
                encontrado = true;
                break;
            };
        };
        if(!encontrado){
            result.push(integer_list[i]);
        };
    };
    return result
};

removeNumber(arrayOne, valuesToRemove)
console.log(removeNumber(arrayOne, valuesToRemove))

arrayOne = [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8];
valuesToRemove = [1, 3, 4, 2];

console.log(removeNumber(arrayOne, valuesToRemove))
