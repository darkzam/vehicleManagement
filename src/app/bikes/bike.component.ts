
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Bike } from './bike.model';

@Component({
	selector: 'app-bike-component',
	templateUrl: './bike.component.html',
	styleUrls: ['./bike.component.css']
})

export class BikeComponent implements OnInit {

	bikes:Bike[] = [];

	regNum:string ='';	// first character must be a capital letter
	brand:string = '';
	model:string = '';
	gearNum:string = ''; //max 2
	type:string = '';

	types:string[] = ['Road', 'Mountain', 'BMX' ]; 
	// one type between: road bike, mountain bike, BMX
	errors:boolean[] = [false,false,false,false,false];
	errorStatus:string [] = ['','','','',''];

	constructor(){}

	ngOnInit(){
	}

	createBike(){
		//first validate all data
		this.setErrorMsg(1,true);
		console.log("Check Regnum " + this.errors);
		this.setErrorMsg(2,true);
		console.log("Check GearNum " + this.errors);
		this.setErrorMsg(3,true);
		console.log("Check Type " + this.errors);
		this.setErrorMsg(4,true);
		this.setErrorMsg(5,true);
		console.log("Check null fields " + this.errors);
		//if there's not error create Bike with params
		if(!this.validateErrors()){

			let bike: Bike = new Bike(this.regNum, this.brand, this.model, +this.gearNum, this.types[+this.type]);
			this.bikes.push(bike),
			console.log("succes");
		}

	}

	validateErrors():boolean{

		let result:boolean = false;

		this.errors.forEach( function(element,index,errors)
		{
			result = result || errors[index];
		});

		return result;

	}

	validateRegNum(regNum:string):boolean{

		//return true if there's an error, false otherwise
		//checking first char of the string
		let firstChar = regNum.charAt(0);

		if( (firstChar === firstChar.toUpperCase() && firstChar === firstChar.toLowerCase())|| (firstChar !== firstChar.toUpperCase())){
			// it is true when string is a symbol
			//OR it is tru when string is not a capital letter
			this.errorStatus[0] = "Registration Number: It must begin with a Capital Letter";
			return true;
		}

		//now checking for the required string size

		if ( regNum.length !== 10){
			this.errorStatus[0] = "Registration Number: Requires 10 Characters";
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

			this.errorStatus[0] = "Registration Number: Capital Letter must be followed by a valid number";

			return true;

		}

		this.errorStatus[0] = '';
		return false;
	}

	validateGearNum(gearNum:string):boolean{

		if (gearNum.match(/^[0-9]+$/)==null ) {

			this.errorStatus[1] = "Gear Number: must be a valid number";
			return true;
		}

		if ( gearNum.length > 2 ){
			this.errorStatus[1] = "Gear Number: max 2 digits";
			return true;
		}

		this.errorStatus[1]= '';

		return false;

	}

	//checks if option of type is correct

	validateType(option:string):boolean{

		if( (+option < 0 ) || (+option > this.types.length-1)){
			this.errorStatus[2] = "Type: option not available";
			return true;
		}

		this.errorStatus[2]= '';
		return false;
	}

	setErrorMsg(option:number, btnPushed:boolean = false){

		switch (option) {
			case 1:
			{
				let param = this.regNum;
				this.errors[0] = (param)? this.validateRegNum(param.trim()):false||btnPushed;
				this.errorStatus[0] = (btnPushed && !param)? "Registration Number: must be filled" :this.errorStatus[0]; 
				break;
			}

			case 2:
			{
				let param = this.gearNum;
				this.errors[1]= (param)? this.validateGearNum(param.trim()):false||btnPushed;
				this.errorStatus[1] = (btnPushed && !param)? "Gear Number: must be filled" :this.errorStatus[1]; 
				break;
			}

			case 3:
			{
				let param = this.type;
				this.errors[2]= (param)? this.validateType(param.trim()):false||btnPushed;
				this.errorStatus[2] = (btnPushed && !param)? "Type: must be filled" :this.errorStatus[2]; 
				break;
			}

			case 4:
			//validate if brand and model fields contain null strings
			{	
				this.errors[3] = (this.brand)? false :true && btnPushed;
				this.errorStatus[3] = (this.errors[3])? "Brand: must be filled" : '' ; 
				break;
			}

			case 5:
			{
				this.errors[4] = (this.model)? false : true && btnPushed;
				this.errorStatus[4] = (this.errors[4])? "Model: must be filled" : '' ; 
				break;
			}	

		}

	}

}
