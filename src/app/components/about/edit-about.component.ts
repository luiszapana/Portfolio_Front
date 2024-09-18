import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person.model';
import { PersonService } from '../../service/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../../service/image.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrl: './edit-about.component.css'
})
export class EditAboutComponent implements OnInit{
  
  person: Person = null;

  constructor(
    private personService: PersonService, 
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService
  ){}
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personService.detail(id).subscribe({
      next: (data) => {
        this.person = data;
      },
      error: (err) => {
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    });
  }
  
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.person.img = this.imageService.url;
    this.personService.update(id, this.person).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      },
      error: (err) => {
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    });
  }

  uploadImage($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name);
  }
}