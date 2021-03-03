let name = ["Ajay","Kumar",20]
console.log(name);

let person = {firstname:"ajay" , lastname:"kumar" , ageis:24}
console.log(person);

console.log();


// destructuring 'name' array


let [fname,lname,age] = name  
// OR WE CAN WRITE AS  =>  let [fname,lname,age] = ["Ajay","kumar",20]
console.log("AFTER DESTRUCTURING NAME ARRAY ");
console.log("  "+fname);
console.log("  "+lname);
console.log("  "+age);

// destructuring 'person' array 

let {firstname,lastname,ageis} = person
console.log("AFTER DESTRUCTURING PERSON ARRAY ");
console.log("  "+firstname);
console.log("  "+lastname);
console.log("  "+ageis);