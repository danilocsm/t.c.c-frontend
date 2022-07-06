interface SearchButtonProps {
  onClick: () => void;
}

function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <button
      className="md:w-[170px] md:h-[61px] w-1/4 h-1/7 rounded-[20px] bg-cerPurple border-2 hover:bg-white focus:border-black focus:outline-1 shadow-cerShadow"
      onClick={() => {
        onClick();
      }}
    >
      Buscar
    </button>
  );
}

export default SearchButton;
