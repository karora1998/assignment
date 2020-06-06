import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs'; 

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({providedIn: 'root'})
export class ItemsService {

	items: AngularFirestoreCollection<{name: string}>;

	constructor(private db: AngularFirestore) {
		this.items = db.collection<{name: string}>('items');
	}

	add(item: {name: string}) {
		this.items.add(item);
		console.log(this.items);
	}
}