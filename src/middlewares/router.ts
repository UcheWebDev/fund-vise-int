import { NavigationGuardNext , RouteLocationNormalized } from "vue-router";


export const requiresAuthGuard = (to:RouteLocationNormalized , from:RouteLocationNormalized, next: NavigationGuardNext ) => {
 const token = localStorage.getItem('token');
 if(!token){
    next('login')
 }else{
    next()
 }
}
