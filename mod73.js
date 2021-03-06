function print(obj){
	for(let key in obj){
		if(obj.hasOwnProperty(key)){
			console.log(key,obj[key])
		}
	}
	return
}

const prot={
	name:"andrey",
}

const object = Object.create(prot)
object.age = 20
print(object)


function hasProperty(str, obj){
	for(let key in obj){
		if(key==str){
			return true
		}
	}
	return false
}

console.log(hasProperty("name", object))

function create(){
	const obj = {};
	console.log(obj)
}
 create()