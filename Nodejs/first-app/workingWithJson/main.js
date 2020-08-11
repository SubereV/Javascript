var person = {
    name: "Khang Vo",
    age: 20,
    address: "145 Bui Cong Trung"
}
var obj ={
    table: []
}
let {age} = person;
obj.table.push(person);
var json = JSON.stringify(obj);
var fs = require('fs');

fs.writeFileSync("data.json",json);
fs.readFileSync
console.log(age);