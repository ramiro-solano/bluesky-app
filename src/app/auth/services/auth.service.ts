import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private router:Router = inject(Router);


    login(email: string, password: string): void {
        console.log(email, password);
        if(email === 'test@test.com' && password === '12345678') {
            localStorage.setItem('auth', 'true');
            this.router.navigate(['home']);
        }
    }

    checkLogin(): void {
        localStorage.getItem('auth') ?
            this.router.navigate(['home']): this.router.navigate(['auth']);
    }
    
}