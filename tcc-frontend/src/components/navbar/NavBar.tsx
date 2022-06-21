import HomeLogo from "../HomeLogo";
import NavBarItem from "./NavBarItem";
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
      <div className="relative flex flex-row justify-start gap-2 items-center w-screen h-[72px] bg-cerBlue mx-auto sm:px-6 opacity-100 rounded-b-[20px]">
        <HomeLogo />
        <DropMenu title="Utensílios" items={utilsItems} />
        <div className="hidden md:block">
          <div className="flex flex-row items-center gap-7">
            {navItems.map((navItem) => {
              return <NavBarItem text={navItem} href="#" />;
            })}
          </div>
        </div>
        <div className="flex md:hidden">
          <DropMenu
            title="Menu"
            items={[
              { title: "Atividades", href: "#" },
              { title: "Projeto", href: "#" },
              { title: "Depoimentos", href: "#" },
              { title: "Dúvidas", href: "#" },
            ]}
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
