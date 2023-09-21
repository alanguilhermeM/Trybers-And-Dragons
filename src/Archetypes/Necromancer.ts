import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private type_: EnergyType;
  static contador = 0;
  constructor(name: string) {
    super(name);
    this.type_ = 'mana';
    Necromancer.contador += 1;
  }

  get energyType(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances() {
    return Necromancer.contador;
  }
}

export default Necromancer;