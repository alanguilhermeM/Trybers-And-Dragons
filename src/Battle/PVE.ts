import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected player: Fighter,
    private monsters: SimpleFighter[] | Monster[],
  ) {
    super(player);
  }

  private handleFightRound(): boolean {
    this.player.attack(this.monsters[0]);
    if (this.monsters[0].lifePoints <= -1) {
      this.monsters.shift();
    }

    if (this.monsters.length > 0) {
      this.monsters.forEach((monster) => monster.attack(this.player));
      return true;
    }
    return false;
  }

  fight(): number {
    while (this.player.lifePoints > 0) {
      const monstersRemain = this.handleFightRound();
      if (!monstersRemain) {
        return 1;
      }
    }
    return -1;
  }
}