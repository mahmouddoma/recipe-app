import { Component, OnInit } from '@angular/core';

import { RecipeServeice } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeServeice]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
