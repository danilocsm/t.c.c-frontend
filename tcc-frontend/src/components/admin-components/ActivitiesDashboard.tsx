import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useForceUpdate } from "../../hooks/custom.hooks";
import { PublicApi } from "../../lib/api";
import LoadingIcon from "../LoadingIcon";
import UpdateButton from "../UpdateButton";
import ActivityEditForm from "./ActivityEditForm";

function ActivitiesDashboard() {
  const [activities, setActivities] = useState([]);
  const [isFecthingData, setIsFecthingData] = useState(false);
  const forceUpdate = useForceUpdate();

  const fetchActivities = async () => {
    setIsFecthingData(true);
    try {
      const response = await PublicApi.get("/activities/all");
      setActivities(response.data);
      toast.success("Atividades recuperadas com sucesso!");
    } catch (error: any) {
      toast.error("Erro ao tentar recuperar atividades");
    } finally {
      setIsFecthingData(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div className="w-screen flex flex-col items-center justify-center gap-y-8">
      <div className="relative grid grid-flow-col place-items-center w-full">
        <h1 className="text-[36px]">ATIVIDADES REGISTRADAS:</h1>
        <UpdateButton
          onClick={() => fetchActivities()}
          style={`top-0 right-4 bg-cerBlue rounded-[20px] h-[calc(10vh-2rem)] w-[calc(15vw-2rem)] hover:bg-cerPurple hover:text-white focus:outline-none focus:bg-cerPurple focus:text-white focus:border-[1px] focus:border-white`}
        />
      </div>
      {(isFecthingData && <LoadingIcon />) ||
        (activities.length > 0 &&
          activities.map((activity: any) => {
            return (
              <ActivityEditForm
                {...activity}
                sideEffect={forceUpdate}
                key={activity.id}
              />
            );
          })) || <h1 className="text-[36px]">Sem atividades cadastradas</h1>}
    </div>
  );
}

export default ActivitiesDashboard;
