import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRoute,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs/observable";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRoute,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {}
}
