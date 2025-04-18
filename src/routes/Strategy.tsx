import { useState } from "react";
import strategyPic from "../assets/strategy.png";
import grassB from "../assets/Grass-Big.png";
import grassS from "../assets/Grass-Small.png";
import fireB from "../assets/Fire-Big.png";
import fireS from "../assets/Fire-Small.png";
import waterB from "../assets/Water-Big.png";
import waterS from "../assets/Water-Small.png";
import electricB from "../assets/Electric-Big.png";
import electricS from "../assets/Electric-Small.png";
import flyingB from "../assets/Flying-Big.png";
import flyingS from "../assets/Flying-Small.png";
import normalB from "../assets/Normal-Big.png";
import normalS from "../assets/Normal-Small.png";
import groundB from "../assets/Ground-Big.png";
import groundS from "../assets/Ground-Small.png";
import rockB from "../assets/Rock-Big.png";
import rockS from "../assets/Rock-Small.png";
import psychicB from "../assets/Psychic-Big.png";
import psychicS from "../assets/Psychic-Small.png";
import bugB from "../assets/Bug-Big.png";
import bugS from "../assets/Bug-Small.png";
import poisonB from "../assets/poison-Big.png";
import poisonS from "../assets/Poison-Small.png";
import fightingB from "../assets/Fighting-Big.png";
import fightingS from "../assets/Fighting-Small.png";
import iceB from "../assets/Ice-Big.png";
import iceS from "../assets/Ice-Small.png";
import ghostB from "../assets/Ghost-Big.png";
import ghostS from "../assets/Ghost-Small.png";
import darkB from "../assets/Dark-Big.png";
import darkS from "../assets/Dark-Small.png";
import steelB from "../assets/Steel-Big.png";
import steelS from "../assets/Steel-Small.png";
import dragonB from "../assets/Dragon-Big.png";
import dragonS from "../assets/Dragon-Small.png";
import fairyB from "../assets/Fairy-Big.png";
import fairyS from "../assets/Fairy-Small.png";

function Strategy() {
  const [strategy, setStrategy] = useState(grassB);

  return (
    <div className="h-screen w-screen bg-[#ffb4b4]">
      <img className="m-auto w-[500px] pt-11" src={strategyPic} />
      <div className="flex">
        <img className="h-[450px] w-[450px] mt-1 ml-[275px]" src={strategy} />
        <div className="grid-cols-1">
          <button
            onClick={() => {
              setStrategy(grassB);
            }}
          >
            <img className="h-[65px] w-[65px] mb-1 ml-[125px]" src={grassS} />
          </button>
          <button
            onClick={() => {
              setStrategy(fireB);
            }}
          >
            <img className="h-[65px] w-[65px] mb-1 ml-[20px]" src={fireS} />
          </button>
          <button
            onClick={() => {
              setStrategy(waterB);
            }}
          >
            <img className="h-[65px] w-[65px] mb-1 ml-[20px]" src={waterS} />
          </button>
          <button
            onClick={() => {
              setStrategy(electricB);
            }}
          >
            <img className="h-[65px] w-[65px] mb-1 ml-[20px]" src={electricS} />
          </button>
          <button
            onClick={() => {
              setStrategy(flyingB);
            }}
          >
            <img
              className="h-[65px] w-[65px] mt-20 ml-[20px] mb-1 mr-[200px]"
              src={flyingS}
            />
          </button>
          <button
            onClick={() => {
              setStrategy(normalB);
            }}
          >
            <img
              className="h-[65px] w-[65px] mt-2 mb-1 ml-[125px]"
              src={normalS}
            />
          </button>
          <button
            onClick={() => {
              setStrategy(groundB);
            }}
          >
            <img
              className="h-[65px] w-[65px] mt-2 mb-1 ml-[20px]"
              src={groundS}
            />
          </button>
          <button
            onClick={() => {
              setStrategy(rockB);
            }}
          >
            <img
              className="h-[65px] w-[65px] mt-2 mb-1 ml-[20px]"
              src={rockS}
            />
          </button>
          <button
            onClick={() => {
              setStrategy(psychicB);
            }}
          >
            <img
              className="h-[65px] w-[65px] mt-2 mb-1 ml-[20px]"
              src={psychicS}
            />
          </button>
          <button
            onClick={() => {
              setStrategy(bugB);
            }}
          >
            <img
              className="h-[65px] w-[65px] mt-2 mb-1 ml-[20px] mr-[200px]"
              src={bugS}
            />
          </button>
          <button
            onClick={() => {
              setStrategy(poisonB);
            }}
          >
            <img
              className="h-[65px] w-[65px] mt-2 mb-1 ml-[125px]"
              src={poisonS}
            />
          </button>
          <button
            onClick={() => {
              setStrategy(fightingB);
            }}
          >
            <img
              className="h-[65px] w-[65px] mt-2 mb-1 ml-[20px]"
              src={fightingS}
            />
          </button>
          <button
            onClick={() => {
              setStrategy(iceB);
            }}
          >
            <img className="h-[65px] w-[65px] mt-2 mb-1 ml-[20px]" src={iceS} />
          </button>
          <button
            onClick={() => {
              setStrategy(ghostB);
            }}
          >
            <img
              className="h-[65px] w-[65px] mt-2 mb-1 ml-[20px]"
              src={ghostS}
            />
          </button>
          <button
            onClick={() => {
              setStrategy(darkB);
            }}
          >
            <img
              className="h-[65px] w-[65px] mt-2 mb-1 ml-[20px] mr-[200px]"
              src={darkS}
            />
          </button>
          <button
            onClick={() => {
              setStrategy(steelB);
            }}
          >
            <img
              className="h-[65px] w-[65px] mt-2 mb-3 ml-[125px]"
              src={steelS}
            />
          </button>
          <button
            onClick={() => {
              setStrategy(dragonB);
            }}
          >
            <img
              className="h-[65px] w-[65px] mt-2 mb-3 ml-[20px]"
              src={dragonS}
            />
          </button>
          <button
            onClick={() => {
              setStrategy(fairyB);
            }}
          >
            <img
              className="h-[65px] w-[65px] mt-2 mb-3 ml-[20px]"
              src={fairyS}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Strategy;
