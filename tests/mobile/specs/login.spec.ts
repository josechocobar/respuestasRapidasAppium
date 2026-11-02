import { expect } from '@wdio/globals';
import LoginPage from '../pages/login.page';

describe('Login flow', () => {
  it('should show error with invalid credentials', async () => {
    await LoginPage.open();
    await LoginPage.login('invalid', 'invalid');
    await expect(LoginPage.errorMessage).toBeDisplayed();
  });
});
