import { useNavigate } from "react-router-dom";

interface ActivityGridObjectProps {
  activityData: any;
  buttonText: string;
}

function ActivityGridObject({
  activityData,
  buttonText,
}: ActivityGridObjectProps) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/activities/detail/" + activityData.name, {
      replace: true,
      state: { ...activityData },
    });
  };

  return (
    <div className="flex flex-col md:w-[291px] md:h-[481px] w-[calc(50%-1rem)] h-[calc(50%-1rem)] items-center justify-center">
      <div className="md:w-[260px] md:h-[211px] h-[calc(50%-1rem)] md:block hidden rounded-[20px] border-cerBlue border-[1px]">
        {activityData.image && (
          <img
            src={`data:image/png;base64, ${activityData.image}`}
            className="scale-90 w-full h-full"
          />
        )}
      </div>
      <span className="text-[32px]"> {activityData.name.toUpperCase()}</span>
      <button
        className="md:w-[260px] md:h-[47px] w-full h-full rounded-[20px] bg-cerBlue text-center py-2 hover:bg-cerPurple transition-all ease-in-out focus:border-4 focus:border-cerPurple focus:outline-none text-[20px] focus:text-white"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default ActivityGridObject;
