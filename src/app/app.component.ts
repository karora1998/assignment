import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

import { AngularFirestore } from '@angular/fire/firestore';

import * as jsPDF from 'jspdf'

import { ItemsService } from './services/item.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('list', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ])
    ])
  ]
})
export class AppComponent {
  title = 'assignment';
  text: string;
  isLoading = false;
  item = {
	name: ''
  }

  @ViewChild('list') list: ElementRef;

  items: Observable<any[]>;

  constructor(private db: AngularFirestore, private itemsService: ItemsService) {}

  ngOnInit() {	
	 this.items = this.db.collection("items").valueChanges();
	 this.items.subscribe(() => this.isLoading = false);
  }

  onSubmit() {
  	this.isLoading = true;
  	this.item.name = this.text;
  	this.itemsService.add(this.item);
  }

  onClickDownload() {
  	let list=this.list.nativeElement;
    let doc = new jsPDF();
    let elementHandlers =
    {
      '#editor':function(element,renderer){
        return true;
      }
    };
    doc.fromHTML(list.innerHTML,15,15,{

      'width':190,
      'elementHandlers': elementHandlers
    });

    doc.save('list.pdf');
  }
}
