
export class Car{

	plateNum:string;
	brand:string;
	model:string;
	type:string;
	motor:number;
	maxSpeed:number;

	constructor(plateNum:string,brand:string,model:string,type:string,motor:number, maxSpeed:number){
		
		this.plateNum = plateNum;
		this.brand = brand;
		this.model = model;
		this.type = type;
		this.motor = motor;
		this.maxSpeed = maxSpeed;
	}
}