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
    <div className="flex flex-[calc(50%-1rem)] flex-col items-center justify-center rounded-[20px] bg-cerGreen w-full md:w-[calc(70%-2rem)] h-[calc(30vh-2rem)] md:px-2 md:gap-y-2 shadow-cerShadow">
      <p className="2xl:text-[20px] md:flex justify-center items-center text-center hidden text-[16px] md:h-[calc(65%-1rem)]">
        {brief}
      </p>
      <button
        onClick={onButtonClick}
        className=" bg-cerPurple rounded-[20px] w-full h-full md:w-[calc(50%-2rem)] md:h-[calc(35%-1rem)] hover:bg-cerBlue focus:outline-none focus:bg-cerBlue focus:border-[1px] focus: border-white"
      >
        {name}
      </button>
    </div>
  );
}

export default SectionContainer;
