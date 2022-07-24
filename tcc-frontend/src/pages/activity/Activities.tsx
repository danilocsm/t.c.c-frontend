import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ActivityGridObject from "../../components/grid-object/ActivityGridObject";
import LoadingIcon from "../../components/LoadingIcon";
import SearchBar from "../../components/searchbar/SearchBar";
import { PublicApi } from "../../lib/api";

function Activities() {
  const [activities, setActivities] = useState([]);
  const [isGettingActivities, setIsGettingActivities] = useState(false);

  const fetchActivities = async () => {
    setIsGettingActivities(true);
    try {
      const response = await PublicApi.get("activities/all");
      if (response.data) {
        setActivities(response.data);
        toast.success("Atividades recuperadas com sucesso!");
      }
    } catch (error: AxiosError | any) {
      toast.error("Erro recuperando as atividades");
    } finally {
      setIsGettingActivities(false);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    fetchActivities();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="w-100vw grid place-items-center">
      <h1 className="text-center text-[36px] mt-2">ATIVIDADES</h1>
      <div className="w-screen flex h-1/7 justify-center items-center overflow-x-hidden">
        <p className="text-center text-[20px] px-[135px]">
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
        </p>
      </div>
      <div className="w-screen flex flex-col items-center justify-center mt-4">
        <h1 className="font-grandstander text-[30px] "> FAÇA SUA BUSCA </h1>
      </div>
      <div className="flex flex-col items-center justify-center w-screen h-fit">
        <SearchBar />
      </div>
      <div className="w-screen h-fit flex flex-col items-center justify-center md:pl-10 mb-4 overflow-x-hidden">
        <h1 className="text-[36px] py-6">ATIVDADES DISPONÍVEIS</h1>
        {isGettingActivities ? (
          <div className="justify-self-center mt-6">
            <LoadingIcon />
          </div>
        ) : activities.length === 0 ? (
          <h1 className="text-[36px] mt-4 text-center">{`Nenhuma atividade cadastrada.`}</h1>
        ) : (
          <div className="grid lg:grid-cols-4 grid-cols-2 w-screen place-items-center gap-x-14 px-8 overflow-x-hidden">
            {activities.map((activity: any) => {
              return (
                <ActivityGridObject
                  activityData={activity}
                  buttonText="saiba mais"
                  key={activity.name}
                />
              );
            })}
          </div>
        )}
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default Activities;
