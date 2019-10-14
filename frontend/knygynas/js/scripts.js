"use strict"

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

const knygos_ul = document.querySelector('.knygos');


for (let kategorijos in knygynas){
	let knyga = document.createElement('button')
	knyga.innerHTML = kategorijos
	knygos_ul.append(knyga)
}

const mygtukas1 = document.querySelectorAll('button')[0];
const mygtukas2 = document.querySelectorAll('button')[1];
const mygtukas3 = document.querySelectorAll('button')[2];

mygtukas1.addEventListener('click', show_knygas);
mygtukas2.addEventListener('click', show_knygas);
mygtukas3.addEventListener('click', show_knygas);

function show_knygas(){
	for(let kategorijos in knygynas){
		if(kategorijos == 'grozines')
		for(let knyga in knygynas[kategorijos]){
			console.log(knyga['pavadinimas'])
		}
	}
}






// function isleista2008(){
// 	console.log("-----Knygos isleistos 2018 metais :-----")
// 	for (let kategorija in knygynas){
// 		for(let knyga in knygynas[kategorija]){
// 			if (knygynas[kategorija][knyga]['leidimoMetai'] == 2018){
// 				console.log(knygynas[kategorija][knyga]['pavadinimas'] +" " + knygynas[kategorija][knyga]['leidimoMetai'])
// 			}
// 		}
// 	}
// }

// function pigiausiaKategorijoj(){
// 	for (let kategorija in knygynas){
// 		console.log("pigiausia knyga kategorijoje - " + kategorija + " - yra:")
// 		knygynas[kategorija].sort(function(a, b){
// 			return a.kaina > b.kaina;
// 		});
// 		console.log(knygynas[kategorija][0]['pavadinimas'] + " : " + knygynas[kategorija][0]['kaina'] + "eur")
// 	}
// }

// function pavadinimuMasyvoSukurimas(){
// 	let knyguPavadinimai = []

// 	for (let kategorija in knygynas){
// 		for (let knyga in knygynas[kategorija]){
// 			knyguPavadinimai.push(knygynas[kategorija][knyga]['pavadinimas'])
// 		}
// 	}
// 	knyguPavadinimai.sort()
// 	for(let pavadinimas of knyguPavadinimai){
// 		console.log(pavadinimas)
// 	}
// }

