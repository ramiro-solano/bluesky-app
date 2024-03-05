import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { SidebarComponent } from '@shared/components/sidebar/sidebar.component';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [NavbarComponent, SidebarComponent, RouterOutlet],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.css'
})
export default class HomePageComponent implements OnInit{
	private authService = inject(AuthService);



	
	ngOnInit(): void {
		this.authService.checkLogin();
	}
}
