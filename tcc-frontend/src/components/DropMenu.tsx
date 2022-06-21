import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

interface DropMenuProps {
  title: string;
  items: { title: string; href: string }[];
}

function DropMenu(props: DropMenuProps) {
  return (
    <div>
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button className="inline-flex w-full text-white font-grandstander font-bold focus:outline-none focus:underline underline-offset-2 hover:opacity-20">
            {props.title}
            <ChevronDownIcon
              className="mt-[3px] h-5 w-5 text-white hover:text-navBarFontColor1"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute top-[55px] left-[-30px] w-[164px] h-[152px] rounded-md bg-cerBlue focus:outline-none">
            {props.items.map((item) => {
              return (
                <div className="w-full h-1/4 pt-2 border-b-[1px] border-zinc-100">
                  <Menu.Item>
                    {({ active }) => (
                      <a className={`${active ? 'underline underline-offset-2' : ''} flex flex-col items-center hover:opacity-20 text-white font-grandstander font-bold`}>
                        {item.title}
                      </a>
                    )}
                  </Menu.Item>
                </div>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default DropMenu;
