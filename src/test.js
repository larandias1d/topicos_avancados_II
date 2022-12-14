"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const romanos_1 = require("./romanos");
const sutConversor = new romanos_1.Romanos();
describe("Conversor de inteiro para romanos", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it("Deveria retornar I quando a entrada for 1", () => {
        expect(sutConversor.romanToInt("I")).toBe(1);
    });
    it("Deveria retornar X quando a entrada for 10", () => {
        expect(sutConversor.romanToInt("X")).toBe(4);
    });
    it("Deveria retornar XII quando a entrada for 12", () => {
        expect(sutConversor.romanToInt("XII")).toBe(12);
    });
});
