import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }
    url = 'http://localhost:3000/locations'


  async getAllhousingLocation() : Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number):Promise <HousingLocation | undefined> {
    const data = await fetch (`${this.url}/${id}`);
    return await data.json() ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName} lastName: ${lastName} email: ${email}.`);
    //This is a placeholder function, a way to retrieve data will be implemented soon
  }
}

  