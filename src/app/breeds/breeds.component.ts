
import { Component, OnInit } from '@angular/core';
import { Breed } from '../breed';
import { BreedsService } from '../services/breeds.service';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {
  breeds: Breed[] = new Array();

  constructor(private breedsService: BreedsService) { }

  ngOnInit() {
      this.listarBreeds();
  }

    listarBreeds(){
      this.breedsService.listarBreeds().subscribe(
        (breed) => {
        this.breeds = breed.data as Breed[];
      } , err => {
      console.log('Erro, não foi dessa vez!', err);
      })
    }
}
