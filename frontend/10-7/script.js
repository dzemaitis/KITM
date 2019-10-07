var arr = ["aaa", "bbb", "ccc", "ddd", "eee", "fff"]

arr.push("ggg")
arr.pop();

arr.shift() //pasalina pirma. Bet letas metodas praktikoje.
arr.unshift("000") //i pradzia

arr.splice(1,2)





var mokiniai = ["Jonas", "Andrius", "Marius"]

skaicius = 1

let prideti = function(vardas, skaicius){
	return vardas + skaicius
}
for (let mokinys of mokiniai){
	console.log(prideti(mokinys, skaicius))
	skaicius += 1
}
