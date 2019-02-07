import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

  user:User;
  password2:string;

    constructor(private translate: TranslateService,private userService:UserService) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    ngOnInit() {
      this.user = new User();
    }

    register(user){
      this.userService.insert(this.user).subscribe(
      response=>{
       alert ('usuario Registrado');
    },
    error=>{
  console.log('error');
      console.log(error.valueOf().error.errorInfo[0]);
    if(error.valueOf().error.errorInfo[0]=='23505'){
      alert ('correo duplicado');
    }
    });
    }

}
