interface NavBarItemProps {
  text: string;
  href: string;
}

function NavBarItem(props: NavBarItemProps) {
  return (
    <a
      href="#"
      className="text-white font-grandstander font-bold hover:opacity-20 focus:outline-none focus:underline underline-offset-2"
    >
      {props.text}
    </a>
  );
}

export default NavBarItem;
