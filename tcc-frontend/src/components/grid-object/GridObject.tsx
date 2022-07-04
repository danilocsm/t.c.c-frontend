interface ItemObjectProps {
  title: string;
  image: string;
  link: string;
  buttonText: string;
}

function GridObject({ title, image, link, buttonText}: ItemObjectProps) {

  const onClick = () => {
    window.location.replace(link);
  };

  return (
    <div className="flex flex-col md:w-[291px] md:h-[481px] w-fit h-fit items-center justify-center overlflow-hidden">
      <img
        src={image}
        className="scale-75 md:w-[270px] md:h-[211px] md:block hidden"
      />
      <span className="text-[32px]"> {title.toUpperCase()}</span>
      <p className="text-[20px] text-center">
        Atividades que podem ser realizadas: exemplo1, exemplo2, exemplo3,
        exemplo4, exemplo5.
      </p>
      <button
        className="md:w-[270px] md:h-[47px] w-fit h-fit rounded-[20px] bg-cerBlue text-center py-2 hover:bg-cerPurple transition-all ease-in-out focus:border-4 focus:border-cerPurple focus:outline-none text-[20px] focus:text-white"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default GridObject;
