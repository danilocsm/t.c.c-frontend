import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../../lib/api";
import LoadingIcon from "../LoadingIcon";
import ActivityEditForm from "./ActivityEditForm";

function ActivitiesDashboard() {
  const [activities, setActivities] = useState([]);
  const [isFecthingData, setIsFecthingData] = useState(false);

  const fetchActivities = async () => {
    setIsFecthingData(true);
    try {
      const response = await api.get("/activities/all");
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
      <h1 className="text-[36px]">ATIVIDADES REGISTRADAS:</h1>
      {(isFecthingData && <LoadingIcon />) ||
        (activities.length > 0 &&
          activities.map((activity: any) => {
            return <ActivityEditForm {...activity} key={activity.id}/>;
          })) || <h1 className="text-[36px]">Sem atividades cadastradas</h1>}
    </div>
  );
}

export default ActivitiesDashboard;
