import { Routes } from '@angular/router';

import { RoutingLogin } from './routing-login/routing-login';
import { RoutingContact } from './routing-contact/routing-contact';
import { RoutingAbout } from './routing-about/routing-about';
import { RoutingHome } from './routing-home/routing-home';
import { RoutingPageNotFound } from './routing-page-not-found/routing-page-not-found';
import { Profile } from './profile/profile';
import { RoutingUser } from './routing-user/routing-user';

export const routes: Routes = [
    {path:'', component:RoutingHome},
    {path: 'about', component: RoutingAbout},
    {path: 'contact', component: RoutingContact},
    {path:'login',component:RoutingLogin},
    {path: 'profile', component: Profile},
    {path:'user/:name', component: RoutingUser},
    {path:'**',component:RoutingPageNotFound}  //--should be at the end of routes
];
