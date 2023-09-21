import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private type_: EnergyType;
  static contador = 0;
  constructor(name: string) {
    super(name);
    this.type_ = 'stamina';
    Warrior.contador += 1;
  }

  get energyType(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances() {
    return Warrior.contador;
  }
}

export default Warrior;