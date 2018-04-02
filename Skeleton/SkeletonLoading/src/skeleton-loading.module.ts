import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkeletonLoadingComponent } from './skeleton-loading/skeleton-loading.component';
import { RectComponent } from './skeleton-loading/rect/rect.component';
import { SvgElementComponent } from './skeleton-loading/svg-element/svg-element.component';
import { SvgStopComponent } from './skeleton-loading/svg-stop/svg-stop.component';
import { FacebookPresetComponent } from './skeleton-loading/facebook-preset/facebook-preset.component';
import { InstagramPresetComponent } from './skeleton-loading/instagram-preset/instagram-preset.component';
import { CircleComponent } from './skeleton-loading/circle/circle.component';
import { CodePresetComponent } from './skeleton-loading/code-preset/code-preset.component';
import { BulletListPresetComponent } from './skeleton-loading/bullet-list-preset/bullet-list-preset.component';
import { ListPresetComponent } from './skeleton-loading/list-preset/list-preset.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SkeletonLoadingComponent,
    RectComponent,
    CircleComponent,
    SvgElementComponent,
    SvgStopComponent,
    FacebookPresetComponent,
    InstagramPresetComponent,
    CodePresetComponent,
    BulletListPresetComponent,
    ListPresetComponent
  ],
  exports: [
    SkeletonLoadingComponent,
    RectComponent,
    CircleComponent,
    FacebookPresetComponent,
    InstagramPresetComponent,
    CodePresetComponent,
    BulletListPresetComponent,
    ListPresetComponent
  ]
})
export class SkeletonLoadingModule { }
