import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  ngOnInit(): void {
  }
  //  scrollToSection(id: string) {
  //   const el = document.getElementById(id);
  //   if (el) {
  //     el.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }
}
