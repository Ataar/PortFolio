// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-footer',
//   templateUrl: './footer.component.html',
//   styleUrls: ['./footer.component.scss']
// })
// export class FooterComponent {
//   @Input() socialLinks: { icon: string; url: string }[] = [];
//   @Input() copyrightText: string = '';
// }

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() socialLinks: any[] = [];
  @Input() copyrightText: string = '';
}
