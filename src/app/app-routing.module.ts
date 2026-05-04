import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './shared/components/contact/contact.component';
import { AboutComponent } from './shared/components/about/about.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { SkillsComponent } from './shared/components/skills/skills.component';
import { ProjectsComponent } from './shared/components/projects/projects.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { WorkComponent } from './shared/components/work/work.component';




// const routes: Routes = [
//   { path: '', redirectTo: 'profile', pathMatch: 'full' }, // 👈 default route redirect to hero
//   { path: 'profile', component: DashboardComponent },
//   { path: 'profile', component: HeroComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'work', component: WorkComponent },
//   { path: 'skills', component: SkillsComponent },
//   { path: 'projects', component: ProjectsComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: '**', redirectTo: 'profile' }, // fallback
// ];
  
const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' }, // Default route

  {
    path: 'profile',
    component: DashboardComponent,
    children: [
      { path: 'hero', component: HeroComponent }
    ]
  },

  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },

  { path: '**', redirectTo: 'profile' } // Fallback
];




@NgModule({
  imports: [RouterModule.forRoot(routes,{
     scrollPositionRestoration: 'enabled', // ✅ top pe scroll hoga
     anchorScrolling: 'enabled' ,        
     onSameUrlNavigation: 'reload' 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}






















// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './shared/components/home/home.component';
// import { PostsComponent } from './shared/components/posts/posts.component';
// import { TodosComponent } from './shared/components/todos/todos.component';
// import { PostComponent } from './shared/components/post/post.component';
// import { PostFormComponent } from './shared/components/post-form/post-form.component';

// const routes: Routes = [ 

// {
//   path:'home',
//   component:HomeComponent
// },

// {
//   path:'',  // if the path is empty so use redirectTo property
//   redirectTo:'home',
//   pathMatch:'full'
// },

// {
//   path:'posts',
//   component:PostsComponent
// },

// {
//   path:'posts/addPost',
//   component:PostFormComponent
// },

// {
//    path:'posts/:userId',
//    component:PostComponent
// },

// {
//    path:'posts/:userId/edit',
//    component:PostFormComponent
// },
// {
//   path:'todos',
//   component:TodosComponent
// },


//  ];  
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { 

  

// }

