import { specialAttacks } from '../js/description';

test('Должен извлечь специальные атаки с описанием по умолчанию', () => {
  const character = {
    special: [
      { id: 8, name: 'Двойной выстрел', icon: 'http://...' },
      { id: 9, name: 'Нокаутирующий удар', icon: 'http://...' },
    ],
  };

  const result = specialAttacks(character);

  expect(result).toEqual([
    { id: 8, name: 'Двойной выстрел', description: 'Описание недоступно', icon: 'http://...' },
    { id: 9, name: 'Нокаутирующий удар', description: 'Описание недоступно', icon: 'http://...' },
  ]);
});

test('Должен извлечь специальные атаки с предоставленным описанием', () => {
  const character = {
    special: [
      { id: 8, name: 'Двойной выстрел', description: 'Двойной выстрел наносит двойной урон', icon: 'http://...' },
      { id: 9, name: 'Нокаутирующий удар', icon: 'http://...' },
    ],
  };

  const result = specialAttacks(character);

  expect(result).toEqual([
    { id: 8, name: 'Двойной выстрел', description: 'Двойной выстрел наносит двойной урон', icon: 'http://...' },
    { id: 9, name: 'Нокаутирующий удар', description: 'Описание недоступно', icon: 'http://...' },
  ]);
});

test('Должен обработать пустой массив специальных атак', () => {
  const character = {
    special: [],
  };

  const result = specialAttacks(character);

  expect(result).toEqual([]);
});