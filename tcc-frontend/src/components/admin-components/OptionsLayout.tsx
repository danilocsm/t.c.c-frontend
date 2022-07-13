import { RadioGroup } from "@headlessui/react";
import { useEffect, useState } from "react";
import CheckIcon from "../CheckIcon";

interface OptionsLayoutProps {
  onSelected: (selected: string) => void;
}

const options = [
  "DÚVIDAS",
  "NOVA ATIVIDADE",
  "NOVO UTENSÍLIO",
  "LISTA DE ATIVIDADES",
  "LISTA DE UTENSÍLIOS",
];

function OptionsLayout({ onSelected }: OptionsLayoutProps) {
  const [selected, setSelected] = useState<string>("DÚVIDAS");

  useEffect(() => {
    onSelected(selected);
  }, [selected]);

  return (
    <RadioGroup
      value={selected}
      onChange={setSelected}
      className="w-screen h-fit px-6 mt-6"
    >
      <div className="grid grid-cols-2 auto-rows-auto gap-2">
        {options.map((option) => {
          return (
            <RadioGroup.Option
              key={option}
              value={option}
              className={({ active, checked }) =>
                `${
                  active
                    ? "ring-2 ring-white ring-opacity-60 ring-offset-2"
                    : ""
                }
          ${checked ? "bg-cerPurple" : "bg-cerBlue"}
            relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none col-span-2`
              }
            >
              {({ active, checked }) => (
                <div className="flex w-full items-center justify-between">
                  <div className="text-[20px]">{option}</div>
                  {checked && (
                    <div className="shrink-0 text-black">
                      <CheckIcon className="h-6 w-6" />
                    </div>
                  )}
                </div>
              )}
            </RadioGroup.Option>
          );
        })}
      </div>
    </RadioGroup>
  );
}

export default OptionsLayout;
