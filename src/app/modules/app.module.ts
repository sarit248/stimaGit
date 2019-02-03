import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HomeComponent } from '../components/home/home.component';
import { PriceBoxComponent } from '../components/price-box/price-box.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { BookListComponent } from '../components/book-list/book-list.component';
import { MenuComponent } from '../components/menu/menu.component';
import { RoutingModule } from './routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule, MatInputModule, MatButtonModule, MatCheckboxModule } from "@angular/material";




@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        PriceBoxComponent,
        AboutComponent,
        ContactComponent,
        BookListComponent,
        MenuComponent,

    ],
    imports: [
        BrowserModule,
        RoutingModule,
        RouterModule,
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule
    ],

    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
