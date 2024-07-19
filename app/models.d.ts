export type DefaultAdmin = {
    defaultAdmin: {
        username: string;
        password: string;
    };
};

export type Ingredients = {
    size: "large" | "medium" | "small",
    flavour: "Cheese" | "Pepperoni" | "Supreme" | "Veggie Delight",
    sauce: "Marinara" | "Buffalo" | "Barbeque",
    topping: "Onions" | "Green Olive" | "Tomatoes",
    quantity: number
}