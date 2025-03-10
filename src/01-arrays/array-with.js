

const superHeroes = [
    {
        id: 1, 
        name: 'Batman'
    },
    {
        id: 2, 
        name: 'Superman'
    },
    {
        id: 3, 
        name: 'Flash'
    },
    {
        id: 4, 
        name: 'Aquaman'
    },
];

//si esto fuera con primitivos va perfecto pero con objetos falla
//falla por el operador spread pero falla
// const superHeroesCopy = [...superHeroes]; 

const superHeroesCopy = structuredClone(superHeroes); 
superHeroesCopy[0].name = 'Ironman'; 


console.table(superHeroes);
console.table(superHeroesCopy); 