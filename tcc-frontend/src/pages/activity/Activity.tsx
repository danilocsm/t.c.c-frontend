import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router";
import ActivityObject from "../../components/activity-components/ActivityObject";
import BackToActivitiesButton from "../../components/activity-components/BackToActivitiesButton";
import Gallery from "../../components/gallery/Gallery";
import LoadingIcon from "../../components/LoadingIcon";
import { api } from "../../lib/api";

type ActivityDTO = {
  id: string;
  name: string;
  description: string;
  difficulty: string;
  illnesses: string;
  image: string;
  observations: string;
  items: any[];
};

function Activity() {
  const activity: ActivityDTO = useLocation().state as ActivityDTO;
  const [activityObjects, setActivitytObjects] = useState<any[]>([]);
  const [isFecthingData, setIsFetchingData] = useState(false);

  const fetchExtraData = async () => {
    setIsFetchingData(true);
    console.log(activity);
    try {
      const response1 = await api.get(
        "/activities/" + activity.name + "/getObjects"
      );
      setActivitytObjects(response1.data);
    } catch (error) {
      toast.error("Falha ao carregar dados");
    } finally {
      setIsFetchingData(false);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    fetchExtraData();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <div className="w-100vw grid items-center justify-center">
        <h1 className="mt-4 mb-4 text-[36px] text-center">
          {activity.name.toUpperCase()}
        </h1>
        <div className="w-screen flex flex-col items-center justify-center text-center">
          <p className="pl-2 pr-2">{activity.description}</p>
          <h2 className="mt-2">
            <span className="font-bold">Síndromes e doenças em foco:</span>{" "}
            {isFecthingData ? (
              <LoadingIcon />
            ) : activity.illnesses ? (
              <span>{activity.illnesses}</span>
            ) : (
              <span>Sem doenças cadastradas</span>
            )}
          </h2>
        </div>
        <div className="flex w-screen items-center justify-center">
          <img src={`data:image/png;base64,${activity.image}`} />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="mt-6 text-[30px] text-center">
            UTENSÍLIOS QUE PODEM AUXILIAR:
          </h2>
          <Gallery className={""}>
            {isFecthingData ? (
              <LoadingIcon />
            ) : activityObjects.length > 0 ? (
              activityObjects.map((object) => {
                return (
                  <ActivityObject
                    name={object.name.toUpperCase()}
                    description={object.description}
                    img={object.imageUrl}
                  />
                );
              })
            ) : (
              <h1>Sem utensílios cadastrados para esta atividade</h1>
            )}
          </Gallery>
        </div>
        <h2 className="mt-4 text-[30px] text-center">
          OBSERVAÇÕES IMPORTANTES:
        </h2>
        <p className="mt-2 mb-4 text-center pl-2 pr-2">
          {activity.observations}
        </p>
        <BackToActivitiesButton />
        <Toaster position="top-right" />
      </div>
    </>
  );
}

export default Activity;
