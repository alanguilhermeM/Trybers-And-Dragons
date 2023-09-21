import Race from './Race';

class Halfling extends Race {
  private static contador = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.contador += 1;
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    return Halfling.contador;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;