import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
recipes= [""];
recipeName:string;
recipeDescription:string;
imgPath:string[];

  constructor() {

    this.recipes=[ "nudels " , " tuna" , "broccli" , "rice" , "chicken"];
    this.recipeName= "";
    this.recipeDescription= "";
    this.imgPath=["https://img.freepik.com/free-psd/recipe-notebook-pasta-arrangement_23-2148591861.jpg?size=626&ext=jpg" ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf130jzLtpTG0nAc1EO3z_fNuTHbf_nOE5kQ&usqp=CAU"];
   }

  ngOnInit(): void {
  }


}
