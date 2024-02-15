const {
  firstName,
  verifyStockAvailability,
  calculateTotalPrice,
} = require("./validations");

// Reutilizando os testes ensinados em sala pela professora para verificar a função firstName()
describe("firstName()", () => {
  it("should return the first name when the full name is given", () => {
    const fullName = "John Doe Etc";
    const result = firstName(fullName);

    expect(result).toBe("John");
  });

  it("should return the same name when no blank space is found", () => {
    const name = "Alice";
    const result = firstName(name);

    expect(result).toBe(name);
  });

  it("should return the first name correctly when theres blank space in the start", () => {
    const name = " Alice Test";

    const result = firstName(name);
    expect(result).toBe("Alice");
  });

  it("should return the first name correctly when theres blank space in the end", () => {
    const name = "Alice Test ";

    const result = firstName(name);
    expect(result).toBe("Alice");
  });
});

describe("verifyStockAvailability()", () => {
  it("should return false for product that don't exist", () => {
    const result = verifyStockAvailability("camera", 2);
    expect(result).toBe(false);
  });

  it("should return false for product with no stock", () => {
    const result = verifyStockAvailability("book", 1);
    expect(result).toBe(false);
  });

  it("should return true for product with available stock", () => {
    const result = verifyStockAvailability("laptop", 5);
    expect(result).toBe(true);
  });

  it("should return true for product quantity equal to available stock", () => {
    const result = verifyStockAvailability("headphone", 5);
    expect(result).toBe(true);
  });

  it("should return false for product quantity greater than available stock", () => {
    const result = verifyStockAvailability("smartphone", 25);
    expect(result).toBe(false);
  });
});

describe("calculateTotalPrice()", () => {
  it("should return total price of 0 if it is an empty array", () => {
    const result = calculateTotalPrice([]);
    expect(result).toBe(0);
  });

  it("should return the product total price if there is a single product", () => {
    const products = [{ name: "Product 1", price: 10, quantity: 2 }];
    const result = calculateTotalPrice(products);
    expect(result).toBe(20);
  });

  it("should return the total price if there is multiple products", () => {
    const products = [
      { name: "Product 1", price: 10, quantity: 2 },
      { name: "Product 2", price: 15, quantity: 2 },
      { name: "Product 3", price: 20, quantity: 1 },
    ];
    const result = calculateTotalPrice(products);
    expect(result).toBe(70);
  });

  it("should not consider products with quantity zero in to the total price", () => {
    const products = [
      { name: "Product 1", price: 10, quantity: 2 },
      { name: "Product 2", price: 15, quantity: 0 },
      { name: "Product 3", price: 20, quantity: 1 },
    ];
    const result = calculateTotalPrice(products);
    expect(result).toBe(40);
  });
});
