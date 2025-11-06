import { Page, Locator } from '@playwright/test';

export class PaginaLogin {
  readonly pagina: Page;
  readonly campoUsername: Locator;
  readonly campoPassword: Locator;
  readonly botaoLogin: Locator;
  readonly mensagemErro: Locator;

  constructor(pagina: Page) {
    this.pagina = pagina;
    
    this.campoUsername = pagina.locator('[data-test="username"]');
    this.campoPassword = pagina.locator('[data-test="password"]');
    this.botaoLogin = pagina.locator('[data-test="login-button"]');
    this.mensagemErro = pagina.locator('[data-test="error"]');
  }

  async navegarParaPaginaLogin(): Promise<void> {
    await this.pagina.goto('https://www.saucedemo.com/');
  }

  async fazerLogin(username: string, password: string): Promise<void> {
    await this.campoUsername.fill(username);
    await this.campoPassword.fill(password);
    await this.botaoLogin.click();
  }
}