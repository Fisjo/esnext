

const heroes = ['Batman','Superman', 'Flash','Aquaman'];

const sortedHeroes = heroes.toSorted(); 

const reverseHeroes = heroes.toReversed(); 

const deletedHeroes = heroes.toSpliced(0, 2, 'Green Lantern', 'Ironman'); //devuelve un array modificado

console.table(heroes);
console.table(sortedHeroes);
console.table(reverseHeroes);
console.table(deletedHeroes);

