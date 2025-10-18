const accountId = 22119235
let accountEmail = "tanmay@gmail.com"
var accountPassword = "92352211"
accountCity = "Lucknow"
let accountstate;

//accountId = 34 // not allowed // cont cant be changed 

accountEmail = "kt@gmail.com"
accountPassword = "51552"
accountCity ="mysuru"

console.log(accountId);
console.log([accountId,accountEmail,accountPassword,accountCity])
console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])

/*
prefer not to use var 
because of issue in block scope and functional scope 
*/

/*in js we can declare a variable withot using let or var even though we shouldnt 
and if declare a variable without assighning value in js it'll show undefined */

