import { CanActivateFn } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const userGuard: CanActivateFn = async (route, state) => {

  console.log('userGuard:');
  const accessToken = localStorage.getItem('user');
  console.log('accessToken:', accessToken);


  if (!accessToken) {
    return false;
  }
  const role = await getRoleFromAccessToken(accessToken);
  console.log('role:', role);
  if (role === '[User]' || role === 'USER' || role === 'user' || role === 'User') {
    return true;
  } else {
    return false;
  }
};

async function getRoleFromAccessToken(accessToken: string): Promise<string> {
  const helper = new JwtHelperService();
  const decodedToken = helper.decodeToken(accessToken);
  return decodedToken.role;
}
