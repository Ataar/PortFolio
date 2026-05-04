
import { Component, HostListener, OnInit } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    Aos.init();
  }
 
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const upBtn = document.getElementById('upbtn');
   if (window.pageYOffset > 5000) {

      upBtn?.classList.add('show');
    } else {
      upBtn?.classList.remove('show');
    }
  }
   scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

    socialIcons = [
    {
      icon: 'fa-brands fa-github',
      url: 'https://github.com/Ataar'
    },
    {
      icon: 'vercel-icon', // Custom class for Vercel
      url: 'https://vercel.com/mateens-projects-2e936086' // change to your actual Vercel URL
    }
  ];

  copyright = 'Copyright © Mateen 2025. All Rights Reserved.';
}

