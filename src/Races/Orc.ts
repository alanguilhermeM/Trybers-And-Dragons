import Race from './Race';

class Orc extends Race {
  private static contador = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.contador += 1;
    this._maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    return Orc.contador;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;