import { ReviewService } from './services/review.service';
import { MenusService } from './services/menus.service';
import { CategoryService } from './services/category.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AboutService } from './services/about.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular-4-data-table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { StarterComponent } from './starter/starter.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturedComponent } from './featured/featured.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { MenusComponent } from './admin/menus/menus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CatagoryFormComponent } from './admin/categories/catagory-form/catagory-form.component';
import { MenuFormComponent } from './admin/menus/menu-form/menu-form.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { GiveReviewComponent } from './give-review/give-review.component';
import { ReviewStarComponent } from './review-star/review-star.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    StarterComponent,
    AboutComponent,
    PricingComponent,
    FeaturedComponent,
    ReviewsComponent,
    ContactComponent,
    FooterComponent,
    CategoriesComponent,
    MenusComponent,
    HomeComponent,
    LoginComponent,
    CatagoryFormComponent,
    MenuFormComponent,
    AdminComponent,
    AdminNavComponent,
    GiveReviewComponent,
    ReviewStarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    CustomFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'giveReview', component: GiveReviewComponent},
      {path: 'login', component: LoginComponent},
      
      {path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuardService]},
      {path: 'admin/categories/new', component: CatagoryFormComponent, canActivate: [AuthGuard, AdminAuthGuardService]},
      {path: 'admin/categories/:id', component: CatagoryFormComponent, canActivate: [AuthGuard, AdminAuthGuardService]},
      {path: 'admin/categories', component: CategoriesComponent, canActivate: [AuthGuard, AdminAuthGuardService]},
      {path: 'admin/menus/new', component: MenuFormComponent, canActivate: [AuthGuard, AdminAuthGuardService]},
      {path: 'admin/menus/:id', component: MenuFormComponent, canActivate: [AuthGuard, AdminAuthGuardService]},
      {path: 'admin/menus', component: MenusComponent, canActivate: [AuthGuard, AdminAuthGuardService]},
      
      {path: '*', component: HomeComponent},
    ], { useHash: true })
  ],
  providers: [
    AboutService,
    AuthService,
    UserService,
    AuthGuard,
    AdminAuthGuardService,
    CategoryService,
    MenusService,
    ReviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
