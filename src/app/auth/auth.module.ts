import {NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from '../module.import.guard';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './interceptor/token.interceptor';
import {AuthAdminGuard} from './guard/auth.admin.guard';
import {AuthService} from './service/auth.service';
import {CommonModule} from '@angular/common';
import {AuthUserGuard} from './guard/auth.user.guard';
import {DataService} from './service/data.service';
import {AuthManagerGuard} from './guard/auth.manager.guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    AuthService,
    AuthAdminGuard,
    AuthUserGuard,
    AuthManagerGuard,
    DataService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ]
})
export class AuthModule {
  constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
    throwIfAlreadyLoaded(parentModule, 'AuthModule');
  }
}
