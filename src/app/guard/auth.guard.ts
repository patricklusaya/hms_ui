import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree
} from "@angular/router";
import { AuthService } from "../_services/auth.service";
import { TokenStorageService } from "../_services/token-storage.service";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		
        private tokenStorage : TokenStorageService, private authService: AuthService,
		private router: Router) { }
        
   
    
	canActivate(
        
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): boolean | Promise<boolean> {
        
	var isAuthenticated = this.authService.isLoggedIn();
    if(!isAuthenticated){
        this.router.navigate(['/login']);
    }
    return isAuthenticated ;
		
	}
}


