const {
    firstName,
    verifyStockAvailability,
    calculateTotalPrice
} = require("../utils/validations");

describe("verifyStockAvailability()", () => {

    describe("verify the request if there is not stock availability", () => {
        it("should return that there's no stock avaiable for laptop", () => {
            const typeProduct = "laptop";
            const qty = 30;
            const result = verifyStockAvailability(typeProduct, qty);
            expect(result).toBeFalsy();
        });
        it("should return that there's no stock avaiable for smartphone", () => {
            const typeProduct = "smartphone";
            const qty = 30;
            const result = verifyStockAvailability(typeProduct, qty);
            expect(result).toBeFalsy();
        });
        it("should return that there's no stock avaiable for headphone", () => {
            const typeProduct = "headphone";
            const qty = 30;
            const result = verifyStockAvailability(typeProduct, qty);
            expect(result).toBeFalsy();
        });
        it("should return that there's no stock avaiable for book", () => {
            const typeProduct = "book";
            const qty = 30;
            const result = verifyStockAvailability(typeProduct, qty);
            expect(result).toBeFalsy();
        });
    });

    describe("verify the request if there is stock availability", () => {
        it("should return that there's stock avaiable for laptop", () => {
            const typeProduct = "laptop";
            const qty = 1;
            const result = verifyStockAvailability(typeProduct, qty);
            expect(result).toBeTruthy();
        });
        it("should return that there's stock avaiable for smartphone", () => {
            const typeProduct = "smartphone";
            const qty = 1;
            const result = verifyStockAvailability(typeProduct, qty);
            expect(result).toBeTruthy();
        });
        it("should return that there's stock avaiable for headphone", () => {
            const typeProduct = "headphone";
            const qty = 1;
            const result = verifyStockAvailability(typeProduct, qty);
            expect(result).toBeTruthy();
        });
    });
});