// Define a custom type for pizza sizes using union type
type PizzaSize = "Small" | "Medium" | "Large" | "ExtraLarge";

// Define a class for Pizza
class Pizza {
  // Define protected properties for the pizza's size, extra cheese, and toppings
  protected _size: PizzaSize;
  protected _hasExtraCheese: boolean;
  protected _pepperoniToppings: number;
  protected _hamToppings: number;
  protected _pineappleToppings: number;
  constructor(
    size: PizzaSize,
    hasExtraCheese: boolean,
    pepperoniToppings: number,
    hamToppings: number,
    pineappleToppings: number
  ) {
    this._size = size;
    this._hasExtraCheese = hasExtraCheese;
    this._pepperoniToppings = pepperoniToppings;
    this._hamToppings = hamToppings;
    this._pineappleToppings = pineappleToppings;
  }

  //   Getter and setter for size
  get size(): PizzaSize {
    return this._size;
  }

  set size(size: PizzaSize) {
    this._size = size;
  }

  //   Getter and setter for extraCheese
  get hasExtraCheese() {
    return this._hasExtraCheese;
  }

  set hasExtraCheese(hasExtraCheese: boolean) {
    this._hasExtraCheese = hasExtraCheese;
  }

  //   Getter and setter for pepperoniToppings
  get pepperoniToppings() {
    return this._pepperoniToppings;
  }
  set pepperoniToppings(pepperoniToppings: number) {
    this._pepperoniToppings = pepperoniToppings;
  }

  //   Getter and setter for hamToppings
  get hamToppings() {
    return this._hamToppings;
  }

  set hamToppings(hamToppings: number) {
    this._hamToppings = hamToppings;
  }

  //   Getter and setter for pineappleToppings
  get pineappleToppings() {
    return this._pineappleToppings;
  }

  set pineappleToppings(pineappleToppings: number) {
    this._pineappleToppings = pineappleToppings;
  }
}

// Small Pizza class
class SmallPizza extends Pizza {
  constructor(
    hasExtraCheese: boolean,
    pepperoniToppings: number,
    hamToppings: number,
    pineappleToppings: number
  ) {
    // Call constructor of Pizza class
    super(
      "Small",
      hasExtraCheese,
      pepperoniToppings,
      hamToppings,
      pineappleToppings
    );
  }

  //   Getter and setteretter for size
  get size() {
    return this._size;
  }
  set size(size: PizzaSize) {
    // Throw error since the size of the pizza cannot be changed
    throw new Error("Cannot set the size of the pizza");
  }

  // Method to generate the cost of a small pizza
  genCost() {
    let cost = 10;
    cost += 2 * (this._pepperoniToppings + this._pineappleToppings);
    cost += this._hasExtraCheese ? 2 : 0;
    return `

        ======= YOUR ORDER =======
        |Size: ${this.size}
        |Price: $${cost}
        |Ingredients: 
            Peperoni: ${this.pepperoniToppings}
            Ham: ${this.hamToppings}
            Pineapple: ${this.pineappleToppings}
        |Extra Chesses: ${this.hasExtraCheese ? "Yes" : "No"}
      ==========================`;
  }
}

// Medium pizza class
class MediumPizza extends Pizza {
  constructor(
    hasExtraCheese: boolean,
    pepperoniToppings: number,
    hamToppings: number,
    pineappleToppings: number
  ) {
    // Call constructor of Pizza class
    super(
      "Medium",
      hasExtraCheese,
      pepperoniToppings,
      hamToppings,
      pineappleToppings
    );
  }
  //   Getter and setteretter for size
  get size() {
    return this._size;
  }
  set size(size: PizzaSize) {
    throw new Error("Cannot set the size of the pizza");
  }

  // Method to generate the cost of a medium pizza
  genCost() {
    let cost = 12;
    cost +=
      2 * (this.pepperoniToppings + this.hamToppings + this.pineappleToppings);
    cost += this.hasExtraCheese ? 4 : 0;
    // return cost;
    return `

        ======= YOUR ORDER =======
        |Size: ${this.size}
        |Price: $${cost}
        |Ingredients: 
            Peperoni: ${this.pepperoniToppings}
            Ham: ${this.hamToppings}
            Pineapple: ${this.pineappleToppings}
        |Extra Chesses: ${this.hasExtraCheese ? "Yes" : "No"}
      ==========================`;
  }
}

// Large pizza class
class LargePizza extends Pizza {
  constructor(
    hasExtraCheese: boolean,
    pepperoniToppings: number,
    hamToppings: number,
    pineappleToppings: number
  ) {
    // Call constructor of Pizza class
    super(
      "Large",
      hasExtraCheese,
      pepperoniToppings,
      hamToppings,
      pineappleToppings
    );
  }
  //   Getter and setteretter for size
  get size() {
    return this._size;
  }
  set size(size: PizzaSize) {
    throw new Error("Cannot set the size of the pizza");
  }

  // Method to generate the cost of a large pizza
  genCost() {
    let cost = 14;

    cost +=
      3 *
      (this._pepperoniToppings + this.hamToppings + this._pineappleToppings);
    cost += this._hasExtraCheese ? 6 : 0;
    return `

        ======= YOUR ORDER =======
        |Size: ${this.size}
        |Price: $${cost}
        |Ingredients: 
            Peperoni: ${this.pepperoniToppings}
            Ham: ${this.hamToppings}
            Pineapple: ${this.pineappleToppings}
        |Extra Chesses: ${this.hasExtraCheese ? "Yes" : "No"}
      ==========================`;
  }
}

// Extra large pizza class
class ExtraLargePizza extends Pizza {
  constructor(
    hasExtraCheese: boolean,
    pepperoniToppings: number,
    hamToppings: number,
    pineappleToppings: number
  ) {
    // Call constructor of Pizza class
    super(
      "ExtraLarge",
      hasExtraCheese,
      pepperoniToppings,
      hamToppings,
      pineappleToppings
    );
  }
  //   Getter and setteretter for size
  get size() {
    return this._size;
  }
  set size(size: PizzaSize) {
    throw new Error("Cannot set the size of the pizza");
  }

  // Method to generate the cost of a extra large pizza
  genCost() {
    let cost = 18;

    cost +=
      4 *
      (this._pepperoniToppings + this.hamToppings + this._pineappleToppings);
    cost += this._hasExtraCheese ? 6 : 0;
    return `

        ======= YOUR ORDER =======
        |Size: ${this.size}
        |Price: $${cost}
        |Ingredients: 
            Peperoni: ${this.pepperoniToppings}
            Ham: ${this.hamToppings}
            Pineapple: ${this.pineappleToppings}
        |Extra Chesses: ${this.hasExtraCheese ? "Yes" : "No"}
      ==========================`;
  }
}

// Tests
const pizzaSmall = new SmallPizza(true, 3, 4, 10);
console.log(pizzaSmall.genCost());

const bigPizza = new MediumPizza(true, 6, 7, 3);
console.log(bigPizza.genCost());

const pizzaLarge = new LargePizza(false, 2, 1, 10);
console.log(pizzaLarge.genCost());

const pizzaExtraLarge = new ExtraLargePizza(true, 23, 9, 5);
console.log(pizzaExtraLarge.genCost());
