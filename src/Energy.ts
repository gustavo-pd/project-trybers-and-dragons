interface Energy {
  type_: EnergyType;
  amount: number;
}

type EnergyType = 'mana' | 'stamina';

export default Energy;

export { EnergyType };