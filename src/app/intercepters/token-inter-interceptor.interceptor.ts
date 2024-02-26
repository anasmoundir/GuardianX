import { HttpInterceptorFn } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

export const tokenInterInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const accessToken = localStorage.getItem('user');
  console.log('in interceptor part accessToken:', accessToken);

  if (accessToken) {
    const jwtHelper = new JwtHelperService();
    const decodedToken = jwtHelper.decodeToken(accessToken);
    console.log('decodedToken interceptor part:', decodedToken);

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }
  return next(req);
};
