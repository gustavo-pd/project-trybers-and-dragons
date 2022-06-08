import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  _player1: Fighter;
  _monsters: SimpleFighter[];
  constructor(private player1: Fighter, private monster1: SimpleFighter[]) {
    super(player1);
    this._player1 = player1;
    this._monsters = monster1;
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      this._player1.attack(monster);
      monster.attack(this._player1);
    });
    return super.fight();
  }
}

export default PVE;