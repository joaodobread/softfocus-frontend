import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JwtGuard implements CanActivate {
  constructor(
    private readonly nbAuthService: NbAuthService,
    private readonly router: Router
  ) {}

  async canActivate(): Promise<boolean> {
    const isAuthenticated = await firstValueFrom(
      this.nbAuthService.isAuthenticated()
    );
    if (!isAuthenticated) this.router.navigate(['/']);
    return true;
  }
}
