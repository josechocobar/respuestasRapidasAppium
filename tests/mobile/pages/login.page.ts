import BasePage from './base.page';

class LoginPage extends BasePage {
  get usernameInput() {
    return $('~username');
  }

  get passwordInput() {
    return $('~password');
  }

  get loginButton() {
    return $('~login-button');
  }

  get errorMessage() {
    return $('~error-message');
  }

  async open(): Promise<void> {
    // App launches to login screen by default.
  }

  async login(username: string, password: string): Promise<void> {
    await this.setValue(this.usernameInput, username);
    await this.setValue(this.passwordInput, password);
    await this.tap(this.loginButton);
  }
}

export default new LoginPage();
