import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../service/experience.service';
import { TokenService } from '../../service/token.service';
import { Experience } from '../../model/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
  
  experiences: Experience[] = [];

  constructor(private experienceService: ExperienceService, private tokenService: TokenService){}
    
  isLogged = false;

  ngOnInit(): void {
    this.loadExperiences();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }
  }

  public loadExperiences(): void{
    this.experienceService.list().subscribe(data => {
      this.experiences = data; 
    })
  }

  public delete(id?: number): void {
    if (id != undefined) {
      this.experienceService.delete(id).subscribe({
        next: (data) => {
          this.loadExperiences();
        },
        error: (err) => {
          console.error(err);
          alert("No se pudo borrar la experiencia");
        },
        complete: () => {
          console.log("Education deleted successfully");
        }
      });
    }
  }

}
