import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';



const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: ProductComponent},
    { path: 'product/detail/:category/:id', component: ProductDetailsComponent },
    { path: 'contacts', component: ContactComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule { }