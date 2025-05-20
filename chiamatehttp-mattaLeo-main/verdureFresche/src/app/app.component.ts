import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vegetable } from './vegetables.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VegetableListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'verdureFresche';
  vegetablesList!: Vegetable[]
  o!: Observable<Vegetable[]> 
  loading: boolean = false

  constructor(public http: HttpClient){}

  makeRequest(){
    this.loading = true
    this.o = this.http.get<Vegetable[]>("https://my-json-server.typicode.com/malizia-g/fine_anno_exp/verdure")
    this.o.subscribe(data => this.getData(data))
  }

  getData(d: Vegetable[]){
    this.vegetablesList = d
    console.log(this.vegetablesList)
    this.loading = false
  }

  ngOnInit(): void {
    this.makeRequest()
  }
}
