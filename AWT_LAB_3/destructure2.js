let name = ["Ajay","Kumar"]
console.log(name);

// destructuring 'name' array with default values

let [fname,lname,age=24] = name
console.log(fname);
console.log(lname);
console.log(age);