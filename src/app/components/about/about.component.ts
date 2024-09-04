import { Component, OnInit } from '@angular/core';
import { person } from '../../model/person.model';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  person: person = new person("defaultName", "defaultLastName", "defaultImageUrl");
  
  constructor(public personService: PersonService){}

  ngOnInit(): void {
    this.personService.getPerson().subscribe(data => {
      this.person = data;
    });    
  }
}
