import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private type_: EnergyType;
  static contador = 0;
  constructor(name: string) {
    super(name);
    this.type_ = 'mana';
    Mage.contador += 1;
  }

  get energyType(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances() {
    return Mage.contador;
  }
}

export default Mage;