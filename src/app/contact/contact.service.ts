import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Contact } from './contact';
import { CONTACTS } from './mocking-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Observable<Contact[]> {
    return of(CONTACTS);
  }

  getContact(id: number | string): Observable<Contact> {
    return of(CONTACTS.find((concat) => {
      return concat.id === +id;
    }));
  }
}
