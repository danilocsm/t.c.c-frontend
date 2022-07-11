import { RadioGroup } from "@headlessui/react";
import { useEffect, useState } from "react";

interface OptionsLayoutProps {
  onSelected: (selected: string) => void;
}

const options = [
  "NOVA ATIVIDADE",
  "NOVO UTENSÍLIO",
  "LISTA DE ATIVIDADES",
  "LISTA DE UTENSÍLIOS",
];

function OptionsLayout({ onSelected }: OptionsLayoutProps) {
  const [selected, setSelected] = useState<string>("NOVA ATIVIDADE");

  useEffect(() => {
    onSelected(selected);
  }, [selected]);
  return (
    <RadioGroup
      value={selected}
      onChange={setSelected}
      className="w-screen h-fit px-6 mt-6"
    >
      <div className="grid grid-cols-2 gap-2">
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
            relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
              }
            >
              <div className="w-full flex items-center justify-center text=[16px]">
                {option}
              </div>
            </RadioGroup.Option>
          );
        })}
      </div>
    </RadioGroup>
  );
}

export default OptionsLayout;
