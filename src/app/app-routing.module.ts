import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About/About.component';
import { ExampleComponent } from './example/example.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { ModelsComponent } from './Models/Models.component';
import { AdminGuard } from './admin.guard';
import { DeactivateGuard } from './deactivate.guard';
// import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './Service/Service.component';
import { LoginnewComponent } from './Loginnew/Loginnew.component';
import { ServiceloginComponent } from './servicelogin/servicelogin.component';
import { GhostComponent } from './ghost/ghost.component';
import { CullinanComponent } from './cullinan/cullinan.component';
import { PhantomComponent } from './phantom/phantom.component';
import { WraithComponent } from './wraith/wraith.component';
import { DawnComponent } from './dawn/dawn.component';
import { CartComponent } from './cart/cart.component';
import { ModelsregisterComponent } from './Modelsregister/Modelsregister.component';
import { AngularRegisterComponent } from './Angular-register/Angular-register.component';
import { DetailsComponent } from './details/details.component';
import { AuthendGuard } from './authend.guard';
import { AdminHomePageComponent } from './AdminHomePage/AdminHomePage.component';
import { LoginDetailsComponent } from './loginDetails/loginDetails.component';
import { OrderDetailsComponent } from './OrderDetails/OrderDetails.component';
import { ServiceDetailsComponent } from './serviceDetails/serviceDetails.component';
import { UserscomponentComponent } from './userscomponent/userscomponent.component';
import { AdminpageheaderComponent } from './adminpageheader/adminpageheader.component';
import { AdminpagedashboardComponent } from './Adminpagedashboard/Adminpagedashboard.component';
const routes: Routes = [
  // {
  //   path:"",
  //   component:HomeComponent
  // },
  {
    path:"Home",
    component:HomeComponent
  },
  {
    path:"About",
    component:AboutComponent,

  },
  // {
  //    path:"Register",
  //    component:RegisterComponent,
  //    canDeactivate:[DeactivateGuard]
  // },
  {
   path:"Service",
   component:ServiceComponent,
  //  canActivate:[AuthendGuard]
  },
  {
    path:"Models",
    component:ModelsComponent

  },
  {
    path:"loginnew",
    component:LoginnewComponent
  },
  {
    path:"servicelogin",
    component:ServiceloginComponent
  },
  {
    path:"Ghost",
    component:GhostComponent
  },
  {
    path:"Cullinan",
    component:CullinanComponent
  },
  {
    path:"Phantom",
    component:PhantomComponent
  },
  {
    path:"Wraith",
    component:WraithComponent
  },
  {
    path:"Dawn",
    component:DawnComponent
  },
  {
    path:"Cart",
    component:CartComponent
  },
  {
    path:"Modelsregister",
    component:ModelsregisterComponent
  },
  {
    path:"AngularRegister",
    component:AngularRegisterComponent
  },
  // {
  //   path:"",
  //   component:AboutComponent
  // },
  {
    path: 'Details',
    component:DetailsComponent
   },

  {
      path: 'Admin',
      component:AdminHomePageComponent},

  {
    path:"logindetails",
    component:LoginDetailsComponent
  },
  {
    path:"orderdetails",
    component:OrderDetailsComponent
  },
  {
    path:"servicedetails",
    component:ServiceDetailsComponent
  },
  {
    path:"users",
    component:UserscomponentComponent
  },
  {
    path:"adminpageheader",
    component:AdminpageheaderComponent
  },
  {
    path:"adminpagedashboard",
    component:AdminpagedashboardComponent
  },
  {
    path:"**",
    component:HomeComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
