import { Component, input } from '@angular/core';
import { ItemListingInfo } from '../ItemListing.js';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-item-listing',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './item-listing.html',
  styleUrl: './item-listing.scss',
})
export class ItemListing {
  itemListing = input.required<ItemListingInfo>();

}
