import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ApplicationConfig } from '@angular/core';
import { PaymentComponent } from './components/payment/payment.component';
import { AuthGuardService } from './services/guards/auth-guard.service';

export const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'payment', component: PaymentComponent, canActivate:[AuthGuardService]}
];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)]
};

