import { test } from '../pages/fixtures/pages-fixtures';

test.beforeEach(async ({ paginaLogin }) => {
  await test.step("Dado que estou na página de login do SauceDemo", async () => {
    await paginaLogin.navegarParaPaginaLogin();
  });
});

test.afterEach(async () => {
  console.log(`Teste ${test.info().title} - Status: ${test.info().status}`);
});

test.describe(
  "Funcionalidades de Login",
  {
    annotation: {
      type: "Suite de Teste",
      description: "Como utilizador, devo ser capaz de fazer login com diferentes cenários",
    },
  },
  () => {
    test(
      "CT-001: Login bem-sucedido com credenciais válidas",
      async ({ paginaLogin }) => {
        await test.step("Quando preencho as credenciais válidas e clico em Login", async () => {
          await paginaLogin.fazerLogin('standard_user', 'secret_sauce');
        });
      },
    );
  },
);