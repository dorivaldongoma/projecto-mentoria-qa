import { test as baseTest } from '@playwright/test';
import { PaginaLogin } from '../pagina-login';

type PagesFixtures = {
  paginaLogin: PaginaLogin;
};

export const test = baseTest.extend<PagesFixtures>({
  paginaLogin: async ({ page }, use) => {
    await use(new PaginaLogin(page));
  },
});