import { loginFixture } from "../../fixtures";
import type { Ingredients, } from "../../app/models";

const ingredients: Ingredients = {
    size: "small",
    flavour: "Supreme",
    sauce: "Buffalo",
    topping: "Green Olive",
    quantity: 2
}

loginFixture("check login flow", async ({ app }) => {
    await app.orderSubmit.compoundPizza(ingredients);
    await app.orderSubmit.addPizzaToCart();
    await app.orderSubmit.verifyCompoundedPizza();
});