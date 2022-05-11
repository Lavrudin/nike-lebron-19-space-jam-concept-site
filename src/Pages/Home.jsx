import SneakersImage from "../assets/images/Nike_SpaceJam.png";

export default function Home() {
  return (
    <main className="flex gap-20 justify-center pt-32 font-body font-medium">
      <div className="flex flex-col gap-7 max-w-lg">
        <p className="text-2xl text-title-blue ">LeBron 19</p>
        <h1 className="text-4xl	text-white">
          A new legacy <br />
          for Sneakers
        </h1>
        <p className="font-normal text-white text-lg	">
          Game-changing days are within reach, you just need the right setup to
          back you up. Discover new confort <br /> standards through a unique
          design.
        </p>
        <div className="flex justify-center gap-10">
          <button className="bg-header-purple text-xs text-white font-medium h-12 w-48 rounded transition ease-in-out duration-500 hover:brightness-90">
            GET NOW
          </button>
          <button className="text-white text-xs font-medium border border-white h-12 w-48 rounded transition ease-in-out duration-500 hover:brightness-90">
            LEARN MORE
          </button>
        </div>
      </div>
      <img src={SneakersImage} alt="Tênis" />
    </main>
  );
}
