import { transform } from "../src/romanizer";

describe('transform', () => {
    it('should X when input 10', () => {
        const formatted = transform(10);
        expect(formatted).toEqual("X");
    });
})