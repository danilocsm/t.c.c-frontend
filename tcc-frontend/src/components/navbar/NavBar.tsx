import HomeLogo from "../HomeLogo";
import NavBarItem from "./NavBarItem";
import { Menu } from "@headlessui/react";
import DropMenu from "../DropMenu";

const navItems = ["Atividades", "Projeto", "Depoimentos", "Dúvidas"];
const utilsItems = [
  { title: "Brinquedos", href: "#" },
  { title: "Mobiliário", href: "#" },
  { title: "Vestuário", href: "#" },
  { title: "Alimentação", href: "#" },
];

function NavBar() {
  return (
    <nav>
      <div className="relative flex flex-row justify-start gap-2 items-center w-screen h-[89px] bg-cerPurple mx-auto sm:px-6 opacity-100">
        <HomeLogo />
        <div className="items-center">
          <ul className="flex flex-row items-center gap-7">
            <li>
              <DropMenu title="Utensílios" items={utilsItems} />
            </li>
            {navItems.map((navItem) => {
              return <NavBarItem text={navItem} href="#" />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
