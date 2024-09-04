import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent implements OnInit{

  

  constructor(private router: Router, private tokenService: TokenService){  }
  
  ngOnInit(): void {
    
  }

  login(){
    this.router.navigate(['/login'])
  }
}
