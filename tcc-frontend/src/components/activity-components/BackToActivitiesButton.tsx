import { useNavigate } from "react-router-dom";

function BackToActivitiesButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/activities");
  };
  return (
    <div className="w-screen flex items-center justify-center my-6">
      <button
        onClick={handleClick}
        className="rounded-[20px] bg-cerBlue md:w-[447px] md:h-[38px] w-1/4 h-1/7 text-white py-2 focus:outline-none hover:bg-cerPurple focus:border-cerPurple focus:border-2"
      >
        VOLTAR PARA PÁGINA DE ATIVIDADES
      </button>
    </div>
  );
}

export default BackToActivitiesButton;
