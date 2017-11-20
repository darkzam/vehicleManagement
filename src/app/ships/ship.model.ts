

export class Ship{

	plateNum:string;
	brand:string;
	model:string;
	type:string;
	maxSpeed:number;

	constructor(plateNum:string,brand:string,model:string,type:string, maxSpeed:number){
		
		this.plateNum = plateNum;
		this.brand = brand;
		this.model = model;
		this.type = type;
		this.maxSpeed = maxSpeed;
	}
}