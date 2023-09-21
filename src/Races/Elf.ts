import Race from './Race';

class Elf extends Race {
  private static contador = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.contador += 1;
    this._maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    return Elf.contador;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;