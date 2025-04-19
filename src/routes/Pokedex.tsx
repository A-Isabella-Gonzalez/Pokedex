/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { type Pokemon } from "../types";

function Pokedex() {
  const [pokemonName, setPokemonName] = useState("");
  // this stores the data fetched from the API
  const [pokeGeneralData, setPokeGeneralData] = useState<Pokemon | null>(null);
  // this stores the error
  const [error, setError] = useState<string | null>(null);
  // this handles the loading state
  const [loading, setLoading] = useState(false);

  // this is the function that calls the pokemon API
  const fetchGeneralData = async (pokemonName: string): Promise<Pokemon> => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );

    if (!response.ok) {
      throw new Error(`Pokémon not found: ${pokemonName}`);
    }

    const data: Pokemon = await response.json();
    return data;
  };

  // const fetchAbilityData = async (pokemonName: string): Promise<Pokemon> => {
  //   const response = await fetch(
  //     `https://pokeapi.co/api/v2/ability/${pokemonName.toLowerCase()}`
  //   );

  //   if (!response.ok) {
  //     throw new Error(`Pokémon not found: ${pokemonName}`);
  //   }

  //   const data: Pokemon = await response.json();
  //   return data;
  // };

  // this function handles the Search button
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setError(null);
    setPokeGeneralData(null);
    setLoading(true);

    try {
      const fetchResponse = await fetchGeneralData(pokemonName);
      // const fetchAbilities = await fetchAbilityData("Stench");
      // console.log(fetchAbilities);
      setPokeGeneralData(fetchResponse);
      console.log(fetchResponse);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen bg-[#C3EBCD]">
      {/* form handles the input submission */}
      <form className="pt-40">
        <label htmlFor="name-input">Pokemon name:</label>
        <input
          className="border"
          id="name-input"
          type="text"
          // value={inputValue}
          onChange={(e) => setPokemonName(e.target.value)}
        ></input>
        {/* button to submit */}
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
        {error && <p>{error}</p>}
        {loading && <p className="mt-2 text-gray-700">Loading...</p>}
      </form>
      {pokeGeneralData && !loading && (
        <div className="mt-6">
          <img
            src={pokeGeneralData.sprites.front_default}
            alt={pokeGeneralData.name}
          />
          <img
            src={pokeGeneralData.sprites.front_female}
            alt={pokeGeneralData.name}
          />
          <p className="text-lg capitalize">
            Type: {pokeGeneralData.types[0]?.type?.name}
          </p>

          {pokeGeneralData.abilities.length > 0 &&
            pokeGeneralData.abilities.map((item) => {
              return <p>{item?.ability?.name}</p>;
            })}
        </div>
      )}
    </div>
  );
}

export default Pokedex;
