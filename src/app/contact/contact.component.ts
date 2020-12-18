import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Contact } from './contact';
import { ContactService } from './contact.service';
import { GreetingService } from '../greeting/greeting.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  contacts: Contact[];
  msg = "Loading contacts...";
  userName = "";
  contactForm = this.formBuilder.group({
    name: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private greetingService: GreetingService
  ) { 
    this.userName = this.greetingService.userName;
  }

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm() {
    this.contactService.getContacts().subscribe((contacts) => {
      this.msg = "";
      this.contacts = contacts;
      this.contact = contacts[0];
      this.contactForm.get('name').setValue(this.contact.name);
    });
  }

  next() {
    let index = 1 + this.contacts.indexOf(this.contact);
    if (index >= this.contacts.length) {
      index = 0;
    }
    this.contact = this.contacts[index];
  }

  onSubmit() {
    const newName = this.contactForm.get('name').value.trim();
    this.displayMessage('Saved ' + newName);
    this.contact = {...this.contact, name: newName, mail: `${newName}@test.com`};
  }

  newContact() {
    this.displayMessage('New Contact');
    this.contactForm.get('name').setValue('');
    const lastContact = this.contacts.slice(-1)[0];
    this.contact = {id: lastContact.id + 1, name: '', mail: ''};
    this.contacts.push(this.contact);
  }

  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => this.msg = "", 1500);
  }

}
