import { useNavigate } from "react-router-dom";

interface SectionContainerProps {
  name: string;
  brief: string;
  page: string;
}

function SectionContainer({ name, brief, page }: SectionContainerProps) {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate(page, { replace: true });
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-[20px] bg-cerGreen w-[calc(70%-2rem)] h-[calc(25vh-2rem)] px-2 gap-y-2">
      <p className="text-[20px] text-center lg:block hidden">{brief}</p>
      <button
        onClick={onButtonClick}
        className="flex items-center justify-center bg-cerPurple rounded-[20px] w-[calc(50%-2rem)] h-[calc(25%-1rem)] hover:bg-cerBlue focus:outline-none focus:bg-cerBlue focus:border-[1px] focus: border-white"
      >
        {name}
      </button>
    </div>
  );
}

export default SectionContainer;
