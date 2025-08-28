import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  enquiryData = {
    name: '',
    location: '',
    email: '',
    phone: ''
  };

  clientNumber: string = '918907654321'; // ✅ Replace with your WhatsApp number

  sendToWhatsApp() {
    const message = encodeURIComponent(
      `📌 New Enquiry\n\n👤 Name: ${this.enquiryData.name}\n📍 Location: ${this.enquiryData.location}\n📧 Email: ${this.enquiryData.email}\n📞 Phone: ${this.enquiryData.phone}`
    );

    const url = `https://wa.me/${this.clientNumber}?text=${message}`;
    window.location.href = url;
  }
}
