import { Component, OnInit } from '@angular/core';
import { Education } from '../../model/education';
import { EducationService } from '../../service/education.service';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  
  educations: Education[] = [];

  constructor(private educationService: EducationService, private tokenService: TokenService){}
    
  isLogged = false;

  ngOnInit(): void {
    this.loadEducation();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }
  }

  public loadEducation(): void{
    this.educationService.list().subscribe(data => {
      this.educations = data; 
    })
  }

  public delete(id?: number): void {
    if (id != undefined) {
      this.educationService.delete(id).subscribe({
        next: (data) => {
          this.loadEducation();
        },
        error: (err) => {
          console.error(err);
          alert("No se pudo borrar la educación");
        },
        complete: () => {
          console.log("Education deleted successfully");
        }
      });
    }
  }
}