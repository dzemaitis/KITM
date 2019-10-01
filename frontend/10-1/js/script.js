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

var knygynas = {
	grozines : {
		grozineKnyga1: {
			ISBN: 3541354, leidimoMetai: 1988, pavadinimas: "haris poteris", puslapiai: 421
		},
		grozineKnyga2: {
			ISBN: 3541354, leidimoMetai: 1988, pavadinimas: "haris poteris", puslapiai: 231
		},
		grozineKnyga3: {
			ISBN: 3541354, leidimoMetai: 1988, pavadinimas: "haris poteris", puslapiai: 482
		},
		grozineKnyga4: {
			ISBN: 3541354, leidimoMetai: 1988, pavadinimas: "haris poteris", puslapiai: 391
		},
	},
	mokslines : {
		mokslineKnyga1 : {
			ISBN: 3541354, leidimoMetai: 1988, pavadinimas: "haris poteris", puslapiai: 119
		},
		mokslineKnyga2 : {
			ISBN: 3541354, leidimoMetai: 1988, pavadinimas: "haris poteris", puslapiai: 222
		},
		mokslineKnyga3 : {
			ISBN: 3541354, leidimoMetai: 1988, pavadinimas: "haris poteris", puslapiai: 222
		},
		mokslineKnyga4 : {
			ISBN: 3541354, leidimoMetai: 1988, pavadinimas: "haris poteris", puslapiai: 345
		},
	},
	detektyvai : {
		detektyvineKnyga1 : {
			ISBN: 3541354, leidimoMetai: 1988, pavadinimas: "haris poteris", puslapiai: 109
		},
		detektyvineKnyga2 : {
			ISBN: 3541354, leidimoMetai: 1988, pavadinimas: "haris poteris", puslapiai: 324
		},
		detektyvineKnyga3 : {
			ISBN: 3541354, leidimoMetai: 1988, pavadinimas: "romie", puslapiai: 221
		},
		detektyvineKnyga4 : {
			ISBN: 3541355, leidimoMetai: 1988, pavadinimas: "haris poteris", puslapiai: 623
		},
	}
}
for (let kategorijos in knygynas){
	for (let knygos in knygynas[kategorijos]){
		if (knygynas[kategorijos][knygos]['puslapiai'] == 623) {
			console.log("kategorijos: " + kategorijos)
			console.log("knygu kiekis sitoj kategorijoj: " +Object.keys(knygynas[kategorijos]).length)
			console.log(knygynas[kategorijos][knygos])
		}
		else{
			continue
		}
	}
}