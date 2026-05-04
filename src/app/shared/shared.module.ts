// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeatureComponent } from './components/feature/feature.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ConfirmDialogComponent,
   DashboardComponent,
   FeatureComponent,
   PricingComponent,
   ContactComponent,
   HeroComponent,
   AboutComponent,
   WorkComponent,
   SkillsComponent,
   ProjectsComponent,
   FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
    
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    NavbarComponent,
    DashboardComponent,
   FooterComponent
  ]
})
export class SharedModule {}
