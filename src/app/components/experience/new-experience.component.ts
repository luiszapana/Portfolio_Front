import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../service/experience.service';
import { Router } from '@angular/router';
import { Experience } from '../../model/experience';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrl: './new-experience.component.css'
})
export class NewExperienceComponent implements OnInit{
  
  name: string = '';
  description: string = '';

  constructor(private experienceService: ExperienceService, private router: Router){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onCreate(): void {
    const experience = new Experience(this.name, this.description);
    this.experienceService.save(experience).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })

  }

}
