interface AddTestimonialButtonProps {
  onClick: () => void;
}

function AddTestimonialButton({ onClick }: AddTestimonialButtonProps) {
  return (
    <div className="w-screen flex flex-col h-fit justify-center items-center gap-2 py-2 my-4">
      <h2 className="md:text-[32px] text-center text-[26px]">
        PARTICIPE DA NOSSA COMUNIDADE
      </h2>
      <button
        className="md:w-[570px] md:h-[60px] rounded-[20px] text-center text-white md:text-[20px] bg-cerBlue shadow-cerShadow"
        onClick={() => onClick()}
      >
        CLIQUE AQUI PARA ENVIAR SEU DEPOIMENTO
      </button>
    </div>
  );
}

export default AddTestimonialButton;
