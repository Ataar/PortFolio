import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Icontact } from '../../module/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit{

  // we are using @ViewChild to:
// 👉 Directly access a native DOM element
// In HTML, to access any element like <input #nameInput> into TS file through ElementRef
  @ViewChild('nameInput') nameInput!:ElementRef<HTMLInputElement>;
  @ViewChild('contactHeading') contactHeading!: ElementRef<HTMLHeadingElement>;
  @ViewChild('emailInput') emailInput!:ElementRef<HTMLInputElement>;
  @ViewChild('messageInput') messageInput!:ElementRef<HTMLInputElement>;


  contactDetails :Icontact []= []
  contactForm!: FormGroup;
  

  
 

  constructor(
  private fb: FormBuilder,
  private contactService : ContactService,
  private router: Router
) {}
  


  ngOnInit(): void {
  this.contactDetails  = this.contactService.getContactDetails()
  this.initForm()   // it is our custom method only that we are using for form creation.

  }
  

  
  //  ngAfterViewInit() Angular ka ek lifecycle hook hai.
  //  Iska matlab hota hai: jab poora HTML view render ho chuka ho, tab ye chalega.
 //  Is hook ka use isliye karte hain kyunki @ViewChild() tab tak undefined rahega jab tak HTML render nahi ho jaata.


  // ngAfterViewInit(): void {
  //   //  You can use DOM methods from nativeElement on the element accessed using ViewChild.
  //   //  if (this.router.url === '/contact') {
  //   //     this.nameInput.nativeElement.focus();
  //   //   }   // 👈 Input pe auto focus
    
  // }

ngAfterViewInit(): void {
  if (this.contactHeading) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Focus only when heading is visible in viewport
            this.nameInput.nativeElement.focus();
            observer.disconnect(); // stop observing after focus
          }
        });
      },
      { threshold: 0.5 } // 50% of heading visible
    );

    observer.observe(this.contactHeading.nativeElement);
  }
}
  initForm(): void {
  this.contactForm = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });
  
}

  //   focusEmail() {
  //   this.emailInput.nativeElement.focus();
  // }


  //   focusmessage() {
  //   this.messageInput.nativeElement.focus();
  // }
   
focusEmail() {
  const name = this.contactForm.get('fullname')?.value.trim();
  if (name.length >= 15) { // yaha min length ka check
    this.emailInput.nativeElement.focus(); 
  }
}

focusMessage() {
  const emailCtrl = this.contactForm.get('email');
  if (emailCtrl?.valid) { // valid email hone par
    this.messageInput.nativeElement.focus();
  }
}


onSubmit() {
  if (this.contactForm.valid) {
    console.log('Message Sent:', this.contactForm.value);
    alert('Thank you! Message sent.');
    this.contactForm.reset();

    // Ye line direct DOM input element ko focus karne ke liye JavaScript ka .focus() method call karti hai.
    // ✅ Only focus if still on contact page
      if (this.router.url === '/contact') {
        // this.nameInput.nativeElement.focus();
      } 
      else {
        // If navigating away, do not focus
        this.router.navigate(['/']);
      }
    
    }
    
  }
}

