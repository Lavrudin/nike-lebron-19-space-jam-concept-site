import NikeLogo from "../../assets/images/nikelogo.png";
import Search from "../../assets/images/search.png";
import ArrowDown from "../../assets/images/arrowdown.png";

export default function Header() {
  return (
    <header className="flex items-center justify-center gap-10 bg-header-color p-5 font-body text-white font-medium ">
      <picture className="flex items-center">
        <img className="cursor-pointer" src={NikeLogo} alt="Logo da Nike" />
      </picture>
      <ul className="flex">
        <li className="flex items-center gap-2 cursor-pointer">
          MEN
          <img src={ArrowDown} alt="" />
        </li>
        <li className="flex items-center gap-2 ml-20 cursor-pointer">
          WOMEN
          <img src={ArrowDown} alt="" />
        </li>
        <li className="flex items-center gap-2 ml-20 cursor-pointer">
          KIDS
          <img src={ArrowDown} alt="" />
        </li>
        <li className="flex items-center gap-2 ml-20 cursor-pointer">
          SNKRS
          <img src={ArrowDown} alt="" />
        </li>
      </ul>
      <div className="flex gap-10">
        <button className="bg-button-orange p-3 px-8 font-medium rounded drop-shadow-lg">
          NIKE STORE
        </button>
        <button className="flex items-center justify-center font-medium gap-2">
          LOGIN
          <img src={Search} alt="Search" />
        </button>
      </div>
    </header>
  );
}
