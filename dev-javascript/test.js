// es6 const, map & template literals
const people = ['Chris', 'Mike'];
const peopleEmails = people.map(name => `${name.toLowerCase()}@gmail.com`);  

// es6 spread
const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

// es6 spread and array.from + map + arrow fn
function allToPower(power,...params) {
    return Array.from(params).map((a) => Math.pow(a,power) );
}

// es6 array.includes
[1, 2, 3, 5, 8, 13].includes(4);
