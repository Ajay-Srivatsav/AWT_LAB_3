let A=[7,8,9,10]
let B=[...A]
let C=[10,11,12]

B[2] = 5

console.log(A);
console.log(B);
console.log(C);

console.log("concatinating A and C => ",...A,...C);