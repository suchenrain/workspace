import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule,Routes } from "@angular/router";
import { UploadComponent } from "./upload/upload.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FileUploadComponent } from "./file-upload/file-upload.component";


const appRoutes: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: '',   redirectTo: '/upload', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    CommonModule 
  ],
  declarations: [
    UploadComponent,
    FileUploadComponent,
    PageNotFoundComponent
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
