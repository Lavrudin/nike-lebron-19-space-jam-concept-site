import NikeLogo from "../../assets/images/nikelogo.png";
import SearchImage from "../../assets/images/search.png";
import ArrowDown from "../../assets/images/arrowdown.png";

export default function Header() {
  return (
    <header className="flex items-center justify-center gap-10 bg-header-purple p-5 font-body text-white font-medium ">
      <picture>
        <img className="cursor-pointer" src={NikeLogo} alt="Logo da Nike" />
      </picture>
      <ul className="flex">
        <li className="flex items-center gap-2 cursor-pointer">
          MEN
          <img src={ArrowDown} alt="Seta para baixo" />
        </li>
        <li className="flex items-center gap-2 ml-20 cursor-pointer">
          WOMEN
          <img src={ArrowDown} alt="Seta para baixo" />
        </li>
        <li className="flex items-center gap-2 ml-20 cursor-pointer">
          KIDS
          <img src={ArrowDown} alt="Seta para baixo" />
        </li>
        <li className="flex items-center gap-2 ml-20 cursor-pointer">
          SNKRS
          <img src={ArrowDown} alt="Seta para baixo" />
        </li>
      </ul>
      <div className="flex gap-10">
        <a href="https://www.nike.com.br/" target="_blank">
          <button className="bg-button-orange drop-shadow-lg p-3 px-8 font-medium rounded transition ease-in-out duration-500 hover:brightness-90">
            NIKE STORE
          </button>
        </a>
        <button className="flex items-center font-medium gap-2">
          LOGIN
          <img className="mb-1" src={SearchImage} alt="Lupa" />
        </button>
      </div>
    </header>
  );
}
