
import { Injectable } from '@angular/core';

import { Bike } from '../bikes/bike.model';

@Injectable()

export class DataService{

	private bikes: Bike [] = [];

	constructor(){}

	public getBikes(){

		return this.bikes;
	}

	public addBike(bike:Bike):boolean{

		//first we have to check for duplicates;
	/*	if(this.bikes.indexOf(bike) === -1 && this.bikes.length>0){

			return false;
		}
		*/
		let result= false;

		if (this.bikes.length>0) {
			// code...

			this.bikes.forEach(function(element,index,data){


				result = (element.regNum === bike.regNum) &&
				(element.brand === bike.brand) &&
				(element.model === bike.model) &&
				(element.type === bike.type) &&
				(element.gearNum === bike.gearNum);

			});

		}

		console.log(result);
		console.log("created");
		

		//erorr when validation fails

		if (!result) {
			// code...
			this.bikes.push(bike);
		}

		return result;
	}


}