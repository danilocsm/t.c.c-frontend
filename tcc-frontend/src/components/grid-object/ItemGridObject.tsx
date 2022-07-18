interface ItemObjectProps {
  title: string;
  image: string | null;
  link: string;
  buttonText: string;
}

function ItemGridObject({ title, image, link, buttonText }: ItemObjectProps) {
  const onClick = () => {
    window.location.replace(link);
  };

  return (
    <div className="flex flex-col md:w-[291px] md:h-[481px] w-fit h-fit items-center justify-center">
      <div className="md:w-[260px] md:h-[211px] md:block hidden rounded-[20px] border-cerBlue border-[1px]">
        {image ? (
          <img
            src={`data:image/png;base64, ${image}`}
            className="scale-90 w-full h-full"
          />
        ) : (
          <img
            // src={}
            className="scale-90 w-full h-full"
          />
        )}
      </div>
      <span className="text-[32px]"> {title.toUpperCase()}</span>
      <button
        className="md:w-[260px] md:h-[47px] w-fit h-fit rounded-[20px] bg-cerBlue text-center py-2 hover:bg-cerPurple transition-all ease-in-out focus:border-4 focus:border-cerPurple focus:outline-none text-[20px] focus:text-white"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default ItemGridObject;
