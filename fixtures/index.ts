import { expect, test } from "@playwright/test";
import { Application } from "../app";
import type { DefaultAdmin } from "../app/models";

export const baseFixture = test.extend<{ app: Application }>({
  app: async ({ page }, use) => {
    const app = new Application(page);
    await use(app);
  },
});

export const loginFixture = baseFixture.extend<DefaultAdmin & { app: Application }>({
  defaultAdmin: [
    {
      username: "randomName@test.com",
      password: "AEZAKMI",
    },
    {
      option: true,
    },
  ],
  app: async ({ app, defaultAdmin }, use) => {
    await app.auth.open();
    await app.auth.login(defaultAdmin.username, defaultAdmin.password);
    await expect(app.auth.addToCart).toBeVisible();
    await use(app);

    console.log("Teard down: executes after test"); 
  }
});
