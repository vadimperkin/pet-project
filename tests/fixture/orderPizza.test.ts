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

// loginFixture("check positive ordering pizza flow", async ({ App }) => {
//     await App.orderSubmit.compoundPizza(ingredientsPositive);
//     await App.orderSubmit.addPizzaToCart();
//     await App.orderSubmit.verifyAddingToCart();
//     await App.orderSubmit.verifyCompoundedPizza();
// });

loginFixture("check negative ordering pizza flow", async ({ App }) => {
    await App.orderSubmit.compoundPizza(ingredientsNegative);
    await App.orderSubmit.addPizzaToCart();
    await App.orderSubmit.verifyNegativeQtyError();
});