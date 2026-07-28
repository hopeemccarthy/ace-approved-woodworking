import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ItemListing } from "../item-listing/item-listing.js";
import { ItemsList } from "../ItemsCatelog.js";

@Component({
  selector: "app-contact",
  imports: [ReactiveFormsModule],
  templateUrl: "./contact.html",
  styleUrl: "./contact.scss",
})
export class Contact {
  form = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    itemId: new FormControl(""),
    message: new FormControl(""),
  });

  itemOptions = ItemsList.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });

  onSubmit() {
    console.log(this.form.value);
    this.form.reset();

    // TODO 
    // * validate form
    // * show success notification
  }
}
