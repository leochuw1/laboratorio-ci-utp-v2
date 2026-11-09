const {
    sumar,
    restar,
    multiplicar,
    dividir
} = require('./calculator');

describe('Pruebas Unitarias del Módulo Calculadora UTP', () => {

    test('1. Suma correcta de dos números', () => {
        expect(sumar(5, 5)).toBe(10);
    });

    test('2. Resta correcta de dos números', () => {
        expect(restar(10, 4)).toBe(6);
    });

    test('3. Multiplicación correcta', () => {
        expect(multiplicar(3, 4)).toBe(12);
    });

    test('4. División correcta', () => {
        expect(dividir(20, 5)).toBe(4);
    });

    test('5. Error al dividir por cero', () => {
        expect(() => dividir(10, 0))
            .toThrow("No es posible dividir entre cero");
    });

});