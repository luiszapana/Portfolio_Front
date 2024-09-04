import { Component, OnInit } from '@angular/core';
import { Experience } from '../../model/experience';
import { ExperienceService } from '../../service/experience.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrl: './edit-experience.component.css'
})
export class EditExperienceComponent implements OnInit{
  
  experience: Experience;

  constructor(
    private experienceService: ExperienceService, 
    private activatedRouter: ActivatedRoute,
    private router: Router 
  ){}
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienceService.details(id).subscribe({
      next: (data) => {
        this.experience = data;
      },
      error: (err) => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienceService.update(id, this.experience).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      },
      error: (err) => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    });
  }

}
