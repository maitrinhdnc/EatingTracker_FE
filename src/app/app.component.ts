import { FactoryTarget } from '@angular/compiler';
import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  email?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.tokenStorageService.subscribe(user => {      
      this.email = user.email})

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {   
      const user = this.tokenStorageService.getUser();
      // console.log('User: ', user)
      this.roles = user.roles;
      if(!this.roles) return;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.email = user.email;
    }

  }


  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
