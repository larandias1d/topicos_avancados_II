import { Romanos } from './romanos';

const sutConversor = new Romanos();

describe("Conversor de inteiro para romanos", () =>{

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("Deveria retornar I quando a entrada for 1", () =>{
        expect(sutConversor.romanToInt("I")).toBe(1);
    });

    it("Deveria retornar X quando a entrada for 10", () =>{
        expect(sutConversor.romanToInt("X")).toBe(4);
    });
        
})