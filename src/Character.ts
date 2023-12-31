import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private readonly _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._name = name;
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: this._archetype.energyType,
      amount: getRandomInt(1, 10) };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const demage = attackPoints - this.defense;
    if (demage > 0) {
      const vidaTotal = this._lifePoints - demage;
      this._lifePoints = vidaTotal;
    }

    if (demage <= 0) {
      const vidaTotal = this._lifePoints - 1;
      this._lifePoints = vidaTotal;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special() {
    if (this._lifePoints >= 1 && this._lifePoints <= 10) {
      console.log(`Ao se aproximar da morte,
      você sente algo nunca sentido antes: Medo!!!
      É este medo que libera algo profundo dentro de você,
      um poder antes nunca visto, mas será que será o suficiente para vencer?
      Só há uma maneira de saber, lute
      ruja com todo o seu ser
      SIGA EM FRENTE E LUTE
      TATAKAE!!!`);

      this._lifePoints += getRandomInt(20, 100);
      this._energy.amount = 10;
      this._defense = 10;
      this._strength = 10;

      console.log('Sente o poder correndo pelo seu corpo? TATAKAE');
    }

    console.log(`Você fede a esperança,
     algo que só será livre ao experimentar o desespero`);
  }
}