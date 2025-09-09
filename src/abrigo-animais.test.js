import { AbrigoAnimais } from "./abrigo-animais";

describe('Abrigo de Animais', () => {

  test('Deve rejeitar animal inválido', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,RATO', 'RATO,BOLA', 'Lulu');
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve encontrar pessoa para um animal', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo');
      expect(resultado.lista[0]).toBe('Fofo - abrigo');
      expect(resultado.lista[1]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve encontrar pessoa para um animal intercalando brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('BOLA,LASER',
      'BOLA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola');

      expect(resultado.lista[0]).toBe('Bola - abrigo');
      expect(resultado.lista[1]).toBe('Fofo - pessoa 2');
      expect(resultado.lista[2]).toBe('Mimi - abrigo');
      expect(resultado.lista[3]).toBe('Rex - abrigo');
      expect(resultado.lista.length).toBe(4);
      expect(resultado.erro).toBeFalsy();
  });

  test('Gato não divide brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('BOLA,LASER',
      'CAIXA,NOVELO', 'Fofo,Mimi,Zero,Rex');

       expect(resultado.lista[0]).toBe('Fofo - abrigo');
       expect(resultado.lista[1]).toBe('Mimi - pessoa 1');
       expect(resultado.lista[2]).toBe('Rex - abrigo');
       expect(resultado.lista[3]).toBe('Zero - abrigo');
       expect(resultado.lista.length).toBe(4);
       expect(resultado.erro).toBeFalsy();
  });

  
  test('Deve bloquear adoção de gato se compartilhar brinquedo com cão já adotado', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('RATO,BOLA',
      'BOLA,NOVELO','Rex,Zero');
  
  expect(resultado.lista[0]).toBe('Rex - pessoa 1');
  expect(resultado.lista[1]).toBe('Zero - abrigo');
  expect(resultado.erro).toBeFalsy();
});

test('Deve bloquear a adoção de um cão se ele compartilhar brinquedo com um gato já adotado', () => {
  const resultado = new AbrigoAnimais().encontraPessoas('BOLA,LASER,RATO',
    'CAIXA,NOVELO','Mimi,Rex');
  expect(resultado.lista).toEqual(['Mimi - pessoa 1', 'Rex - abrigo']);
  expect(resultado.erro).toBeFalsy();
});

test('Deve permitir a adoção de múltiplos animais se o gato não compartilhar brinquedos', () => {
  const resultado = new AbrigoAnimais().encontraPessoas('BOLA,LASER,CAIXA,NOVELO',
    'SKATE', 'Mimi,Bola');
  
  expect(resultado.lista).toEqual(['Bola - pessoa 1', 'Mimi - pessoa 1']);
  expect(resultado.erro).toBeFalsy();
});

test('Loco não se importa com ordem desde que tenha companhia', () => {
const resultado = new AbrigoAnimais().encontraPessoas('RATO,SKATE',
   'BOLA,CAIXA', 'Loco,Rex');
  
  expect(resultado.lista[0]).toBe('Loco - abrigo'); 
  expect(resultado.lista[1]).toBe('Rex - abrigo');
  expect(resultado.lista.length).toBe(2);
  expect(resultado.erro).toBeFalsy();
});

test('Deve permitir a adoção de Loco se um companheiro for adotado primeiro', () => {
  const resultado = new AbrigoAnimais().encontraPessoas('RATO,BOLA,SKATE', 
    'LASER', 'Rex,Loco');
  expect(resultado.lista).toEqual(['Loco - pessoa 1', 'Rex - pessoa 1']);
  expect(resultado.erro).toBeFalsy();
});

test('Deve impedir a Pessoa 1 de adotar mais de 3 animais', () => {
  const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,NOVELO,LASER,RATO,BOLA',
     'SKATE', 'Rex,Bola,Bebe,Mimi');
  expect(resultado.lista).toEqual([
    'Bebe - pessoa 1',
    'Bola - pessoa 1',
    'Mimi - abrigo',
    'Rex - pessoa 1'
  ]);
  expect(resultado.erro).toBeFalsy();
});

test('Deve retornar erro de brinquedo inválido se uma das listas for vazia', () => {
  const resultado = new AbrigoAnimais().encontraPessoas('RATO,BOLA', 
    '', 'Rex');
  expect(resultado.erro).toBe('Brinquedo inválido');
});

});
