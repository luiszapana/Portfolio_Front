import { Component, OnInit } from '@angular/core';
import { EducationService } from '../../service/education.service';
import { Router } from '@angular/router';
import { Education } from '../../model/education';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrl: './new-education.component.css'
})
export class NewEducationComponent implements OnInit{
  
  name: string = '';
  description: string = '';

  constructor(private educationService: EducationService, private router: Router){

  }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const education = new Education(this.name, this.description);
    this.educationService.save(education).subscribe({
      next: (data) => {
        alert("Educación añadida");
        this.router.navigate(['']);
      },
      error: (err) => {
        alert("Falló");
        this.router.navigate(['']);
      }
    });
  }
}
