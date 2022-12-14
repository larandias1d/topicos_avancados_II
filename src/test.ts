import { Romanos } from './romanos';

const sutConversor = new Romanos();

describe("Roman to Int Conversor test suite", () =>{

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("Should return 1 when the input is I", () =>{
        expect(sutConversor.romanToInt("I")).toBe(1);
    });

    
})