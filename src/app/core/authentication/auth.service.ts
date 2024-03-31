import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;

  constructor(
    public router: Router,
    public ngZone: NgZone,
    private message: NzMessageService,
  ) {

  }

  AdminSignIn(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      const adminUser = {
        uid: 'admin',
        email: 'admin@example.com', 
        displayName: 'Admin',
      };

      this.router.navigate(['features']);
      localStorage.setItem('user', JSON.stringify(adminUser));
    } else {
      this.message.create('error', 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง');
    }
  }

  SignOut() {
    this.router.navigate(['login']);
    localStorage.removeItem('user');
  }

}
