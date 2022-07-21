import { useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForceUpdate } from "../../hooks/custom.hooks";
import { PublicApi } from "../../lib/api";
import LoadingIcon from "../LoadingIcon";
import UpdateButton from "../UpdateButton";
import DoubtCard from "./DoubtCard";

function DoubtsDashboard() {
  const [doubts, setDoubts] = useState<any[]>([]);
  const [isFetchingData, setIsFetchingData] = useState(false);

  const fetchDoubts = async () => {
    setIsFetchingData(true);
    try {
      const response = await PublicApi.get("/questions/all");
      setDoubts(response.data);
      toast.success("Dúvidas recuperadas com sucesso!");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsFetchingData(false);
    }
  };

  useEffect(() => {
    fetchDoubts();
  }, []);

  return (
    <div className="w-screen flex flex-col gap-y-4 items-center justify-center mt-4">
      <div className="relative grid grid-flow-col place-items-center w-full">
        <h1 className="text-[36px]">DÚVIDAS ENVIADAS:</h1>
        <UpdateButton
          onClick={() => fetchDoubts()}
          style={`top-0 right-4 bg-cerBlue rounded-[20px] h-[calc(10vh-2rem)] w-[calc(15vw-2rem)] hover:bg-cerPurple hover:text-white focus:outline-none focus:bg-cerPurple focus:text-white focus:border-[1px] focus:border-white`}
        />
      </div>
      <div className="grid grid-flow-row grid-rows-3 gap-y-6 overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-cerBlue">
        {(isFetchingData && <LoadingIcon />) ||
          (doubts.length > 0 &&
            doubts.map((doubt) => {
              return (
                !doubt.isAnswered && (
                  <DoubtCard
                    id={doubt.id}
                    name={doubt.name}
                    email={doubt.contactEmail}
                    text={doubt.text}
                    sideEffect={()=> {fetchDoubts();}}
                    key={doubt.id}
                  />
                )
              );
            }))}
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default DoubtsDashboard;
