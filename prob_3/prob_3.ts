type PizzaSize = "Small" | "Medium" | "Large" | "ExtraLarge";

class Pizza {
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

  genCost(): number | string {
    let cost = 0;
    switch (this._size) {
      case "Small":
        cost += 10;
        cost += 2 * (this._pepperoniToppings + this._pineappleToppings);
        cost += this._hasExtraCheese ? 2 : 0;
        break;

      case "Medium":
        cost += 12;
        cost += 2 * (this._pepperoniToppings + this._pineappleToppings);
        cost += this._hasExtraCheese ? 4 : 0;
        break;

      case "Large":
        cost += 14;
        cost += 3 * (this._pepperoniToppings + this._pineappleToppings);
        cost += this._hasExtraCheese ? 6 : 0;
        break;

      case "ExtraLarge":
        cost += 18;
        cost += 4 * (this._pepperoniToppings + this._pineappleToppings);
        cost += this._hasExtraCheese ? 6 : 0;
        break;
      default:
        throw new Error(`Invalid pizza size: ${this._size}`);
    }
    return cost;
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
  //   Setter for size

  set size(size: PizzaSize) {
    throw new Error("Cannot set the size of a small pizza");
  }

  genCost() {
    let cost = super.genCost();
    if (typeof cost === "number") {
      cost += this.hasExtraCheese ? 2 : 0;
    }
    // return cost;
    return `

        ====== YOUR ORDER =======
        |Size: ${this.size}
        |price: $${cost}
        |Ingredients:
            Ham: ${this.hamToppings}
            Peperoni: ${this.pepperoniToppings}
            Pineapple: ${this.pineappleToppings}
        |Extra Chesses: ${this.hasExtraCheese ? "Yes" : "No"}
      ==========================`;
  }
}

const pizzaSmall = new SmallPizza(true, 3, 2, 10);

console.log(pizzaSmall.genCost());
console.log(pizzaSmall.hamToppings);
console.log(pizzaSmall.pineappleToppings);
