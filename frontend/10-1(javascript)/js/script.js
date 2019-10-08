"use strict" //erro handlingas nauju JS. patartina naudot
//let galioja bloke

// let prekesPavadinimas = "iqos"
// let prekesAprasymas = "IQOS 3 MULTI yra tabako kaitinimo sistema, skirta suaugusiems rukantiesiems, kurie iesko rukymo alternatyvos. Tai kompaktiskas irenginys, kuris kaitina, o ne degina, o ikrautas veikia 10 kaitinimo ciklu."
// let kiekis = 20
// let nuolaida = 30
// let kaina = 19.99 

// let prekes = {
// 	prekesPavadinimas: "iqos",
// 	prekesAprasymas: "IQOS 3 MULTI yra tabako kaitinimo sistema, skirta suaugusiems rukantiesiems, kurie iesko rukymo alternatyvos. Tai kompaktiskas irenginys, kuris kaitina, o ne degina, o ikrautas veikia 10 kaitinimo ciklu.",
// 	kiekis: 20,
// 	nuolaida: 30,
// 	kaina: 19.99
// }
// console.log(prekes['kiekis']) 
//arba
// console.log(prekes.kiekis) //bet for in sitas neveiks, reik [i]

// for(let i in prekes){
// 	console.log(prekes[i])
// }

// console.log(Object.keys(prekes)[0])

// var katalogas = ["maistas", "iranga", "biuro reikmenys"]
// katalogas[0] = ["pienas", "kava", "arbata"]
// katalogas[1] = ["stakles", "indaplove", "branduolinis kuras"]
// katalogas[2] = ["piestukai", "lapai", "segtuvas"] 

// let katalogas = {
// 	maistas: ["pienas", "kava", "arbata"],
// 	iranga: ["stakles", "indaplove", "branduolinis kuras"],
// 	kita: ["piestukai", "lapai", "segtuvas"]
// }

// let k = 0
// for (let i in katalogas){ 
// 	console.log(i.toUpperCase()) //i yra key, kai taip naudojam ! atskirti nuo katalogas[i]
// 	console.log(katalogas[i])
// 	k++
// }

// for (let i=0; i < katalogas.length; i++){
// 	console.log(katalogas[i])
// 	for (let k=0; k < katalogas[i].length; k++){
// 		console.log(katalogas[i][k])
// 	}
// }

var knygynas = { // galima ir [] naudoti.
	grozines : [
		{ISBN: 3548354, leidimoMetai: 1988, pavadinimas: "receptu knyga", puslapiai: 421, kaina: 0.99},
		{ISBN: 7441354, leidimoMetai: 1988, pavadinimas: "haris poteris7", puslapiai: 231, kaina: 5.99},
		{ISBN: 3592354, leidimoMetai: 2018, pavadinimas: "ziedu valdovdas", puslapiai: 482, kaina: 9.99},
		{ISBN: 3321354, leidimoMetai: 2018, pavadinimas: "qwerty", puslapiai: 391, kaina: 12.99}
	],
	mokslines : [
		{ISBN: 3548954, leidimoMetai: 1988, pavadinimas: "haris poteris2", puslapiai: 119, kaina: 8.75},
		{ISBN: 3751354, leidimoMetai: 1888, pavadinimas: "nauji metai", puslapiai: 222, kaina: 6.75},
		{ISBN: 3543454, leidimoMetai: 1988, pavadinimas: "haris poteris", puslapiai: 222, kaina: 15.75},
		{ISBN: 3549254, leidimoMetai: 1988, pavadinimas: "rokis balbo", puslapiai: 345, kaina: 11.00}
	],
	detektyvai : [
		{ISBN: 3546354, leidimoMetai: 1988, pavadinimas: "haris poteris4", puslapiai: 109, kaina: 15.30},
		{ISBN: 3541329, leidimoMetai: 1988, pavadinimas: "haris poteris1", puslapiai: 324, kaina: 9.30},
		{ISBN: 3741354, leidimoMetai: 2018, pavadinimas: "romie", puslapiai: 221, kaina: 11.30},
		{ISBN: 3573355, leidimoMetai: 2018, pavadinimas: "haris poteris11", puslapiai: 623, kaina: 8.30}
	]
}
// for (let kategorijos in knygynas){
// 	for (let knygos in knygynas[kategorijos]){
// 		console.log("kategorijos: " + kategorijos)
// 		console.log("knygu kiekis sitoj kategorijoj: " +Object.keys(knygynas[kategorijos]).length)
// 		for (var i in knygynas[kategorijos][knygos]){
// 			console.log(knygynas[kategorijos][knygos][i])
// 		}
// 	}
// }


function isleista2008(){
	console.log("-----Knygos isleistos 2018 metais :-----")
	for (let kategorija in knygynas){
		for(let knyga in knygynas[kategorija]){
			if (knygynas[kategorija][knyga]['leidimoMetai'] == 2018){
				console.log(knygynas[kategorija][knyga]['pavadinimas'] +" " + knygynas[kategorija][knyga]['leidimoMetai'])
			}
		}
	}
}

function pigiausiaKategorijoj(){
	for (let kategorija in knygynas){
		console.log("pigiausia knyga kategorijoje - " + kategorija + " - yra:")
		knygynas[kategorija].sort(function(a, b){
			return a.kaina > b.kaina;
		});
		console.log(knygynas[kategorija][0]['pavadinimas'] + " : " + knygynas[kategorija][0]['kaina'] + "eur")
	}
}

// isleista2008()
// pigiausiaKategorijoj()

function pavadinimuMasyvoSukurimas(){
	let knyguPavadinimai = []

	for (let kategorija in knygynas){
		for (let knyga in knygynas[kategorija]){
			knyguPavadinimai.push(knygynas[kategorija][knyga]['pavadinimas'])
		}
	}
	knyguPavadinimai.sort()
	for(let pavadinimas of knyguPavadinimai){
		console.log(pavadinimas)
	}
}

// pavadinimuMasyvoSukurimas()

function Skaitytojas(vardas, pavarde, perskaitytosKnygos){ //iniciatorius
	this.vardas = vardas; //objekto key sukuria.
	this.pavarde = pavarde;
	this.perskaitytosKnygos = perskaitytosKnygos
	this.greeting = function(){
		console.log("Hi i'm, " + vardas + " " + pavarde + " perskaitytos knygos: " + perskaitytosKnygos)
	}
}

let skaitytojas1 = new Skaitytojas("Deividas", "Zemaitis", [1,2,3]);

skaitytojas1.greeting()

Skaitytojas.prototype.labas = function(){ //prototype keyword, kad sukurti metoda isoreje, o ne iniciatoriaus viduje.
	console.log(this.vardas + " sako labas")
}
skaitytojas1.labas()

function VipSkaitytojas(vardas, pavarde, perskaitytosKnygos, rankas){ //paveldejimas(senasis budas)
	Skaitytojas.call(this, vardas,pavarde, perskaitytosKnygos)
	this.rankas = rankas
}

let skaitytojas2 = new VipSkaitytojas("Marius", "Grybauskas", [1,2,3], "leitenantas")
console.log(skaitytojas2.rankas)

// ----------------SC6-------------

// naujoves:

console.log(`rankas: ${skaitytojas2.rankas},
 va taip su doleriu zenklu atspauzdint`) //galima i kita eilute kelt, ir kintamuose su $, bet reik `` naudot (apostrofa)


let [amzius, svoris, ugis] = [26, 80, 186] //kaip pythone galime sukurt. (array destructing. galima ir su objektu)
console.log(amzius)


function paieska(arr, value){
	console.log(arr.includes(value))
}

paieska(['albas', 'marcius', 'giecka', 'zora', 'remyga'], 'albas') //true

// atsiranda klases. Dabar taip rasosi. Jau su zodziu class:

class SkaitytojasSD6{
	constructor(vardas, pavarde, perskaitytosKnygos){
		this.vardas = vardas; 
		this.pavarde = pavarde;
		this.perskaitytosKnygos = perskaitytosKnygos
		}
	greeting(){
		console.log(`${this.vardas} labas!` )
	}
}

let skaitytojas_is_sd6 = new SkaitytojasSD6('deivis', 'zemaitis', [1,2,3])

skaitytojas_is_sd6.greeting()

//paveldejimas 