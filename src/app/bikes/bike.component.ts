
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

	constructor(){}

	createBike(){

	}

	validateRegNum(regNum:string):boolean{
		
	//return true if there's an error, false otherwise
	
		 if (regNum === '') {
		 	return false;
		 }
		//checking first char of the string
		let firstChar = regNum.charAt(0);

		if(isNaN(+firstChar)){
			//it's a valid char 'A''B'etc or invalid char ' ' etc 
			//need to check for invalid chars
			if(firstChar === ','){

				return true;
			}
		}
		else {
			//firstchar is a number, or result of +"" or + " "
			return true

		}

		//if the first char is a valid char, then it checks the rest of the string

		if (isNaN(+regNum.slice(1))) {
			//it is true when the rest of the string contains a char +"324B"
			//or it is true when the string contains spaces in the middle +"234 34"

			return true;

		}
		else if (regNum.slice(1).charAt(0) === " ") {
			//it is false when the rest of the string is a number +"3435345" 
			//now we check for the +"  324234" case when the first char is a space
			return true;
		}
​

		return false;
	}


	validateRegNum2(){

		//this.regNum = this.regNum.trim();

		let param = this.regNum;

		this.msg = this.validateRegNum(param);	


	}

}