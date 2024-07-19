import { expect } from "@playwright/test";
import { loginFixture } from "../../fixtures";

/**
 * Login with fixture (shows power of fixture).
 */
loginFixture("check login flow", async ({ app, defaultAdmin }) => {
    console.log(defaultAdmin.username + " " + defaultAdmin.password);
    await expect(app.auth.addToCart).toBeVisible(); // this assert exists inside fixture, here it's just to show that we are logged in
});