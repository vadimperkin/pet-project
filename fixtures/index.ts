import { expect, test } from "@playwright/test";
import { Application } from "../app";
import { API } from "../api";

export const baseFixture = test.extend<{
  App: Application;
  Api: API;
}>({
  App: async ({ page }, use) => {
    const app = new Application(page);
    await use(app);
  },
  Api: async({ request }, use) => {
    const api = new API(request);
    await use(api);
  }
});

export const loginFixture = baseFixture.extend<DefaultAdmin & { App: Application }>({
  defaultAdmin: [
    {
      username: "randomName@test.com",
      password: "AEZAKMI",
    },
    {
      option: true,
    },
  ],
  App: async ({ App, defaultAdmin }, use) => {
    await App.auth.open();
    await App.auth.login(defaultAdmin.username, defaultAdmin.password);
    await expect(App.auth.addToCart).toBeVisible();
    await use(App);

    console.log("Teard down: executes after test"); 
  }
});
