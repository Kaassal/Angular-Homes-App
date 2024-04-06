import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../app/housing-location/housing-location.component';
import { HousingLocation } from '../app/housing-location';
import { HousingService } from 'src/app/housing.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter (keyup.enter)="onEnter(filter.value)">
        <button class="primary" type="button" (click)="filterResult(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject (HousingService);
  filteredLocationList: HousingLocation [] = [];

  constructor() {
    this.housingService.getAllhousingLocation().then((housingLocationList : HousingLocation[]) =>{
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  };

  filterResult(text: string) {
    //if the search bar is empty, the full list of locations is shown
    if(!text) this.filteredLocationList = this.housingLocationList;

    //Search logic
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  //Function to seach when enter is pressed 
  onEnter(value: string) {
    this.filterResult(value);
  }
}
