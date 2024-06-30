import { expect } from "@playwright/test";
import { loginFixture } from "../../fixtures";

loginFixture("check login flow", async ({ app, defaultAdmin }) => {
    console.log(defaultAdmin.username + " " + defaultAdmin.password);
    await expect(app.auth.addToCart).toBeVisible();
});