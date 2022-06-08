import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  _player1: Fighter;
  _player2: Fighter;
  constructor(private player1: Fighter, private player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    this._player1.attack(this._player2);
    this._player2.attack(this._player1);
    return super.fight();
  }
}

export default PVP;