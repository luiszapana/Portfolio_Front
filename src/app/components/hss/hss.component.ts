import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../service/skill.service';
import { TokenService } from '../../service/token.service';
import { Skill } from '../../model/skill';

@Component({
  selector: 'app-hss',
  templateUrl: './hss.component.html',
  styleUrl: './hss.component.css'
})
export class HssComponent implements OnInit {
  
  skills: Skill[] = [];

  constructor(private skillService: SkillService, private tokenService: TokenService){}
    
  isLogged = false;

  ngOnInit(): void {
    this.loadSkills();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }
  }

  public loadSkills(): void{
    this.skillService.list().subscribe(data => {
      this.skills = data; 
    })
  }

  public delete(id?: number): void {
    if (id != undefined) {
      this.skillService.delete(id).subscribe({
        next: (data) => {
          this.loadSkills();
        },
        error: (err) => {
          console.error(err);
          alert("No se pudo borrar el skill");
        },
        complete: () => {
          console.log("Skill deleted successfully");
        }
      });
    }
  }
}
