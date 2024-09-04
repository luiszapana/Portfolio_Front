import { Component, OnInit } from '@angular/core';
import { Education } from '../../model/education';
import { EducationService } from '../../service/education.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrl: './edit-education.component.css'
})
export class EditEducationComponent implements OnInit{
  
  education: Education;

  constructor(
    private educationService: EducationService, 
    private activatedRouter: ActivatedRoute,
    private router: Router 
  ){}
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educationService.details(id).subscribe({
      next: (data) => {
        this.education = data;
      },
      error: (err) => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    });
  }
  
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educationService.update(id, this.education).subscribe({
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
