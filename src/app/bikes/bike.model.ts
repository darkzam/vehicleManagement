
export class Bike {

	regNum:string;	// first character must be a capital letter
	brand:string;
	model:string;
	gearNum:number; //max 2 
	type:string; // one type between: road bike, mountain bike, BMX

	constructor(regNum:string,brand:string,model:string,gearNum:number,type:string){

		this.regNum = regNum;
		this.brand = brand;
		this.model = model;
		this.gearNum = gearNum;
		this.type = type;

	}
}