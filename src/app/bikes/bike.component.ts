
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Bike } from './bike.model';

@Component({
	selector: 'app-bike-component',
	templateUrl: './bike.component.html',
	styleUrls: ['./bike.component.css']
})

export class BikeComponent {

	bikes:Bike[] = [];

	regNum:string ='';	// first character must be a capital letter
	brand:string = '';
	model:string = '';
	gearNum:string = ''; //max 2
	type:string = '';

	types:string[] = ['Road', 'Mountain', 'BMX' ]; // one type between: road bike, mountain bike, BMX

	msg:boolean = false;
	status:string = '';

	constructor(){}

	createBike(){
		//first validate all data
		this.setErrorMsg(1);
		this.setErrorMsg(2);
		this.setErrorMsg(3);
		this.setErrorMsg(4);
		//if there's not error create Bike with params
		if(!this.msg){

			let bike: Bike = new Bike(this.regNum, this.brand, this.model, +this.gearNum, this.types[+this.type]);
			this.bikes.push(bike),
			console.log("succes");
		}

	}

	validateRegNum(regNum:string):boolean{

		//return true if there's an error, false otherwise
		//console.log(regNum);
		if (regNum === '') {
			return false;
		}

		//checking first char of the string
		let firstChar = regNum.charAt(0);

		if( (firstChar === firstChar.toUpperCase() && firstChar === firstChar.toLowerCase())|| (firstChar !== firstChar.toUpperCase())){
			// it is true when string is a symbol
			//OR it is tru when string is not a capital letter
			this.status = "Registration Number: It must begin with a Capital Letter";
			return true;
		}

		//now checking for the required string size

		if ( regNum.length !== 10){
			this.status = "Registration Number: Requires 10 Characters";
			return true;
		}

		//if the first char is a valid char Capital Letter
		// then it checks the rest of the string

		if ((regNum.slice(1).charAt(0) === " ")||(isNaN(+regNum.slice(1)))) {
			// it is true when uf the first char is a space
			//OR
			//it is true when the string contains a char +"324B" +"A234" +"23f24"
			//it is true when the string contains spaces in the middle +"234 34"
			//it is false when the rest of the string is a number +"3435345"

			this.status = "Registration Number: Capital Letter must be followed by a valid number";

			return true;

		}

		return false;
	}

	validateGearNum(gearNum:string):boolean{

		if (gearNum === '') {
			return false;
		}

		if (gearNum.match(/^[0-9]+$/)==null ) {

			this.status = "Gear Number: must be a valid number";
			return true;
		}

		if ( gearNum.length > 2 ){
			this.status = "Gear Number: max 2 digits";
			return true;
		}

		return false;

	}


	setErrorMsg(option:number){

		switch (option) {
			case 1:
			{
				let param = this.regNum;
				this.msg = this.validateRegNum(param.trim());
				break;
			}

			case 2:
			{
				let param = this.gearNum;
				this.msg = this.validateGearNum(param.trim());
				break;
			}

			case 3:
			{
				let param = this.type;
				this.msg = this.validateType(param.trim());
				break;
			}

			default:
					//validate if fields contain null strings
					this.msg = false;
					this.msg = (this.regNum === '' || this.brand === '' || this.model === '' || this.gearNum === '' || this.type === '');
					this.status = (this.msg) ? "All fields must be filled" : '';

					console.log(this.msg + " " + this.status);

			break;
		}

	}

	//checks if option of type is correct

	validateType(option:string):boolean{

		//console.log("option "+ option);

		if( (+option < 0 ) || (+option > this.types.length-1)){
			this.status = "Type: option not available";
			return true;
		}

		return false;
	}


}
