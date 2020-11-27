<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

=======
import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
>>>>>>> giancarlo
@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {

<<<<<<< HEAD
=======
  // mobileQuery: MediaQueryList;

  // // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  // fillerNav = [
  //   {
  //     name:"Mi perfil",
  //     route:"",
  //     icon:"account_box"
  //   },
  //   {
  //     name:"Crear Proyecto",
  //     route:"projects",
  //     icon:"assignment"
  //   },
  //   {
  //     name:"Listar usuarios",
  //     route:"",
  //     icon:"supervised_user_circle"
  //   },
  //   {
  //     name:"Calendario",
  //     route:"",
  //     icon:"calendar_today"
  //   },
  //   {
  //     name:"Tareas",
  //     route:"task",
  //     icon:"dashboard"
  //   }
  // ]
  // fillerContent = Array.from({length: 50}, () =>
  //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  //      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  //      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  //      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  // private _mobileQueryListener: () => void;

  // constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
  //   this.mobileQuery = media.matchMedia('(max-width: 600px)');
  //   this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  //   this.mobileQuery.addListener(this._mobileQueryListener);
  // }

  // ngOnDestroy(): void {
  //   this.mobileQuery.removeListener(this._mobileQueryListener);
  // }

  // shouldRun = true
>>>>>>> giancarlo
  constructor() { }

  ngOnInit(): void {
  }

}
