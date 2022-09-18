import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      (err: HttpErrorResponse) => {
        console.log('Home error: ',err)
      }
    );
  }
  
}
