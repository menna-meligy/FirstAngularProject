import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})




export class ShoppingListComponent {


Ingredient:string[];

  constructor() {
    this.Ingredient=["tomato : 5" , "onions: 1","carrot:2", "oil: spoil" ]
   }

}

