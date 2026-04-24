import { Component, input } from '@angular/core';
import { ItemListingInfo } from '../ItemListing.js';

@Component({
  selector: 'app-item-listing',
  imports: [],
  templateUrl: './item-listing.html',
  styleUrl: './item-listing.scss',
})
export class ItemListing {
  itemListing = input.required<ItemListingInfo>();

}
