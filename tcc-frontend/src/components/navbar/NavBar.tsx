import HomeLogo from "../HomeLogo";
import NavBarItem from "./NavBarItem";
import DropMenu from "../DropMenu";

const navItems = [
  { title: "Utensílios", href:"/items"},
  { title: "Atividades", href: "/activities" },
  { title: "Projeto", href: "/about" },
  { title: "Depoimentos", href: "/testimonials" },
  { title: "Dúvidas", href: "/help" },
];

function NavBar() {
  return (
    <nav>
      <div className="static flex flex-row justify-start gap-2 items-center w-screen h-[72px] bg-cerBlue mx-auto sm:px-6 opacity-100 rounded-b-[20px] shadow-cerShadow">
        <HomeLogo />
        <div className="hidden md:block">
          <div className="flex flex-row items-center gap-7">
            {navItems.map((navItem) => {
              return <NavBarItem text={navItem.title} href={navItem.href} />;
            })}
          </div>
        </div>
        <div className="md:hidden absolute right-14 top-6">
          <DropMenu title="Menu" items={navItems} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
