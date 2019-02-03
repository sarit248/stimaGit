import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { BookListComponent } from '../components/book-list/book-list.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "contact", component: ContactComponent },
    { path: "book-list", component: BookListComponent }

    // { path: "", redirectTo: "/home", pathMatch: "full" },
    // { path: "**", component: Page404Component }
];

@NgModule({
  imports: [
       // Import the above routes into this module:
       RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
