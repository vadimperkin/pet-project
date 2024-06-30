import { test } from "@playwright/test";
import { Application } from "../app";

export const baseFixture = test.extend<{ app: Application }>({
  app: async ({ page }, use) => {
    const app = new Application(page);
    await use(app);
  },
});

export type DefaultAdmin = {
  defaultAdmin: {
    username: string;
    password: string;
  };
};

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
    await use(app);
    console.log("Executes after test"); 
  }
});
