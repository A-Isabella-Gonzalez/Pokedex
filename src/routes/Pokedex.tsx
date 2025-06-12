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
      <img className="m-auto w-[380px] pt-13" src={pokedexPic} />
      {/* form handles the input submission */}
      <form className="ml-10 font-abeezee font-bold">
        <label htmlFor="name-input z-10">Pokemon Name or Number: </label>
        <input
          className="border bg-white mr-2 font-normal"
          id="name-input"
          type="text"
          // value={inputValue}
          onChange={(e) => setPokemonName(e.target.value)}
        ></input>
        {/* button to submit */}
        <button
          className="font-normal rounded-full text-white bg-[#3a3a3a] w-18 h-7  border-1 border-black hover:bg-[#bebebe] hover:text-black hover:cursor-pointer"
          disabled={!pokemonName}
          type="submit"
          onClick={handleSubmit}
        >
          Search
        </button>
        {error && <p>{error}</p>}
        {loading && <p className="mt-2 text-gray-700">Loading...</p>}
      </form>
      {/* This would be the pokedex image */}
      <div className="flex h-full place-content-center pb-5">
        <div className="mt-8 mr-10 h-[667px] w-[450px] bg-contain bg-[url(assets/what.png)] flex-none bg-no-repeat">
          <div className="bg-white mt-[157px] ml-[68px] w-[314px] h-[211px] rounded-lg border-1">
            {pokeGeneralData && !loading && (
              <div className="flex place-content-center">
                <img
                  className="h-46 mt-4 place-content-stretch"
                  src={pokeGeneralData.sprites.front_default}
                  alt={pokeGeneralData.name}
                />
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 h-[667px] w-[425px] bg-contain bg-[url(assets/what1.png)] flex-none bg-no-repeat">
          <div className="bg-[#bbbbbb] mt-[45px] ml-[53px] w-[318px] h-[180px] rounded-lg border-1">
            {pokeGeneralData && !loading && (
              <div>
                <div className="inline-flex">
                  <div className="pt-4 pl-10">
                    <p className="font-abeezee font-bold">ABILITIES:</p>
                    {/* this displays the abilities */}
                    {pokeGeneralData.abilities.length > 0 &&
                      pokeGeneralData.abilities.map((item, index) => {
                        return (
                          <p className="font-abeezee capitalize" key={index}>
                            {item?.ability?.name}
                          </p>
                        );
                      })}
                  </div>

                  <div className="pl-6 ">
                    <p className="pt-4 font-abeezee font-bold">MOVES:</p>
                    {/* this displays the moves */}
                    {pokeGeneralData.moves.length > 0 &&
                      pokeGeneralData.moves.slice(0, 5).map((item, index) => {
                        return (
                          <p className="font-abeezee capitalize" key={index}>
                            {item?.move?.name}
                          </p>
                        );
                      })}
                  </div>
                </div>

                <div className="inline-flex mt-18">
                  <div className="pl-13 pr-6">
                    <p className="pt-3 font-abeezee font-bold">TYPES:</p>
                    {/* this displays the types */}
                    {pokeGeneralData.abilities.length > 0 &&
                      pokeGeneralData.types.map((item, index) => {
                        return (
                          <p className="font-abeezee capitalize" key={index}>
                            {item?.type?.name}
                          </p>
                        );
                      })}
                  </div>

                  <div className="pr-5">
                    <p className="pt-3 font-abeezee font-bold">HEIGHT:</p>
                    {pokeGeneralData.height > 0 &&
                      `${Math.floor(
                        decimetersToInches(pokeGeneralData.height)
                      )} in`}
                  </div>

                  <div>
                    <p className="pt-3 font-abeezee font-bold">WEIGHT:</p>
                    {pokeGeneralData.weight > 0 &&
                      `${Math.floor(
                        hectogramsToPounds(pokeGeneralData.weight)
                      )} lbs`}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* end of pokedex */}
    </div>
  );
}

export default Pokedex;
