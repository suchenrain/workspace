import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";

import { UploadComponent } from "./upload.component";
import { MoniterUploadComponent } from "./moniter-upload/moniter-upload.component";
import { PictureUploadComponent } from "./picture-upload/picture-upload.component";

const uploadRoutes:Routes=[
  {
    path:'',
    component:UploadComponent,
    children:[
      {
        path:'',
        children:[
          {path:'monitor',component:MoniterUploadComponent},
          {path:'picture',component:PictureUploadComponent}
        ]
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(uploadRoutes)
  ],
  exports:[RouterModule]
})
export class UploadRoutingModule { }
