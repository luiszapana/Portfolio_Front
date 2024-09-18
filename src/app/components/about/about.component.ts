import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person.model';
import { PersonService } from '../../service/person.service';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  person: Person = new Person("defaultName", "defaultLastName", "defaultDescription", "");
  
  constructor(public personService: PersonService, private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void {
    this.loadPerson();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }
  }

  loadPerson(){
    this.personService.detail(1).subscribe(
      data => {this.person = data}
    )
  }
}
