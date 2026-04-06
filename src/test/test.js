import Character from '../js/Character';
import Bowerman from '../js/Bowerman';
import Swordsman from '../js/Swordsman';
import Magician from '../js/Magician';
import Daemon from '../js/Daemon';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';

describe('Character class', () => {
  test('should create character with valid name and type', () => {
    const character = new Character('John', 'Bowman');
    expect(character.name).toBe('John');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('should throw error if name is too short', () => {
    expect(() => new Character('J', 'Bowman')).toThrow('Name must be a string between 2 and 10 characters');
  });

  test('should throw error if name is too long', () => {
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Name must be a string between 2 and 10 characters');
  });

  test('should throw error if name is not a string', () => {
    expect(() => new Character(123, 'Bowman')).toThrow('Name must be a string between 2 and 10 characters');
  });

  test('should throw error if type is invalid', () => {
    expect(() => new Character('John', 'InvalidType')).toThrow('Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  });
});

describe('Bowerman', () => {
  test('should create Bowerman with correct stats', () => {
    const bowman = new Bowerman('Robin');
    expect(bowman.name).toBe('Robin');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });
});

describe('Swordsman', () => {
  test('should create Swordsman with correct stats', () => {
    const swordsman = new Swordsman('Arthur');
    expect(swordsman.name).toBe('Arthur');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });
});

describe('Magician', () => {
  test('should create Magician with correct stats', () => {
    const magician = new Magician('Merlin');
    expect(magician.name).toBe('Merlin');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });
});

describe('Daemon', () => {
  test('should create Daemon with correct stats', () => {
    const daemon = new Daemon('Lucifer');
    expect(daemon.name).toBe('Lucifer');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });
});

describe('Undead', () => {
  test('should create Undead with correct stats', () => {
    const undead = new Undead('Drake');
    expect(undead.name).toBe('Drake');
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });
});

describe('Zombie', () => {
  test('should create Zombie with correct stats', () => {
    const zombie = new Zombie('Walker');
    expect(zombie.name).toBe('Walker');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});
