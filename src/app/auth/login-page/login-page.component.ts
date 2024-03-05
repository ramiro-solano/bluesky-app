import { NgClass } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [ ReactiveFormsModule, NgClass ],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css'
})

export default class LoginPageComponent implements OnInit{

    public loginForm: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15)])
    });

    private authService = inject(AuthService);

    sendLogin(): void {
        const { email, password } = this.loginForm.value;
        this.authService.login(email, password);
        
    }

    ngOnInit(): void {
        this.authService.checkLogin();
    }
}
