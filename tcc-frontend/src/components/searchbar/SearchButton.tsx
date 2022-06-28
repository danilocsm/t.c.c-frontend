interface SearchButtonProps {
  onClick: () => void;
}

function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <button
      className="ml-2 mt-2 md:w-1/12 w-3/12 rounded-[20px] bg-cerPurple  border-2 hover:bg-white focus:border-black focus:outline-1"
      onClick={() => {
        onClick();
      }}
    >
      Ir
    </button>
  );
}

export default SearchButton;
