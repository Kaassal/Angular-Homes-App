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
      <form (ngSubmit)="onSubmit(filter.value, $event)">
        <input type="text" placeholder="Filter by city" #filter (keydown.enter)="onEnter(filter.value, $event)">
        <button class="primary" type="submit">Search</button>
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
  filteredLocationList: HousingLocation[] = [];

  constructor(private housingService: HousingService) {
    this.housingService.getAllhousingLocation().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResult(text: string) {
    //if the search bar is empty, the full list of locations is shown
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    //Search logic
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  //Function to search when enter is pressed 
  onEnter(value: string, event: any) {
    event.preventDefault(); // Prevent form submission
    this.filterResult(value);
  }

  //Function to handle form submission
  onSubmit(value: string, event: any) {
    event.preventDefault(); // Prevent form submission
    this.filterResult(value);
  }
}
