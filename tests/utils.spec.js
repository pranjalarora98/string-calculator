import Add from '../src/utils';

describe('Add function', () => {
    it('should return 0 for an empty string', () => {
        expect(Add('')).toBe(0);
    });

    it('should handle numbers separated by a comma', () => {
        expect(Add('1,2,3')).toBe(6);
    });

    it('should handle numbers separated by a newline', () => {
        expect(Add('1\n2\n3')).toBe(6);
    });

    it('should handle custom delimiters', () => {
        expect(Add('//;\n1;2;3')).toBe(6);
    });

    it('should handle multiple custom delimiters', () => {
        expect(Add('//[;][*]\n1;2*3')).toBe(6);
    });

    it('should throw an error when there are negative numbers', () => {
        expect(() => Add('//;\n1;-2;3')).toThrow('Negatives not allowed: -2');
    });

    it('should ignore numbers greater than 1000', () => {
        expect(Add('2,1001')).toBe(2);
        expect(Add('1001,2')).toBe(2);
    });

    it('should return the correct sum for large numbers and ignored numbers', () => {
        expect(Add('2,1000')).toBe(1002);
        expect(Add('1001,999')).toBe(999);
    });
});
