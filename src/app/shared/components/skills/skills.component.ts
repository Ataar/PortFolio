import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  iconUrl: string = 'https://cdn-icons-png.flaticon.com/512/665/665939.png';

  technicalSkills: string[] = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular 14',
    'Angular Material', 'SASS', 'Bootstrap4', 'Ajax', 'jQuery',
    'Flex', 'Html5', 'GIT', 'RxJs', 'Media Query'
  ];

  professionalSkills: string[] = [
    'Creativity', 'Communication', 'Problem Solving', 'Teamwork'
  ];
}





