interface NavBarItemProps {
  text: string;
  href: string;
};

function NavBarItem(props: NavBarItemProps) {
  return (
    <li className="focus:text-underline-offset-2">
      <a href="#" className="text-navBarFontColor1 font-grandstander font-bold hover:opacity-20 focus:outline-none focus:underline underline-offset-2">{props.text}</a>
    </li>
  );
}

export default NavBarItem;
