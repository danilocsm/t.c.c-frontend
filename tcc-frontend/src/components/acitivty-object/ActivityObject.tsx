interface ActivityObjectProps {
  name: string;
  description: string;
  img: string;
}

function ActivityObject({ name, description, img }: ActivityObjectProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img src={img} className="scale-85" />
        <div className="w-fit h-fit">
          <h2 className="text-center text-[30px]">{name}</h2>
          <p className="text-center text-[18px]">{description}</p>
        </div>
      </div>
    </>
  );
}

export default ActivityObject;
