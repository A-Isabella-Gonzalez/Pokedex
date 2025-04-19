interface Ability {
  name: string;
}

interface Abilities {
  ability: Ability;
}

interface Types {
  type: { name: string };
}

interface Sprites {
  front_default: string;
  front_female: string;
}

interface Stat {
  name: string;
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: Stat;
}

export interface Pokemon {
  sprites: Sprites;
  name: string;
  base_experience: string;
  stats: Stats[];
  types: Types[];
  height: number;
  weight: number;
  location_area_encounters: string;
  abilities: Abilities[];
}
