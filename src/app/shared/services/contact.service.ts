import { Injectable } from '@angular/core';
import { Icontact } from '../module/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactDetails : Array<Icontact> = [
    {
      label: 'Address',
      icon: 'fa-solid fa-location-dot',
      value: `Nai Abadi Colony,\nAshok Nagar,\nUdgir, Latur, Maharashtra\n413517`,
      isLink: false
    },
    {
      label: 'Phone',
      icon: 'fa-solid fa-phone',
      value: '+91 7058804143',
      isLink: true,
      href: 'tel:+917058804143'
    },
    {
      label: 'Email',
      icon: 'fa-regular fa-envelope',
      value: 'mateenataar07@gmail.com',
      isLink: true,
      href: 'mailto:mateenataar07@gmail.com'
    }
  ];
  constructor() { }

   getContactDetails() {
    return this.contactDetails;
  }
}
