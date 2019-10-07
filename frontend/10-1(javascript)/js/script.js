"use script" //erro handlingas nauju JS. patartina naudot
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
	grozines : {
		grozineKnyga1: {
			ISBN: 3548354, leidimoMetai: 1988, pavadinimas: "kulinarija", puslapiai: 421, kaina: 0.99
		},
		grozineKnyga2: {
			ISBN: 7441354, leidimoMetai: 1988, pavadinimas: "haris poteris", puslapiai: 231, kaina: 5.99
		},
		grozineKnyga3: {
			ISBN: 3592354, leidimoMetai: 2018, pavadinimas: "ziedu valdovdas", puslapiai: 482, kaina: 9.99
		},
		grozineKnyga4: {
			ISBN: 3321354, leidimoMetai: 2018, pavadinimas: "qwerty", puslapiai: 391, kaina: 12.99
		},
	},
	mokslines : {
		mokslineKnyga1 : {
			ISBN: 3548954, leidimoMetai: 1988, pavadinimas: "haris poteris2", puslapiai: 119, kaina: 8.75
		},
		mokslineKnyga2 : {
			ISBN: 3751354, leidimoMetai: 1888, pavadinimas: "nauji metai", puslapiai: 222, kaina: 6.75
		},
		mokslineKnyga3 : {
			ISBN: 3543454, leidimoMetai: 1988, pavadinimas: "haris poteris", puslapiai: 222, kaina: 15.75
		},
		mokslineKnyga4 : {
			ISBN: 3549254, leidimoMetai: 1988, pavadinimas: "rokis balbo", puslapiai: 345, kaina: 11.00
		},
	},
	detektyvai : {
		detektyvineKnyga1 : {
			ISBN: 3546354, leidimoMetai: 1988, pavadinimas: "haris poteris4", puslapiai: 109, kaina: 15.30
		},
		detektyvineKnyga2 : {
			ISBN: 3541329, leidimoMetai: 1988, pavadinimas: "haris poteris1", puslapiai: 324, kaina: 9.30
		},
		detektyvineKnyga3 : {
			ISBN: 3741354, leidimoMetai: 1988, pavadinimas: "romie", puslapiai: 221, kaina: 11.30
		},
		detektyvineKnyga4 : {
			ISBN: 3573355, leidimoMetai: 2018, pavadinimas: "haris poteris2", puslapiai: 623, kaina: 8.30
		},
	}
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

// console.log(knygynas['grozines']['grozineKnyga4']['ISBN'] < knygynas['grozines']['grozineKnyga3']['ISBN'])


function isleista2008(){
	console.log("Knygos isleistos 2018 metais:")
	for (let kategorija in knygynas){
		for(let knyga in knygynas[kategorija]){
			if (knygynas[kategorija][knyga]['leidimoMetai'] == 2018){
				console.log(knygynas[kategorija][knyga]['pavadinimas'])
			}
		}
	}
}
// isleista2008()

function pigiausia(){
	for (let kategorija in knygynas){
		var pigiausios_kaina = 999999999 //padaryt i max didziausia
		for (let knyga in knygynas[kategorija]){
			if (knygynas[kategorija][knyga]['kaina'] < pigiausios_kaina){
				pigiausios_kaina = knygynas[kategorija][knyga]['kaina']
			}
		}
	}
console.log(pigiausios_kaina)
}

pigiausia()
