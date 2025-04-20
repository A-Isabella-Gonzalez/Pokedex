/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { type Pokemon } from "../types";
import pokedexPic from "../assets/pokedex.png";
import { decimetersToInches } from "../utilities";
import { hectogramsToPounds } from "../utilities";

function Pokedex() {
  // this stores the string in the search bar
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
    console.log(data);
    return data;
  };

  // this function handles the Search button
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setError(null);
    setPokeGeneralData(null);
    setLoading(true);

    try {
      const fetchResponse = await fetchGeneralData(pokemonName);
      setPokeGeneralData(fetchResponse);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" bg-[#81d485]">
      <img className="m-auto w-[380px] pt-12" src={pokedexPic} />
      {/* form handles the input submission */}
      <form className="ml-10 font-abeezee">
        <label htmlFor="name-input z-10 ">Pokemon Name: </label>
        <input
          className="border"
          id="name-input"
          type="text"
          // value={inputValue}
          onChange={(e) => setPokemonName(e.target.value)}
        ></input>
        {/* button to submit */}
        <button disabled={!pokemonName} type="submit" onClick={handleSubmit}>
          Search
        </button>
        {error && <p>{error}</p>}
        {loading && <p className="mt-2 text-gray-700">Loading...</p>}
      </form>
      {/* This would be the pokedex image */}
      <div className="flex h-full place-content-center pb-5">
        <div className="mt-8 mr-10 h-[667px] w-[450px] bg-contain bg-[url(assets/what.png)] flex-none bg-no-repeat">
          <div className="bg-white mt-[157px] ml-[68px] w-[314px] h-[211px] rounded-lg">
            {pokeGeneralData && !loading && (
              <div className="flex place-content-center">
                <img
                  className="h-56"
                  src={pokeGeneralData.sprites.front_default}
                  alt={pokeGeneralData.name}
                />
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 h-[667px] w-[425px] bg-contain bg-[url(assets/what1.png)] flex-none bg-no-repeat"></div>
      </div>
      {/* end of pokedex */}
      {pokeGeneralData && !loading && (
        <div className="mt-6">
          <div className="">
            <p className="pt-3">TYPES:</p>
            {/* this displays the types */}
            {pokeGeneralData.abilities.length > 0 &&
              pokeGeneralData.types.map((item, index) => {
                return <p key={index}>{item?.type?.name}</p>;
              })}

            <p className="pt-3">ABILITIES:</p>
            {/* this displays the abilities */}
            {pokeGeneralData.abilities.length > 0 &&
              pokeGeneralData.abilities.map((item, index) => {
                return <p key={index}>{item?.ability?.name}</p>;
              })}

            <p className="pt-3">MOVES:</p>
            {/* this displays the moves */}
            {pokeGeneralData.moves.length > 0 &&
              pokeGeneralData.moves.slice(0, 5).map((item, index) => {
                return <p key={index}>{item?.move?.name}</p>;
              })}

            <p className="pt-3">HEIGHT:</p>
            {pokeGeneralData.height > 0 &&
              `${Math.floor(decimetersToInches(pokeGeneralData.height))} in`}

            <p className="pt-3">WEIGHT:</p>
            {pokeGeneralData.weight > 0 &&
              `${Math.floor(hectogramsToPounds(pokeGeneralData.weight))} lbs`}
          </div>
        </div>
      )}
    </div>
  );
}

export default Pokedex;
