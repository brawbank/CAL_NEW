import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  isCollapsed = false;
  data: any
  confirmModal?: NzModalRef;
  constructor(
    public authService: AuthService, private modal: NzModalService
  ) {

  }
  ngOnInit(): void {

  }

  // signOut() {
  //   this.authService.SignOut();
  // }

  signOut(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'ต้องการออกจากระบบใช่หรือไม่?',
      nzOnOk: () => this.authService.SignOut()})
  }
}
