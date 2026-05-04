import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Products',
      link: 'https://service-ui-7.vercel.app/home',
      image: 'https://i.pinimg.com/736x/d9/c9/ca/d9c9ca3071f052121f8c70ccd8b0e89b.jpg',
      description: 'User Products friendly with discountPercentage , rating , stock , discription'
    },
    {
      title: 'Single User Profile',
      link: 'https://user-profile-as-whatsapp.vercel.app/login',
      image: 'https://i.pinimg.com/1200x/ca/b5/11/cab5118acdab79c01b5a56c0b536afba.jpg',
      description: 'A simple and easy single user profile like a whatsappp in angular. by hovering on profile picture you can change photo , upload new photo also can remove photo and take a live photo for user profile.'
    },
    {
      title: 'Simple Todo Task',
      link: 'https://services-todo-task-ui-3.vercel.app/services',
      image: 'https://i.pinimg.com/1200x/f7/19/0f/f7190f6b868faace1e417155d269cf9d.jpg',
      description: 'It is simple todo list where we can show lists or any product with Edit and Update Operation at the same input place. '
    },
    {
      title: 'Netflix Clone',
      link: 'https://netflix-clone-one-mauve.vercel.app/',
      image: 'https://wallpapers.com/images/hd/netflix-background-6eijmcazwfrb9u6w.jpg',
      description: 'Built with HTML, CSS, JavaScript, jQuery, Owl-Carousel, and TMDB API for trending movie data.'
    },
    {
      title: 'Mobile Products',
      link: 'https://flipkart-model.vercel.app/#',
      image: 'https://i.pinimg.com/1200x/5a/c7/80/5ac78039c906dc611e582935923f3916.jpg',
      description: 'These products are displayed with rating , Reviews Count , totale price and also with details , description. so many features to male this type of pages we used Owel Carasoul , media queries , angular material etc.'
    },
    {
      title: 'Mat Dailog With Wild Route',
      link: 'https://10-mat-dialog-setup.vercel.app/not-found',
      image: 'https://i.pinimg.com/736x/2f/7a/44/2f7a445b4b0694643d0176a2dd2e07b9.jpg',
      description: 'this is an angular mat dialog with wild route and here crud operation are aslo used like Create , Edit , Update , Delete with snackbars'
    },
    {
      title: 'Bootstrap Layout',
      link: 'https://boot4-layouts.vercel.app/index.html',
      image: 'https://plus.unsplash.com/premium_photo-1663931932716-3086b87f2ed1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Used bootstrap classes for a layout with media queries.'
    },
    {
      title: 'SASS Layout',
      link: 'https://nature-layout-sass.vercel.app/',
      image: 'https://i.pinimg.com/736x/3a/fd/c7/3afdc7f45588cdba09cd92d90afa5b96.jpg',
      description: 'Layout created using SASS, animations and fully responsive design.'
    },
    {
      title: 'User professions',
      link: 'https://users-routing-setup.vercel.app/users',
      image: 'https://i.pinimg.com/1200x/ee/20/20/ee2020d431ff4fde2069ee5b4861d5f8.jpg',
      description: 'Just Incraese Skills and Show your Profession.'
    },
    {
      title: 'Cards Using JS CallBack',
      link: 'https://callback-function-1.vercel.app/',
      image: 'https://i.pinimg.com/1200x/86/e4/13/86e4134e1d8d833f23a31c96627bdfb0.jpg',
      description: 'An array of object data is dynamically used with a callback function in JavaScript.'
    },
    {
      title: 'Crud Task Using Localstorage',
      link: 'https://todo-student-task-using-services.vercel.app/',
      image: 'https://www.shutterstock.com/image-vector/crud-create-read-update-delete-600nw-2491185533.jpg',
      description: 'All the Crud Operations are used here like Create , Edit and Update and Delete in angular.'
    },
    {
      title: 'Currency Converter',
      link: 'https://currencycode.vercel.app/',
      image: 'https://media.istockphoto.com/id/2137618588/photo/indian-rupee-symbol-with-map-on-stock-market-chart-graph-background.jpg?s=1024x1024&w=is&k=20&c=Dfsgd8dQBmBeDyXOvp2gLAGJzV7bXD35AY4VjQOYgPg=',
      description: 'Built a real-time currency converter app using JavaScript.'
    }
  ];
}
