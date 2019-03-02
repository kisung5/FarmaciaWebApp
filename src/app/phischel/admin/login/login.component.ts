import { Component, OnInit } from '@angular/core';
//import {ApiadminService} from '../apiadmin.service';
//import {CustomerService} from '../../../customer.service';
import {Router} from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

//   email = 'admin';
//   password = 'admin';

//   constructor(private api: ApiadminService, private customer: CustomerService, private router: Router) {
//   }

//   tryLogin() {
//     this.api.login(
//       this.email,
//       this.password
//     )
//       .subscribe(
//         r => {
//           if (r.token) {
//             this.customer.setToken(r.token);
//             this.router.navigateByUrl('/phischel/admin/clientes');
//           }
//         },
//         r => {
//           alert(r.error.error);
//         });
//   }

// }
