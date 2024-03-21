import './PokemonList.css';
type Props = {
  pokedex: Record<string, string>[];
};

export function PokemonList({ pokedex }: Props) {
  const pokemonList = pokedex.map((pokemon) => <li>{pokemon.name}</li>);

  return <ul className="list">{pokemonList}</ul>;
}
