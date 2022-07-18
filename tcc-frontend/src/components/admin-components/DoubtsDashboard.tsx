import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { PublicApi } from "../../lib/api";
import LoadingIcon from "../LoadingIcon";
import DoubtCard from "./DoubtCard";

function DoubtsDashboard() {
  const [doubts, setDoubts] = useState([]);
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
      <h1 className="text-[36px]">DÚVIDAS ENVIADAS</h1>
      <div className="grid grid-flow-row grid-rows-3 gap-y-6 overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-cerBlue">
        {(isFetchingData && <LoadingIcon />) ||
          (doubts.length > 0 &&
            doubts.map((doubt) => {
              return (
                <DoubtCard
                  id={doubt.id}
                  name={doubt.name}
                  email={doubt.contactEmail}
                  text={doubt.text}
                  key={doubt.id}
                />
              );
            }))}
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default DoubtsDashboard;
