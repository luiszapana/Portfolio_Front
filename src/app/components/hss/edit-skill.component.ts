import { Component, OnInit } from '@angular/core';
import { Skill } from '../../model/skill';
import { SkillService } from '../../service/skill.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrl: './edit-skill.component.css'
})
export class EditSkillComponent implements OnInit{
  
  skill: Skill = null;

  constructor(
    private skillService: SkillService, 
    private activatedRouter: ActivatedRoute,
    private router: Router 
  ){}
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.detail(id).subscribe({
      next: (data) => {
        this.skill = data;
      },
      error: (err) => {
        alert("Error al modificar skill");
        this.router.navigate(['']);
      }
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.update(id, this.skill).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      },
      error: (err) => {
        alert("Error al modificar skill");
        this.router.navigate(['']);
      }
    });
  }

}
