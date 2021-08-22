import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home',pathMatch: 'full'},

  {
    path: 'home',
   // loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    children:[ //
      {//
        path:'',//
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},//
      {//
        path:':userId',//
        loadChildren: () => import('./pages/create-user-details/create-user-details.module').then( m => m.CreateUserDetailsPageModule)//
      },
      
    ] 
  },
  
  {
    path: 'create-new-user',
    loadChildren: () => import('./pages/create-new-user/create-new-user.module').then( m => m.CreateNewUserPageModule)
  },
  // {
  //   path: 'create-user-details',
  //   loadChildren: () => import('./pages/create-user-details/create-user-details.module').then( m => m.CreateUserDetailsPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
