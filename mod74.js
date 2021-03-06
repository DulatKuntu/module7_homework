function Electricity(name){
	this.name=name,
	this.totalPower = 0
}
Electricity.prototype.print = function(){
	console.log(`Electricity line ${this.name} is dissipation a power of ${this.totalPower} watts`)
}
function Equipment(name){
	this.name=name
}
function ElectricEquipment(name,consumingPower, electriCity){
	this.name=name,
	this.consumingPower = consumingPower,
	this.pluggedIn = false,
	this.electriCity = electriCity
}
const electricityLine1 = new Electricity("first")
const electricityLine2 = new Electricity("second")
ElectricEquipment.prototype = new Equipment()

ElectricEquipment.prototype.plugIn = function(){
	if(this.pluggedIn){
		console.log(`Equipment ${name} is already plugged in`)
		return
	}
	this.electriCity.totalPower += this.consumingPower
	this.pluggedIn=true
	return
}
ElectricEquipment.prototype.unplug = function(){
	if(this.pluggedIn){
		this.electriCity.totalPower -= this.consumingPower
		this.pluggedIn=false
		return
	}
	console.log(`Equipment ${name} is already unplugged`)
	return
}
const laptop = new ElectricEquipment("Laptop", 100, electricityLine1)
const mobile = new ElectricEquipment("Mobile",15,electricityLine1)
laptop.plugIn()
laptop.plugIn()
mobile.plugIn()
electricityLine1.print()
laptop.unplug()
electricityLine1.print()
console.log(laptop)