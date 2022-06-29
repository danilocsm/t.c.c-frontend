interface SearchButtonProps {
  onClick: () => void;
}

function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <button
      className="ml-2 mt-4 md:w-[170px] md:h-[61px] w-1/4 h-1/3 rounded-[20px] bg-cerPurple  border-2 hover:bg-white focus:border-black focus:outline-1"
      onClick={() => {
        onClick();
      }}
    >
      Ir
    </button>
  );
}

export default SearchButton;
