
export class Motorcycle{

	plateNum:string;
	brand:string;
	model:string;
	type:string;
	motor:number;

	constructor(plateNum:string,brand:string,model:string,type:string,motor:number){
		
		this.plateNum = plateNum;
		this.brand = brand;
		this.model = model;
		this.type = type;
		this.motor = motor;
	}
}