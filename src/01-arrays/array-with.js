

const state = [
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

const index = 1; 
const newName = 'Green Lantern';

// const newState = state.map((hero, i) => {
//     if (i === index) {
//         hero.name = newName;
//     }
//     return {...hero}; 
// }); 

//cambia el elemento en el indice por el valor seleccionado
const newState = state.with(index, {
    ...state.at(index),     //para mantener un valor
    name: newName
});

state[0].name = 'Volcan Negro'; 
console.table(newState)

console.log('\n\nEl ultimo indice: ', state.at(-1)); //at(-1) es la ultima (-2) penultima...

