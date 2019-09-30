let vardas = "deivis" // vietoj galima ir su var. Let yra lokalesnis, var globalus.
let miestas = "Kaunas"
let email = "asddsa@das.com"
console.log(typeof vardas);
console.log(typeof 123);
console.log(typeof true); //JS galima be semi colon. Kaip pythone
console.log(typeof ['asd', 'as']);
console.log(typeof {vardas: "Deividas"});
const margins = "120px"; //negalima keist const
//magins = "123px" klaida.

console.log("vardas: " + vardas +  " miestas: " + miestas + " email: " + email)
console.log(email.length) //kintamieji yra objektai. Naudojam metoda