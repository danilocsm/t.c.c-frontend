import { RadioGroup } from "@headlessui/react";
import { useEffect, useState } from "react";

interface ItemsOptionsLayoutProps {
  onOptionSelected: (selected: string) => void;
  autoSelectFirst: boolean;
}

const options = ["Brinquedos", "Mobiliário", "Vestuário", "Alimentação"];

function ItemsOptionsLayout({
  onOptionSelected,
  autoSelectFirst,
}: ItemsOptionsLayoutProps) {
  const [selected, setSelected] = useState<string>(
    autoSelectFirst ? "Brinquedos" : ""
  );

  useEffect(() => {
    onOptionSelected(selected);
  }, [selected]);

  return (
    <RadioGroup
      value={selected}
      onChange={setSelected}
      className="w-screen h-fit px-6"
    >
      <div className="grid grid-cols-2 gap-2">
        {options.map((option) => {
          return (
            <RadioGroup.Option
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
              {({ active, checked }) => (
                <>
                  <div className="flex w-full items-center justify-between">
                    <div className="text-[20px]">{option}</div>
                    {checked && (
                      <div className="shrink-0 text-black">
                        <CheckIcon className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          );
        })}
      </div>
    </RadioGroup>
  );
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#000" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#000000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ItemsOptionsLayout;
