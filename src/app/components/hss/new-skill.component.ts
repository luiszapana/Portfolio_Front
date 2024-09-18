import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../service/skill.service';
import { Router } from '@angular/router';
import { Skill } from '../../model/skill';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrl: './new-skill.component.css'
})
export class NewSkillComponent implements OnInit{
  
  name: string;
  percentage: number;

  constructor(private skillService: SkillService, private router: Router){

  }

  ngOnInit(): void {}

  onCreate(): void {
    const skill = new Skill(this.name, this.percentage);
    this.skillService.save(skill).subscribe({
      next: (data) => {
        alert("Skill añadido");
        this.router.navigate(['']);
      },
      error: (err) => {
        alert("Falló la creación del skill");
        this.router.navigate(['']);
      }
    });
  }
}
