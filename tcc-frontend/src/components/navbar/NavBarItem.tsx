interface NavBarItemProps {
  text: string;
  href: string;
};

function NavBarItem(props: NavBarItemProps) {
  return (
    <li className="">
      <a href="#" className="text-navBarFontColor1 font-grandstander font-bold hover:opacity-20 focus:outline-none focus:font-extrabold">{props.text}</a>
    </li>
  );
}

export default NavBarItem;
