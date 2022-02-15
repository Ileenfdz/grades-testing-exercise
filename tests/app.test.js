const getGrade = require('../scripts/grades.js');

describe('What grade do you have?', () => {

    test("Should say 'Muy deficiente'", () => {
      expect(getGrade(0)).toEqual('Muy deficiente');
    });
  
    test("Should say 'Insuficiente'", () => {
      expect(getGrade(2.9)).toEqual('Insuficiente');
    });
  
    test("Should say 'Suficiente'", () => {
      expect(getGrade(5)).toEqual('Suficiente');
    });
  
    test("Should say 'Bien'", () => {
      expect(getGrade(6)).toEqual('Bien');
    });

    test("Should say 'Notable'", () => {
      expect(getGrade(8)).toEqual('Notable');
    });
  
    test("Should say 'Sobresaliente'", () => {
      expect(getGrade(9)).toEqual('Sobresaliente');
    });
  
     test("Should say 'Introduce un número válido, entre 0 y 10'", () => {
      expect(getGrade('Nada')).toEqual('Introduce un número válido, entre 0 y 10');
    });
  
    test("Should say 'Introduce un número válido, entre 0 y 10'", () => {
      expect(getGrade('12')).toEqual('Introduce un número válido, entre 0 y 10');
    });
  })