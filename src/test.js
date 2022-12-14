"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const romanos_1 = require("./romanos");
const sutConversor = new romanos_1.Romanos();
describe("Roman to Int Conversor test suite", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it("Should return 1 when the input is I", () => {
        expect(sutConversor.romanToInt("I")).toBe(1);
    });
});
