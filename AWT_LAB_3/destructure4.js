let name = ["Ajay","Kumar",20,"hyderabad","telangana","India"]
console.log(name);

// destructuring 'name' array with rest parameters

let [fname,...rest] = name 
console.log(fname);

// to access the rest parameters => we use rest[0],rest[1],.....so on 
// hence remaining all are stored in 'rest' array   i.e; from name[1] elements.

console.log(rest[0]);
console.log(rest[3]);