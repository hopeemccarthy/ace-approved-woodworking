import {Injectable} from '@angular/core';
import {HousingLocationInfo} from './housinglocation.js';
import { ItemListingInfo } from './ItemListing.js';
import { ItemsList } from './ItemsCatelog.js';
import { Category } from './constants.js';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {

  url = 'http://localhost:3000/items';

  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  protected itemsList: ItemListingInfo[] = ItemsList;
  getAllItems(): ItemListingInfo[] {
    return this.itemsList;
  }
  getItemsByCategory(category: string): ItemListingInfo[] {
    return category ? this.itemsList.filter((item) => item.category === Category[category]) : this.itemsList;
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}