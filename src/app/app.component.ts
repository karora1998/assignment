import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';

import { ItemsService } from './services/item.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  text: string;
  item = {
	name: ''
  }

  items: Observable<any[]>;

  constructor(private db: AngularFirestore, private itemsService: ItemsService) {}

  ngOnInit() {	
	 this.items = this.db.collection("items").valueChanges();
  }

  onSubmit() {
  	this.item.name = this.text;
  	this.itemsService.add(this.item);
  }
}
