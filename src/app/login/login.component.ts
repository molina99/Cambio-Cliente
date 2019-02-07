import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    user:User;

    constructor(
        private translate: TranslateService,
        private userService:UserService,
        public router: Router
        ) {
            this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
            this.translate.setDefaultLang('en');
            const browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    ngOnInit() {
        this.user = new User();
    }

    login (user){
        this.userService.consult().subscribe(
        response=>{
         alert ('usuario encontrado');
      },
      error=>{
        console.log('error');
        console.log(error.valueOf().error.errorInfo[0]);
        if(error.valueOf().error.errorInfo[0]=='23505'){
            alert ('error');
        }
      });
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
