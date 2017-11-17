
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Bike } from './bike.model';

@Component({
	selector: 'app-bike-component',
	templateUrl: './bike.component.html',
	styleUrls: ['./bike.component.css']
})

export class BikeComponent {

	bikes:Bike[];

	regNum:string ='';	// first character must be a capital letter
	brand:string = '';
	model:string = '';
	gearNum:string = ''; //max 2 
	type:string = ''; // one type between: road bike, mountain bike, BMX

	msg:boolean = false;
	status:string = '';

	constructor(){}

	createBike(){

	}

	validateRegNum(regNum:string):boolean{
		
		//return true if there's an error, false otherwise
		console.log(regNum);
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


	setErrorMsg(){

		let param = this.regNum;

		this.msg = this.validateRegNum(param.trim());	


	}

}