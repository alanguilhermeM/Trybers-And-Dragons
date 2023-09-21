import Race from './Race';

class Dwarf extends Race {
  private static contador = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.contador += 1;
    this._maxLifePoints = 80;
  }

  static createdRacesInstances(): number {
    return Dwarf.contador;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;