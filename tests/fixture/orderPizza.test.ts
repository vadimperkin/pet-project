import { loginFixture } from "../../fixtures";
import { createPositiveIngredients } from "../../helpers/constraints";

const ingredientsPositive: Ingredients = createPositiveIngredients({
    size: "small",
    flavour: "Supreme",
    sauce: "Buffalo",
    topping: "Green Olive",
    quantity: 2
})

const ingredientsNegative: Ingredients = {
    size: "medium",
    flavour: "Pepperoni",
    sauce: "Barbeque",
    topping: "Onions",
    quantity: -1
}

loginFixture("check positive ordering pizza flow", async ({ app }) => {
    await app.orderSubmit.compoundPizza(ingredientsPositive);
    await app.orderSubmit.addPizzaToCart();
    await app.orderSubmit.verifyAddingToCart();
    await app.orderSubmit.verifyCompoundedPizza();
});

loginFixture("check negative ordering pizza flow", async ({ app }) => {
    await app.orderSubmit.compoundPizza(ingredientsNegative);
    await app.orderSubmit.addPizzaToCart();
    await app.orderSubmit.verifyNegativeQtyError();
});