let name = ["Ajay","Kumar",20]
console.log(name);

// destructuring 'name' array and ignoring the values

let [fname,,age] = name  // ignored 'lname" value
console.log(fname);  //console.log(lname);  => error : lname is undefined
console.log(age);

