import { Fact } from './../fact';
import { Component, OnInit } from '@angular/core';
import { FactService } from '../services/fact.service';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {
  fact: Fact = new Array();

  constructor(private factService: FactService) { }
  ngOnInit(): void {
    this.factService
      .listarfacts()
      .subscribe(res => this.fact = res)
  }



}

