import Bowerman from './Bowerman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

// Примеры создания персонажей
const bowman = new Bowerman('Robin');
const swordsman = new Swordsman('Arthur');
const magician = new Magician('Merlin');
const daemon = new Daemon('Lucifer');
const undead = new Undead('Drake');
const zombie = new Zombie('Walker');

console.log(bowman);
console.log(swordsman);
console.log(magician);
console.log(daemon);
console.log(undead);
console.log(zombie);
