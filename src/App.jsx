import Sneakers from "./assets/images/Nike_SpaceJam.png";

export default function App() {
  return (
    <main className="flex items-center justify-center font-body font-medium">
      <div className="flex flex-col gap-5 max-w-md">
        <p className="text-2xl text-title-blue ">LeBron 19</p>
        <h1 className="text-4xl	text-white">
          A new legacy <br />
          for Sneakers
        </h1>
        <p className="font-normal text-white text-lg	">
          Game-changing days are within reach, you just need the right setup to
          back you up. Discover new confort standards through a unique design.
        </p>
        <div className="flex gap-10">
          <button className="bg-button-purple text-xs text-white font-medium p-3 px-16 rounded">
            GET NOW
          </button>
          <button className="text-white text-xs font-medium border border-white p-3 px-16 rounded">
            LEARN MORE
          </button>
        </div>
      </div>
      <picture>
        <img className="data-tilt" src={Sneakers} alt="" />
      </picture>
    </main>
  );
}
