class Electricity{
	constructor(name){
		this.name=name,
		this.totalPower = 0
	}
	print(){
		console.log(`Electricity line ${this.name} is dissipation a power of ${this.totalPower} watts`)
	}
}

class Equipment{
	construct(name){
		this.name = name
	}
}

class ElectricEquipment extends Equipment{
	constructor(name,consumingPower, electriCity){
		super(name),
		this.name=name,
		this.consumingPower = consumingPower,
		this.pluggedIn = false,
		this.electriCity = electriCity
	}
	plugIn(){
		if(this.pluggedIn){
			console.log(`Equipment ${name} is already plugged in`)
			return
		}
		this.electriCity.totalPower += this.consumingPower
		this.pluggedIn=true
		return
	}
	unplug(){
		if(this.pluggedIn){
			this.electriCity.totalPower -= this.consumingPower
			this.pluggedIn=false
			return
		}
		console.log(`Equipment ${name} is already unplugged`)
		return
	}
}

const electricityLine1 = new Electricity("first")
console.log(electricityLine1);
const electricityLine2 = new Electricity("second")
const laptop = new ElectricEquipment("Laptop", 100, electricityLine1)
const mobile = new ElectricEquipment("Mobile",15,electricityLine1)
laptop.plugIn()
laptop.plugIn()
mobile.plugIn()
electricityLine1.print()
laptop.unplug()
electricityLine1.print()
console.log(laptop)