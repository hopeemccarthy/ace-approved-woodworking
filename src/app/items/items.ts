import { Component, inject } from '@angular/core';
import { ItemsService } from '../items.service.js';
import { ItemListingInfo } from '../ItemListing.js';
import { ItemListing } from '../item-listing/item-listing.js';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-items',
  imports: [ItemListing],
  templateUrl: './items.html',
  styleUrl: './items.scss',
})
export class Items {

  route: ActivatedRoute = inject(ActivatedRoute);

  itemsService: ItemsService = inject(ItemsService);
  itemListings: ItemListingInfo[] = [];

  constructor(private router: Router) {
    router.events.subscribe((val) => {
        if (val) {
            const itemCategory = this.route.snapshot.params['category'];
            this.itemListings = this.itemsService.getItemsByCategory(itemCategory);
        }
    });
  }


}
