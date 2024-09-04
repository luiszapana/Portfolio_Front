import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../service/token.service';


@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent implements OnInit {
  
  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService){}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  login(){
    this.router.navigate(['/login']);
  }

  onLogOut(): void{
    this.tokenService.logout();
    window.location.reload();
  }
}
