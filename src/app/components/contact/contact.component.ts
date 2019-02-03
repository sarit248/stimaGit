import { Component, OnInit } from '@angular/core';
import { ContactUs } from '../../models/contactUs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

    public contactUs: ContactUs = new ContactUs();
    
        public send(): void {
            alert(`
            First Name: ${this.contactUs.firstName}
            Last Name: ${this.contactUs.lastName}
            Email: ${this.contactUs.email}
            Message: ${this.contactUs.message}`);
        }
    }

    


