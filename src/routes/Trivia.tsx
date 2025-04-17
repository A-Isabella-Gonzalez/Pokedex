import triviaPic from "../assets/trivia.png";

function Trivia() {
  const handleArrowClick = (e: any) => {
    e.preventDefault();
    console.log("Hello Salem");
  };
  return (
    <div className="h-screen w-screen bg-[#fff9a9]">
      <img className="m-auto w-[350px] pt-13" src={triviaPic} />
      <section className="flex flex-col items-center">
        <div className="flex items-center">
          <div className="w-24 flex place-content-center h-[39px]">
            <button
              className="rounded-full bg-amber-600"
              onClick={handleArrowClick}
            >
              arrow
            </button>
          </div>
          <div>
            <div className="h-52 w-96 bg-[#D9D9D9]"></div>
          </div>
          <div className="w-24 flex place-content-center h-[39px]">
            <button
              className="rounded-full bg-amber-600"
              onClick={handleArrowClick}
            >
              arrow
            </button>
          </div>
        </div>
        <div className="h-6 mt-5 w-96 bg-[#D9D9D9] "></div>
      </section>
    </div>
  );
}

export default Trivia;
